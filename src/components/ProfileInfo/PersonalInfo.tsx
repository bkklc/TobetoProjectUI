import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileInfo from "../../pages/ProfileInfo/ProfileInfo";

const PersonalInfo = () => {
  <ProfileInfo />;

  return (
    <Container>
      <Row className="mb-2">
        <Col className="col-12 mb-6 text-center">
          <div className="profile-photo mx-auto">
            <img
              alt=""
              aria-hidden="true"
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=384&q=75"
            />

            <div className="photo-edit-btn cursor-pointer" />
          </div>

          <div className="row mb-2"></div>
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
                  >
                    <button
                      className="uppy-u-reset uppy-Dashboard-close"
                      type="button"
                      aria-label="Kapat"
                      title="Kapat"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="uppy-Dashboard-innerWrap">
                      <div className="uppy-Dashboard-dropFilesHereHint">
                        Buraya sürükleyip bırakın
                      </div>
                      <div className="uppy-Dashboard-AddFiles">
                        <input
                          className="uppy-Dashboard-input"
                          aria-hidden="true"
                          tabIndex={-1}
                          type="file"
                          name="files[]"
                          accept="image/jpeg,image/png"
                        />
                        <input
                          className="uppy-Dashboard-input"
                          aria-hidden="true"
                          tabIndex={-1}
                          type="file"
                          name="files[]"
                          accept="image/jpeg,image/png"
                        />
                        <div className="uppy-Dashboard-AddFiles-title">
                          Sürükleyip bırak, yapıştır veya{" "}
                          <button
                            type="button"
                            className="uppy-u-reset uppy-c-btn uppy-Dashboard-browse"
                            data-uppy-super-focusable="true"
                          >
                            gözat
                          </button>
                        </div>
                        <div
                          className="uppy-Dashboard-AddFiles-list"
                          role="tablist"
                        >
                          <span
                            role="presentation"
                            style={{ whiteSpace: "nowrap" }}
                          />
                        </div>
                        <div className="uppy-Dashboard-AddFiles-info">
                          <a
                            tabIndex={-1}
                            href="https://uppy.io"
                            rel="noreferrer noopener"
                            target="_blank"
                            className="uppy-Dashboard-poweredBy"
                          >
                            Powered by{" "}
                            <span>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                className="uppy-c-icon uppy-Dashboard-poweredByIcon"
                                width={11}
                                height={11}
                                viewBox="0 0 11 11"
                              >
                                <path d="M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z" />
                              </svg>
                              <span className="uppy-Dashboard-poweredByUppy">
                                Uppy
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="uppy-Dashboard-progressindicators">
                        <div
                          className="uppy-StatusBar is-waiting"
                          aria-hidden="true"
                        >
                          <div
                            className="uppy-StatusBar-progress"
                            role="progressbar"
                            aria-label="0%"
                            aria-valuetext="0%"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={0}
                            style={{ width: "0%" }}
                          />
                          <div className="uppy-StatusBar-actions" />
                        </div>
                        <div className="uppy uppy-Informer">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
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
          />
        </div>
        <div className="col-12 col-md-6 mb-6">
          <label className="input-label-text">Soyadınız*</label>
          <input
            name="surname"
            className="form-control tobeto-input"
            type="text"
          />
        </div>
        <div className="col-12 col-md-6 mb-6">
          <label className="input-label-text">Telefon Numaranız*</label>
          <div className="PhoneInput">
            <div className="PhoneInputCountry">
              <select
                name="phoneNumberCountry"
                aria-label="Ülke telefon numarası"
                className="PhoneInputCountrySelect"
              >
                <option value="TR">Ülke Seçiniz</option>
                <option value="TR">Türkiye</option>
              </select>
              <div
                aria-hidden="true"
                className="PhoneInputCountryIcon PhoneInputCountryIcon--border"
              ></div>
              <div className="PhoneInputCountrySelectArrow" />
            </div>
            <input
              type="tel"
              autoComplete="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="PhoneInputInput"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mb-6">
          <label className="input-label-text">Doğum Tarihiniz*</label>
          <input
            name="birthday"
            max="2024-01-015"
            className="form-control tobeto-input"
            type="date"
          />
        </div>
        <div className="col-12 col-md-6 mb-6">
          <label className="input-label-text">TC Kimlik No*</label>
          <input
            name="identifier"
            className="form-control tobeto-input mb-2"
            type="number"
          />
          <span
            className="text-danger"
            style={{ fontStyle: "italic", fontSize: 14 }}
          >
            *Aboneliklerde fatura için doldurulması zorunlu alan
          </span>
        </div>
        <div className="col-12 col-md-6 mb-6">
          <label className="input-label-text">E-posta</label>
          <input
            name="email"
            className="form-control tobeto-input"
            type="text"
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
            defaultValue={""}
          />
        </div>
      </Row>
    </Container>
  );
};

export default PersonalInfo;
