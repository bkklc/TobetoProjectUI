import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const PersonalInfo = () => {
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

                <div className="row mb-2">

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
                                            <div className="uppy-Dashboard-AddFiles-list" role="tablist">
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
                                                            <path
                                                                d="M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z"
                                                                
                                                            />
                                                        </svg>
                                                        <span className="uppy-Dashboard-poweredByUppy">
                                                            Uppy
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="uppy-Dashboard-progressindicators">
                                            <div className="uppy-StatusBar is-waiting" aria-hidden="true">
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
                <input name="name" className="form-control tobeto-input" type="text" />
            </div>
            <div className="col-12 col-md-6 mb-6">
                <label className="input-label-text">Soyadınız*</label>
                <input name="surname" className="form-control tobeto-input" type="text" />
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
                            <option value="ZZ">Uluslararası</option>
                            <option value="AF">Afganistan</option>
                            <option value="AX">Åland Adaları</option>
                            <option value="DE">Almanya</option>
                            <option value="US">Amerika Birleşik Devletleri</option>
                            <option value="AS">Amerikan Samoası</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AG">Antigua ve Barbuda</option>
                            <option value="AR">Arjantin</option>
                            <option value="AL">Arnavutluk</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Avustralya</option>
                            <option value="AT">Avusturya</option>
                            <option value="AZ">Azerbaycan</option>
                            <option value="BL">Aziz Barthélemy</option>
                            <option value="SH">Aziz Helena</option>
                            <option value="BS">Bahamalar</option>
                            <option value="BH">Bahreyn</option>
                            <option value="BD">Bangladeş</option>
                            <option value="BB">Barbados</option>
                            <option value="EH">Batı Sahra</option>
                            <option value="BE">Belçika</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BY">Beyaz Rusya</option>
                            <option value="AE">Birleşik Arap Emirlikleri</option>
                            <option value="BO">Bolivya</option>
                            <option value="BQ">Bonaire, Sint Eustatius ve Saba</option>
                            <option value="BA">Bosna Hersek</option>
                            <option value="BW">Botsvana</option>
                            <option value="BR">Brezilya</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaristan</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="BT">Butan</option>
                            <option value="KY">Cayman Adaları</option>
                            <option value="GI">Cebelitarık</option>
                            <option value="DZ">Cezayir</option>
                            <option value="CX">Christmas Adası</option>
                            <option value="DJ">Cibuti</option>
                            <option value="CC">Cocos (Keeling) Adaları</option>
                            <option value="CK">Cook Adaları</option>
                            <option value="CW">Curaçao</option>
                            <option value="TD">Çad</option>
                            <option value="CZ">Çek Cumhuriyeti</option>
                            <option value="CN">Çin</option>
                            <option value="DK">Danimarka</option>
                            <option value="TL">Doğu Timor</option>
                            <option value="DO">Dominik Cumhuriyeti</option>
                            <option value="DM">Dominika</option>
                            <option value="EC">Ekvador</option>
                            <option value="GQ">Ekvator Ginesi</option>
                            <option value="SV">El Salvador</option>
                            <option value="ID">Endonezya</option>
                            <option value="ER">Eritre</option>
                            <option value="AM">Ermenistan</option>
                            <option value="EE">Estonya</option>
                            <option value="ET">Etiyopya</option>
                            <option value="FK">Falkland Adaları</option>
                            <option value="FO">Faroe Adaları</option>
                            <option value="MA">Fas</option>
                            <option value="FJ">Fiji</option>
                            <option value="CI">Fildişi Sahili</option>
                            <option value="PH">Filipinler</option>
                            <option value="PS">Filistin</option>
                            <option value="FI">Finlandiya</option>
                            <option value="FR">Fransa</option>
                            <option value="GF">Fransız Guyanası</option>
                            <option value="PF">Fransız Polinezyası</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambiya</option>
                            <option value="GH">Gana</option>
                            <option value="GN">Gine</option>
                            <option value="GW">Gine-Bissau</option>
                            <option value="GD">Grenada</option>
                            <option value="GL">Grönland</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GY">Guyana</option>
                            <option value="ZA">Güney Afrika</option>
                            <option value="KR">Güney Kore</option>
                            <option value="SS">Güney Sudan</option>
                            <option value="GE">Gürcistan</option>
                            <option value="HT">Haiti</option>
                            <option value="HR">Hırvatistan</option>
                            <option value="IN">Hindistan'da</option>
                            <option value="NL">Hollanda</option>
                            <option value="VA">Holy See (Vatikan Şehir Devleti)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="IQ">Irak</option>
                            <option value="IO">İngiliz Hint Okyanusu Bölgesi</option>
                            <option value="GB">İngiltere</option>
                            <option value="IR">İran</option>
                            <option value="IE">İrlanda</option>
                            <option value="ES">İspanya</option>
                            <option value="IL">İsrail</option>
                            <option value="SE">İsveç</option>
                            <option value="CH">İsviçre</option>
                            <option value="IT">İtalya</option>
                            <option value="IS">İzlanda</option>
                            <option value="JM">Jamaika</option>
                            <option value="JP">Japonya</option>
                            <option value="JE">Jersey</option>
                            <option value="KH">Kamboçya</option>
                            <option value="CM">Kamerun</option>
                            <option value="CA">Kanada</option>
                            <option value="ME">Karadağ</option>
                            <option value="QA">Katar</option>
                            <option value="KZ">Kazakistan</option>
                            <option value="KE">Kenya</option>
                            <option value="CY">Kıbrıs</option>
                            <option value="KG">Kırgızistan</option>
                            <option value="KI">Kiribati</option>
                            <option value="CO">Kolombiya</option>
                            <option value="KM">Komorlar</option>
                            <option value="CG">Kongo</option>
                            <option value="CD">Kongo, Demokratik Cumhuriyeti</option>
                            <option value="XK">Kosova</option>
                            <option value="CR">Kosta Rika</option>
                            <option value="KW">Kuveyt</option>
                            <option value="KP">Kuzey Kore</option>
                            <option value="MK">Kuzey Makedonya</option>
                            <option value="MP">Kuzey Mariana Adaları</option>
                            <option value="CU">Küba</option>
                            <option value="LA">Laos</option>
                            <option value="LS">Lesotho</option>
                            <option value="LV">Letonya</option>
                            <option value="LR">Liberya</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Lihtenştayn</option>
                            <option value="LT">Litvanya</option>
                            <option value="LB">Lübnan</option>
                            <option value="LU">Lüksemburg</option>
                            <option value="HU">Macaristan</option>
                            <option value="MG">Madagaskar</option>
                            <option value="MO">Makao</option>
                            <option value="MW">Malavi</option>
                            <option value="MV">Maldivler</option>
                            <option value="MY">Malezya</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="IM">Man Adası</option>
                            <option value="MH">Marshall Adaları</option>
                            <option value="MQ">Martinik</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Meksika</option>
                            <option value="EG">Mısır</option>
                            <option value="FM">Mikronezya Federal Devletleri</option>
                            <option value="MN">Moğolistan</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monako</option>
                            <option value="MS">Montserrat</option>
                            <option value="MR">Moritanya</option>
                            <option value="MZ">Mozambik</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibya</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NE">Nijer</option>
                            <option value="NG">Nijerya</option>
                            <option value="NI">Nikaragua</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Adası</option>
                            <option value="NO">Norveç</option>
                            <option value="CF">Orta Afrika Cumhuriyeti</option>
                            <option value="UZ">Özbekistan</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua Yeni Gine</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PL">Polonya</option>
                            <option value="PT">Portekiz</option>
                            <option value="PR">Porto Riko</option>
                            <option value="RO">Romanya</option>
                            <option value="RW">Ruanda</option>
                            <option value="RU">Rusya</option>
                            <option value="KN">Saint Kitts ve Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (Fransız Bölgesi)</option>
                            <option value="PM">Saint Pierre ve Miquelon</option>
                            <option value="VC">Saint Vincent ve Grenadinler</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome ve Principe</option>
                            <option value="SN">Senegal</option>
                            <option value="SC">Seyşeller</option>
                            <option value="RS">Sırbistan</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapur</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakya</option>
                            <option value="SI">Slovenya</option>
                            <option value="SB">Solomon Adaları</option>
                            <option value="SO">Somali</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Surinam</option>
                            <option value="SY">Suriye</option>
                            <option value="SA">Suudi Arabistan</option>
                            <option value="SJ">Svalbard ve Jan Mayen</option>
                            <option value="SZ">Svaziland</option>
                            <option value="CL">Şili</option>
                            <option value="TJ">Tacikistan</option>
                            <option value="TZ">Tanzanya</option>
                            <option value="TH">Tayland</option>
                            <option value="TW">Tayvan</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad ve Tobago</option>
                            <option value="TA">Tristan da Cunha</option>
                            <option value="TN">Tunus</option>
                            <option value="TC">Turks ve Caicos Adaları</option>
                            <option value="TV">Tuvalu</option>
                            <option value="TR">Türkiye</option>
                            <option value="TM">Türkmenistan</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukrayna</option>
                            <option value="OM">Umman</option>
                            <option value="UY">Uruguay</option>
                            <option value="JO">Ürdün</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VI">Virgin Adaları, ABD</option>
                            <option value="VG">Virgin Adaları, İngiliz</option>
                            <option value="WF">Wallis ve Futuna</option>
                            <option value="YE">Yemen</option>
                            <option value="NC">Yeni Kaledonya</option>
                            <option value="NZ">Yeni Zelanda</option>
                            <option value="RE">Yeniden Birleşme</option>
                            <option value="CV">Yeşil Burun Adaları</option>
                            <option value="GR">Yunanistan</option>
                            <option value="AC">Yükseliş Adası</option>
                            <option value="ZM">Zambiya</option>
                            <option value="ZW">Zimbabve</option>
                        </select>
                        <div
                            aria-hidden="true"
                            className="PhoneInputCountryIcon PhoneInputCountryIcon--border"
                        >
                            <img
                                className="PhoneInputCountryIconImg"
                                alt="Türkiye"
                                src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg"
                            />
                        </div>
                        <div className="PhoneInputCountrySelectArrow" />
                    </div>
                    <input
                        type="tel"
                        autoComplete="tel"
                        placeholder="5** *** ** **"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="PhoneInputInput"
                        defaultValue="+90 541 421 71 56"
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
                <span className="text-danger" style={{ fontStyle: "italic", fontSize: 14 }}>
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
                <input name="country" className="form-control tobeto-input" type="text" />
            </div>
            <div className="col-12 col-md-6 mb-6">
                <label className="input-label-text">İl*</label>
                <select name="city" className="form-select tobeto-input" aria-label="">
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
                <select name="district" className="form-select tobeto-input" aria-label="">
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
        

    )
}

export default PersonalInfo
