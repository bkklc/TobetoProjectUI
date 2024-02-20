import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import tokenDecode from "../../../hooks/tokenDecode";
import UpdateRequestUser, { defaultUpdateRequestUser } from "../../../models/requests/user/UpdateRequestUser";
import GetByIdResponseUser, { defaultUser } from "../../../models/response/user/GetByIdResponseUser";
import userService from "../../../services/userService";
import cityService from "../../../services/cityService";
import townService from "../../../services/townService";
import Paginate from "../../../models/paginate";
import GetAllResponseTown, { defaultGetAllResponseTown } from "../../../models/response/town/GetAllResponseTown";
import GetAllCities, { defaultGetAllCities } from "../../../models/response/city/GetAllCities";
import Uppy from "@uppy/core";
import { DashboardModal } from '@uppy/react'
import XHR from '@uppy/xhr-upload';
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import imageService from "../../../services/imageService";


const PersonalInfo = () => {
  const [responseData, setResponseData] = useState<GetByIdResponseUser>(defaultUser);
  const [formData, setFormData] = useState<UpdateRequestUser>(defaultUpdateRequestUser);
  const [towns, setTowns] = useState<Paginate<GetAllResponseTown>>({ items: [defaultGetAllResponseTown] });
  const [cities, setCities] = useState<Paginate<GetAllCities>>({ items: [defaultGetAllCities] });
  const [selectedCity, setSelectedCity] = useState('0');
  const [isOpen, setIsOpen] = useState(false);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userService
      .update(formData)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const fetchData = async () => {
    try {
      await userService.getById(tokenDecode().ID).then((res) => {
        if (res.status === 200) {
          setResponseData(res.data);
          setFormData({
            Id: Number(tokenDecode().ID),
            NationalIdentity: res.data.nationalIdentity,
            FirstName: res.data.firstName,
            LastName: res.data.lastName,
            PhoneNumber: res.data.phoneNumber,
            Email: res.data.email,
            Description: res.data.description,
            ImageId: res.data.imageId,
            BirthDate: res.data.birthDate,
          })
        }
      });
    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };


  const fetchCities = async () => {
    try {
      await cityService.getAll(0, 81).then((res) => {
        if (res.status === 200) {
          setCities(res.data);
        }
      });
    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const fetchTowns = async () => {
    try {
      await townService.getByCityId(selectedCity).then((res) => {
        if (res.status === 200) {
          setTowns(res.data);
        }
      });
    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    fetchData();
    fetchCities();
    fetchTowns();
  }, [selectedCity]);



  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const uppy = new Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: 2000000,
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1
    }
  })
  uppy.use(XHR, { endpoint: "https://hoixi.com.tr/api/FileUpload" })

  uppy.on('upload-success', (file: any, response: any) => {
    if (responseData.imageId === 3) {
      imageService.add({
        Name: file.name,
        Path: response.body.sitePath,
      }).then(res => {
        userService.getById(tokenDecode().ID)
          .then(resUser => {
            userService.update({
              Id: Number(tokenDecode().ID),
              NationalIdentity: resUser.data.nationalIdentity,
              FirstName: resUser.data.firstName,
              LastName: resUser.data.lastName,
              PhoneNumber: resUser.data.phoneNumber,
              Email: resUser.data.email,
              Description: resUser.data.description,
              ImageId: Number(res.data.Id),
              BirthDate: resUser.data.birthDate
            })
            fetchData();
          })
      })
    }

    else {
      userService.getById(tokenDecode().ID)
      .then(res => {
        imageService.update({
          Id:res.data.imageId,
          Path:response.body.sitePath,
          Name: file.name,
        })
        fetchData();
      })
    }

    
  });

  return (
    <>
    
      <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
      <DashboardModal uppy={uppy} open={isOpen} closeModalOnClickOutside onRequestClose={toggleModal} />
        <Form data-hs-cf-bound="true" onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Col mb={6} md={12} className="text-center">
              <div className="profile-photo mx-auto">
                <span>
                  <span>
                    <div className="profile-picture-container" style={{ width: "148px", height: "148px" }}>
                      <img
                        src={responseData.imagePath}
                        alt="Profile"
                        className={`rounded-circle profile-picture `}
                      />
                    </div>
                  </span>
                </span>
                <div className="photo-edit-btn cursor-pointer " onClick={toggleModal}/>
              </div>
              <div>               
              </div>
            </Col>

            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Adınız*</label>
              <input
                name="name"
                className="form-control tobeto-input"
                type="text"
                defaultValue={responseData.firstName}
                onChange={e => setFormData({ ...formData, FirstName: e.target.value })}
              />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Soyadınız*</label>
              <input
                name="surname"
                className="form-control tobeto-input"
                type="text"
                defaultValue={responseData.lastName}
                onChange={e => setFormData({ ...formData, LastName: e.target.value })}
              />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Telefon Numaranız*</label>
              <PhoneInput
                defaultCountry="TR"
                name="phonenumber"
                placeholder="Enter phone number"
                value={responseData.phoneNumber}
                onChange={(value) => setFormData({ ...formData, PhoneNumber: String(value) })}
              />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Doğum Tarihiniz*</label>
              <input
                name="birthday"
                max="2024-01-016"
                className="form-control tobeto-input"
                type="date"
                defaultValue={responseData.birthDate.split("T")[0]}
                onChange={e => setFormData({ ...formData, BirthDate: e.target.value })}
              />
            </div>

            <div className=" col-md-6 mb-6">
              <label className="input-label-text">TC Kimlik No*</label>
              <input
                name="identifier"
                className="form-control tobeto-input mb-2"
                type="number"
                defaultValue={responseData.nationalIdentity}
                onChange={e => setFormData({ ...formData, NationalIdentity: e.target.value })}
              />
              <span className="text-danger">
                *Aboneliklerde fatura için doldurulması zorunlu alan
              </span>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">E-posta</label>
              <input
                name="identifier"
                className="form-control tobeto-input mb-2"
                type="email"
                defaultValue={responseData.email}
                onChange={e => setFormData({ ...formData, Email: e.target.value })}
              />
            </div>

            <Col className="col-12 mb-6">
              <Form.Label className="input-label-text">Ülke*</Form.Label>
              <Form.Control
                name="country"
                className="form-control tobeto-input"
                type="text"
              />
            </Col>
            <Col className="col-12 col-md-6 mb-6">
              <Form.Label className="input-label-text">İl*</Form.Label>
              <Form.Select
                name="city"
                className="form-select tobeto-input"
                aria-label=""
                onChange={handleCityChange}
              >
                <option value="0">İl seçiniz</option>
                {
                  cities.items.map((city: any) => (
                    <option value={city.id}>{city.name}</option>
                  ))
                }
              </Form.Select>
            </Col>
            <Col className="col-12 col-md-6 mb-6">
              <Form.Label className="input-label-text">İlçe*</Form.Label>
              <Form.Select
                name="town"
                className="form-select tobeto-input"
                aria-label=""

              >
                {
                  towns.items.map((town: any) => (
                    <option>{town.name}</option>
                  ))
                }
              </Form.Select>
            </Col>
            <Col className="col-12 mb-6">
              <Form.Label className="input-label-text">Mahalle / Sokak</Form.Label>
              <FormControl
                as="textarea"
                rows={5}
                name="address"
                className="form-control tobeto-input"
                defaultValue={""}
              />
            </Col>
            <div className="col-12 mb-6">
              <label className="input-label-text">Hakkımda</label>
              <textarea
                name="description"
                rows={6}
                cols={50}
                className="form-control tobeto-input"
                placeholder="Kendini kısaca tanıt"
                defaultValue={responseData.description}
                onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
              />
            </div>
          </Row>
          <Button type="submit" className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
            Kaydet
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default PersonalInfo;
