import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import tokenDecode from "../../../hooks/tokenDecode";
import UpdateRequestUser from "../../../models/requests/user/UpdateRequestUser";
import GetByIdResponseUser from "../../../models/response/user/GetByIdResponseUser";
import userService from "../../../services/userService";

const PersonalInfo = () => {
  const [formData, setFormData] = useState<UpdateRequestUser>({
    Id: 0,
    NationalIdentity: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Description: "",
    ImageId: 0,
    BirthDate: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userService
      .update(formData)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const [responseData, setResponseData] = useState<GetByIdResponseUser>({
    nationalIdentity: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
    imageId: 0,
    birthDate: "",
  });

  const fetchData = async () => {
    try {
      await userService.getById(tokenDecode().ID).then((res) => {
        if (res.status === 200) {
          setResponseData(res.data);
        }
      });
    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
        <Form data-hs-cf-bound="true">
          <Row className="mb-2">
            <Col mb={6} md={12} className="text-center">
              <div className="profile-photo mx-auto">
                <span>
                  <span>
                    <img
                      alt=""
                      aria-hidden="true"
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=384&q=75"
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
              />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Soyadınız*</label>
              <input
                name="surname"
                className="form-control tobeto-input"
                type="text"
                defaultValue={responseData.lastName}
              />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Telefon Numaranız*</label>
              <PhoneInput
                defaultCountry="TR"
                name="phonenumber"
                placeholder="Enter phone number"
                onChange={() => setFormData}
                value={responseData.phoneNumber}
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
              />
            </div>

            <div className=" col-md-6 mb-6">
              <label className="input-label-text">TC Kimlik No*</label>
              <input
                name="identifier"
                className="form-control tobeto-input mb-2"
                type="number"
                defaultValue={responseData.nationalIdentity}
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
              />
            </div>

            <div className="col-12 mb-6">
              <label className="input-label-text">Ülke*</label>
              <input
                name="country"
                className="form-control tobeto-input"
                type="text"
              />
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">İl*</label>
              <select
                name="city"
                className="form-select tobeto-input"
                aria-label=""
              >
                <option value="">İl Seçiniz</option>
              </select>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">İlçe*</label>
              <select
                name="district"
                className="form-select tobeto-input"
                aria-label=""
              >
                <option value="">İlçe Seçiniz</option>
              </select>
            </div>
            <div className="col-12 mb-6">
              <label className="input-label-text">Mahalle / Sokak</label>
              <textarea
                rows={5}
                name="address"
                className="form-control tobeto-input"
                defaultValue={""}
              />
            </div>
            <div className="col-12 mb-6">
              <label className="input-label-text">Hakkımda</label>
              <textarea
                name="description"
                rows={6}
                cols={50}
                className="form-control tobeto-input"
                placeholder="Kendini kısaca tanıt"
                defaultValue={responseData.description}
              />
            </div>
          </Row>
          <Button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
            Kaydet
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default PersonalInfo;
