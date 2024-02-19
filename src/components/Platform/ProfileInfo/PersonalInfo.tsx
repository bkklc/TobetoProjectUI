import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import tokenDecode from "../../../hooks/tokenDecode";
import UpdateRequestUser from "../../../models/requests/user/UpdateRequestUser";
import GetByIdResponseUser from "../../../models/response/user/GetByIdResponseUser";
import userService from "../../../services/userService";
import cityService from "../../../services/cityService";
import townService from "../../../services/townService";
import Paginate from "../../../models/paginate";
import GetAllResponseTown from "../../../models/response/town/GetAllResponseTown";
import GetAllCities from "../../../models/response/city/GetAllCities";

const PersonalInfo = () => {
  const [responseData, setResponseData] = useState<GetByIdResponseUser>({
    nationalIdentity: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
    imageId: 0,
    imagePath:"",
    birthDate: "",
    userSocialMedias:[],
    userLanguages: [],
    certificates: [],
    userAnnouncements: [],
    experiences: [],
    userSurveys: [],
    addresses: [],
    educations: []
  });
  const [formData, setFormData] = useState<UpdateRequestUser>({
    Id: Number(tokenDecode().ID),
    NationalIdentity: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Description: "",
    ImageId: 0,
    BirthDate: "",
  });

  const [towns, setTowns] = useState<Paginate<GetAllResponseTown>>({ items: [] });
  const [cities, setCities] = useState<Paginate<GetAllCities>>({ items: [] });
  const [selectedCity, setSelectedCity] = useState('0');

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
      await cityService.getAll().then((res) => {
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


  return (
    <>
      <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
        <Form data-hs-cf-bound="true" onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Col mb={6} md={12} className="text-center">
              <div className="profile-photo mx-auto">
                <span>
                  <span>
                    <img
                    className="rounded-circle"
                      alt=""
                      aria-hidden="true"
                      src={responseData.imagePath}
                      height={148}
                      width={148}
                    />
                  </span>
                </span>
                <div className="photo-edit-btn cursor-pointer" />
              </div>
              <div>
                <div className="uppy-Container">
                  <div className="uppy-Root" dir="ltr">
                    <div
                      className="uppy-Dashboard uppy-Dashboard--animateOpenClose uppy-Dashboard--modal uppy-Dashboard--isInnerWrapVisible"
                      data-uppy-theme="light"
                      data-uppy-num-acquirers={0}
                      data-uppy-drag-drop-supported="true"
                      aria-hidden="true"
                      aria-disabled="false"
                      aria-label="Dosya Yükle (Kapatmak için Esc)"
                    >
                      <div
                        aria-hidden="true"
                        className="uppy-Dashboard-overlay"
                        tabIndex={-1}
                      />
                      <div
                        className="uppy-Dashboard-inner"
                        aria-modal="true"
                        role="dialog"
                      ></div>
                    </div>
                  </div>
                </div>
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
