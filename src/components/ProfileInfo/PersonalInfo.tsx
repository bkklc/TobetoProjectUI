import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileInfo from "./SideMenu";

const PersonalInfo = () => {
  return (
    <>
      <div className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
        <form action="#" data-hs-cf-bound="true">
          <div className="row mb-2">
            <div className="col-12 mb-6 text-center">
              <div className="profile-photo mx-auto">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=384&q=75"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
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
            </div>
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
                  <div className="PhoneInputCountrySelectArrow" />
                </div>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="5** *** ** **"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="PhoneInputInput"
                  defaultValue="+90 506 058 78 88"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-6">
              <label className="input-label-text">Doğum Tarihiniz*</label>
              <input
                name="birthday"
                max="2024-01-016"
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
                <option value={4}>Adana</option>
                <option value={5}>Adıyaman</option>
                <option value={6}>Afyonkarahisar</option>
                <option value={7}>Ağrı</option>
                <option value={71}>Aksaray</option>
                <option value={8}>Amasya</option>
                <option value={9}>Ankara</option>
                <option value={10}>Antalya</option>
                <option value={78}>Ardahan</option>
                <option value={11}>Artvin</option>
                <option value={12}>Aydın</option>
                <option value={13}>Balıkesir</option>
                <option value={77}>Bartın</option>
                <option value={75}>Batman</option>
                <option value={72}>Bayburt</option>
                <option value={14}>Bilecik</option>
                <option value={15}>Bingöl</option>
                <option value={16}>Bitlis</option>
                <option value={17}>Bolu</option>
                <option value={18}>Burdur</option>
                <option value={19}>Bursa</option>
                <option value={20}>Çanakkale</option>
                <option value={21}>Çankırı</option>
                <option value={22}>Çorum</option>
                <option value={23}>Denizli</option>
                <option value={24}>Diyarbakır</option>
                <option value={84}>Düzce</option>
                <option value={25}>Edirne</option>
                <option value={26}>Elazığ</option>
                <option value={27}>Erzincan</option>
                <option value={28}>Erzurum</option>
                <option value={29}>Eskişehir</option>
                <option value={30}>Gaziantep</option>
                <option value={31}>Giresun</option>
                <option value={32}>Gümüşhane</option>
                <option value={33}>Hakkari</option>
                <option value={34}>Hatay</option>
                <option value={79}>Iğdır</option>
                <option value={35}>Isparta</option>
                <option value={37}>İstanbul</option>
                <option value={38}>İzmir</option>
                <option value={49}>Kahramanmaraş</option>
                <option value={81}>Karabük</option>
                <option value={73}>Karaman</option>
                <option value={39}>Kars</option>
                <option value={40}>Kastamonu</option>
                <option value={41}>Kayseri</option>
                <option value={82}>Kilis</option>
                <option value={74}>Kırıkkale</option>
                <option value={42}>Kırklareli</option>
                <option value={43}>Kırşehir</option>
                <option value={44}>Kocaeli</option>
                <option value={45}>Konya</option>
                <option value={46}>Kütahya</option>
                <option value={47}>Malatya</option>
                <option value={48}>Manisa</option>
                <option value={50}>Mardin</option>
                <option value={36}>Mersin</option>
                <option value={51}>Muğla</option>
                <option value={52}>Muş</option>
                <option value={53}>Nevşehir</option>
                <option value={54}>Niğde</option>
                <option value={55}>Ordu</option>
                <option value={83}>Osmaniye</option>
                <option value={56}>Rize</option>
                <option value={57}>Sakarya</option>
                <option value={58}>Samsun</option>
                <option value={66}>Şanlıurfa</option>
                <option value={59}>Siirt</option>
                <option value={60}>Sinop</option>
                <option value={61}>Sivas</option>
                <option value={76}>Şırnak</option>
                <option value={62}>Tekirdağ</option>
                <option value={63}>Tokat</option>
                <option value={64}>Trabzon</option>
                <option value={65}>Tunceli</option>
                <option value={67}>Uşak</option>
                <option value={68}>Van</option>
                <option value={80}>Yalova</option>
                <option value={69}>Yozgat</option>
                <option value={70}>Zonguldak</option>
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
                <option value={1390}>Adalar</option>
                <option value={1421}>Arnavutköy</option>
                <option value={1422}>Ataşehir</option>
                <option value={1413}>Avcılar</option>
                <option value={1414}>Bağcılar</option>
                <option value={1415}>Bahçelievler</option>
                <option value={1391}>Bakırköy</option>
                <option value={1423}>Başakşehir</option>
                <option value={1412}>Bayrampaşa</option>
                <option value={1392}>Beşiktaş</option>
                <option value={1393}>Beykoz</option>
                <option value={1424}>Beylikdüzü</option>
                <option value={1394}>Beyoğlu</option>
                <option value={1407}>Büyükçekmece</option>
                <option value={1395}>Çatalca</option>
                <option value={1425}>Çekmeköy</option>
                <option value={1420}>Esenler</option>
                <option value={1426}>Esenyurt</option>
                <option value={1396}>Eyüp</option>
                <option value={1397}>Fatih</option>
                <option value={1398}>Gaziosmanpaşa</option>
                <option value={1416}>Güngören</option>
                <option value={1399}>Kadıköy</option>
                <option value={1408}>Kağıthane</option>
                <option value={1400}>Kartal</option>
                <option value={1409}>Küçükçekmece</option>
                <option value={1417}>Maltepe</option>
                <option value={1410}>Pendik</option>
                <option value={1427}>Sancaktepe</option>
                <option value={1401}>Sarıyer</option>
                <option value={1403}>Şile</option>
                <option value={1402}>Silivri</option>
                <option value={1404}>Şişli</option>
                <option value={1418}>Sultanbeyli</option>
                <option value={1428}>Sultangazi</option>
                <option value={1419}>Tuzla</option>
                <option value={1411}>Ümraniye</option>
                <option value={1405}>Üsküdar</option>
                <option value={1406}>Zeytinburnu</option>
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
          </div>
          <button className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
            Kaydet
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
