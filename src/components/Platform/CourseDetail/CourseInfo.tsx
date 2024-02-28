
import { Container, Tab, Tabs } from "react-bootstrap";

import CourseContentComponent from "./CourseContentComponent";

const CourseInfo = () => {
  return (
    <div id="wrapper-content" className="wrapper without-slide">
      <div id="dynamicContent" className="content">
        <div className="page-content activity-detail">
          <div className="activity-detail-header">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-2 col-xs-12 show-text-lg show-text-md show-text-sm hidden-text-xs">
                <img
                  className="activity-image"
                  src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                  width={73}
                  alt=".NET & React Fullstack | Öğrenme Yolculuğu"
                />
              </div>
              <div className="col-lg-11 col-md-11 col-sm-10 col-xs-12">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-4 col-xs-12">
                        <div
                          className="activity-info"
                          data-gtm-vis-recent-on-screen103964688_7={3690}
                          data-gtm-vis-first-on-screen103964688_7={3690}
                          data-gtm-vis-total-visible-time103964688_7={100}
                          data-gtm-vis-has-fired103964688_7={1}
                        >
                          <h3>
                            .NET &amp; React Fullstack | Öğrenme Yolculuğu
                          </h3>
                          <span hidden className="new-tag orange">
                            YENİ
                          </span>
                          <span hidden className="new-tag blue">
                            GELİŞİM YOLCULUĞU
                          </span>
                          <span hidden className="new-tag red">
                            ZORUNLU
                          </span>
                          <div className="date-info-container">
                            <span>
                              <div className="date-info text-dark-blue mb-1">
                                {" "}
                                <span>Bitirmek için 12 günün var</span>
                              </div>
                              <span
                                role="img"
                                aria-label="question-circle"
                                id="info-text-question"
                                className="anticon anticon-question-circle"
                              >
                                <svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  className=""
                                  data-icon="question-circle"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                                  <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="activity-process col-lg-5 col-md-5 col-sm-8 col-xs-12 text-lg-right text-md-right text-sm-right text-xs-center">
                        <div
                          className="ant-space ant-space-horizontal ant-space-align-center"
                          style={{ gap: 8 }}
                        >
                          <div className="ant-space-item" style={{}}>
                            <div className="activity-score text-white background-blue">
                              <span className="account-balance">35</span> PUAN
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="activity-progress-bar">
                      <div
                        className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default md-10"
                        role="progressbar"
                      >
                        <div
                          className="ant-progress-outer"
                          style={{ width: "100%", height: 2 }}
                        >
                          <div className="ant-progress-inner">
                            <div
                              className="ant-progress-bg"
                              style={{ width: "58%", height: 1 }}
                            />

                            <span className="" title="58%">
                              58%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="activity-detail-tabs">
            <div
              className="ant-tabs ant-tabs-top"
              style={{ overflow: "unset" }}
            >
              <Container className="mb-10">
                <Tabs
                  defaultActiveKey="applications"
                  id="justify-tab-example"
                  className="nav nav-tabs mainTablist "
                  justify
                >
                  <Tab eventKey="applications" title="İçerik">
                    <div className="pt-10">
                    <CourseContentComponent />
                    </div>
                    
                  </Tab>
                  <Tab eventKey="courses" title="Hakkında">
                    <div className="ant-tabs-content-holder pt-10">
                      <div className="ant-tabs-content ant-tabs-content-top">
                        <div
                          role="tabpanel"
                          tabIndex={-1}
                          aria-hidden="true"
                          className="ant-tabs-tabpane ant-tabs-tabpane-hidden"
                          id="rc-tabs-0-panel-content"
                          aria-labelledby="rc-tabs-0-tab-content"
                        />
                        <div
                          id="rc-tabs-0-panel-about"
                          role="tabpanel"
                          tabIndex={0}
                          aria-labelledby="rc-tabs-0-tab-about"
                          aria-hidden="false"
                          className="ant-tabs-tabpane ant-tabs-tabpane-active"
                        >
                          <div className="activity-detail-info">
                            <div className="info-section">
                              <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                  <i className="sg-icon sg-oven" />
                                  <strong>Başlangıç</strong>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                  27 EKİ 2023 14:52
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                  <i className="hidden-icon sg-icon sg-oven" />
                                  <strong>Bitiş</strong>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                  <span>10 MAR 2024 23:59</span>
                                </div>
                              </div>
                            </div>
                            <div className="info-section row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                <i className="sg-icon sg-stopwatch" />
                                <strong>Geçirdiğin Süre</strong>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                <span>13 sa 8 dk</span>
                              </div>
                            </div>
                            <div className="info-section row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                <i className="sg-icon sg-stopwatch" />
                                <strong>Tahmini Süre</strong>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                65 g 36 sa 30 dk
                              </div>
                            </div>
                            <div className="info-section row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                <span
                                  role="img"
                                  aria-label="partition"
                                  className="anticon anticon-partition"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    className=""
                                    data-icon="partition"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <defs>
                                      <style
                                        dangerouslySetInnerHTML={{ __html: "" }}
                                      />
                                    </defs>
                                    <path d="M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3zm53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150zm364.2 75.1h150v150.1h-150V662.1z" />
                                  </svg>
                                </span>
                                <strong>Eğitim Türü</strong>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                Eğitim
                              </div>
                            </div>
                            <div className="info-section row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                <i className="sg-icon sg-tag" />
                                <strong>Kategori</strong>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                <div>Genel</div>
                              </div>
                            </div>
                            <div className="info-section row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
                                <i className="sg-icon sg-file" />
                                <strong>İçerik</strong>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">
                                290
                              </div>
                            </div>
                            <div className="info-section file row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
                                <i className="hidden-icon sg-icon sg-file" />
                                <span>Görev</span>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">
                                65
                              </div>
                            </div>
                            <div className="info-section file row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
                                <i className="hidden-icon sg-icon sg-file" />
                                <span>Video</span>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">
                                225
                              </div>
                            </div>
                            <div id="last-section" className="info-section row">
                              <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                <i className="sg-icon sg-briefcase" />
                                <strong>Üretici Firma</strong>
                              </div>
                              <div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
                                <a className="btn-change">Enocta</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div />
    </div>
  );
};

export default CourseInfo;
