import React, { useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import ApplicationsComponent from "../Items/ApplicationsComponent";
import EducationComponent from "../Items/EducationComponent";

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
                  <Tab eventKey="applications" title="İçerik"></Tab>
                  <Tab eventKey="courses" title="Hakkında"></Tab>
                </Tabs>
              </Container>

              <div className="ant-tabs-content-holder">
                <div className="ant-tabs-content ant-tabs-content-top">
                  <div
                    role="tabpanel"
                    tabIndex={0}
                    aria-hidden="false"
                    className="ant-tabs-tabpane ant-tabs-tabpane-active"
                    id="rc-tabs-0-panel-content"
                    aria-labelledby="rc-tabs-0-tab-content"
                  >
                    <div className="activity-content">
                      <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                          <div className="activity-content-menu LXP-Collapse">
                            <div
                              className="ScrollbarsCustom trackYVisible"
                              style={{
                                position: "relative",
                                width: "100%",
                                height: 2118,
                              }}
                            >
                              <div
                                className="ScrollbarsCustom-Wrapper"
                                style={{
                                  position: "absolute",
                                  inset: "0px 10px 0px 0px",
                                  overflow: "hidden",
                                }}
                              >
                                <div
                                  className="ScrollbarsCustom-Scroller"
                                  style={{
                                    position: "absolute",
                                    inset: 0,
                                    overflow: "hidden scroll",
                                    marginRight: "-17px",
                                  }}
                                >
                                  <div
                                    className="ScrollbarsCustom-Content"
                                    style={{
                                      boxSizing: "border-box",
                                      display: "table-cell",
                                      minWidth: "100%",
                                    }}
                                  >
                                    <div id="directory-collapse-1">
                                      <div className="ant-collapse ant-collapse-icon-position-start">
                                        <div className="ant-collapse-item ant-collapse-item-active">
                                          <div
                                            className="ant-collapse-header"
                                            aria-expanded="true"
                                            aria-disabled="false"
                                            role="button"
                                            tabIndex={0}
                                          >
                                            <div className="ant-collapse-expand-icon">
                                              <span
                                                role="img"
                                                aria-label="right"
                                                className="anticon anticon-right ant-collapse-arrow"
                                              >
                                                <svg
                                                  viewBox="64 64 896 896"
                                                  focusable="false"
                                                  data-icon="right"
                                                  width="1em"
                                                  height="1em"
                                                  fill="currentColor"
                                                  aria-hidden="true"
                                                  style={{
                                                    transform: "rotate(90deg)",
                                                  }}
                                                >
                                                  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                                                </svg>
                                              </span>
                                              <span className="ant-collapse-header-text">
                                                <span className="collapse-panel-title">
                                                  ASPNET Core MVC Basic
                                                </span>
                                              </span>
                                            </div>

                                            <div className="ant-collapse-extra">
                                              <div className="directory-line-unit-count text-green" />
                                            </div>
                                          </div>
                                          <div className="ant-collapse-content ant-collapse-content-active">
                                            <div className="ant-collapse-content-box">
                                              <div
                                                className="unit-info selected"
                                                id="directory-18813"
                                              >
                                                <div className="unit-info-left-block">
                                                  <div className="unit-info-title">
                                                  ASPNET Core ve ASPNET Tarihçesi
                                                  </div>
                                                  <div className="unit-info-type">
                                                    <span className="unit-info-type-name">
                                                      Video - <span>13 dk</span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="ant-collapse-content ant-collapse-content-active">
                                            <div className="ant-collapse-content-box">
                                              <div
                                                className="unit-info selected"
                                                id="directory-18813"
                                              >
                                                <div className="unit-info-left-block">
                                                  <div className="unit-info-title">
                                                  ASPNET Core
                                                  </div>
                                                  <div className="unit-info-type">
                                                    <span className="unit-info-type-name">
                                                      Video - <span>8 dk</span>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="ant-collapse-content ant-collapse-content-active">
                                            <div className="ant-collapse-content-box">
                                              <div
                                                className="unit-info selected"
                                                id="directory-18813"
                                              >
                                                <div className="unit-info-left-block">
                                                  <div className="unit-info-title">
                                                  ASPNET Core: Uygulama Oluşturma
                                                  </div>
                                                  <div className="unit-info-type">
                                                    <span className="unit-info-type-name">
                                                      Video - <span>9 dk</span>
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
                                </div>
                              </div>
                              <div
                                className="ScrollbarsCustom-Track ScrollbarsCustom-TrackY"
                                style={{
                                  position: "absolute",
                                  overflow: "hidden",
                                  borderRadius: 4,
                                  background: "rgba(0, 0, 0, 0.1)",
                                  userSelect: "none",
                                  width: 10,
                                  height: "calc(100% - 20px)",
                                  top: 10,
                                  right: 0,
                                }}
                              >
                                <div
                                  className="ScrollbarsCustom-Thumb ScrollbarsCustom-ThumbY"
                                  style={{
                                    touchAction: "none",
                                    cursor: "pointer",
                                    borderRadius: 4,
                                    background: "rgba(0, 0, 0, 0.4)",
                                    width: "100%",
                                    height: "169.972px",
                                    transform: "translateY(0px)",
                                  }}
                                />
                              </div>
                              <div
                                className="ScrollbarsCustom-Track ScrollbarsCustom-TrackX"
                                style={{
                                  position: "absolute",
                                  overflow: "hidden",
                                  borderRadius: 4,
                                  background: "rgba(0, 0, 0, 0.1)",
                                  userSelect: "none",
                                  height: 10,
                                  width: "calc(100% - 20px)",
                                  bottom: 0,
                                  left: 10,
                                  display: "none",
                                }}
                              >
                                <div
                                  className="ScrollbarsCustom-Thumb ScrollbarsCustom-ThumbX"
                                  style={{
                                    touchAction: "none",
                                    cursor: "pointer",
                                    borderRadius: 4,
                                    background: "rgba(0, 0, 0, 0.4)",
                                    height: "100%",
                                    width: 0,
                                    display: "none",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                          <div
                            className="activity-content-info"
                            id="activity-content-info"
                          >
                            <div
                              id="activity-largeImageFileName"
                              className="activity-largeImageFileName activity-video"
                            >
                              <div>
                                {" "}
                                <div
                                  data-vjs-player="true"
                                  className="video-js vjs-default-skin vjs-paused vjs-controls-enabled vjs-workinghover vjs-v7 vjs-user-active my-player-dimensions"
                                  id="my-player"
                                  tabIndex={-1}
                                  role="region"
                                  lang="tr"
                                  translate="no"
                                  aria-label="Video Player"
                                >
                                  <video
                                    id="my-player_html5_api"
                                    preload="auto"
                                    className="video-js vjs-default-skin horizontal"
                                    tabIndex={-1}
                                    role="application"
                                    src="https://www.youtube.com/live/XNEIRcWaYtA?si=uwkQqEHINjjgMkLK"
                                    poster="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwIUHJyuhJZS1HwmUI0e5RQH"
                                  >
                                    <source
                                      src="https://enocta-mn360.mncdn.com/p/132/sp/13200/playManifest/entryId/0_glci7abj/format/applehttp/protocol/https/a.m3u8?st=buZtbn7T7lhgpdNAEgaaiA&e=1709007636"
                                      type="application/x-mpegURL"
                                    />
                                  </video>
                                  <div
                                    className="vjs-poster"
                                    tabIndex={-1}
                                    aria-disabled="false"
                                    style={{
                                      backgroundImage:
                                        'url("https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwIUHJyuhJZS1HwmUI0e5RQH")',
                                    }}
                                  />
                                  <div
                                    className="vjs-text-track-display"
                                    translate="yes"
                                    aria-live="off"
                                    aria-atomic="true"
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        inset: 0,
                                        margin: "1.5%",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="vjs-loading-spinner"
                                    dir="ltr"
                                  >
                                    <span className="vjs-control-text">
                                      Video Player is loading.
                                    </span>
                                  </div>
                                  <button
                                    className="vjs-big-play-button"
                                    type="button"
                                    title="Play Video"
                                    aria-disabled="false"
                                  >
                                    <span
                                      className="vjs-icon-placeholder"
                                      aria-hidden="true"
                                    />
                                    <span
                                      className="vjs-control-text"
                                      aria-live="polite"
                                    >
                                      Play Video
                                    </span>
                                  </button>
                                  <div className="vjs-control-bar" dir="ltr">
                                    <button
                                      className="vjs-play-control vjs-control vjs-button"
                                      type="button"
                                      title="Play"
                                      aria-disabled="false"
                                    >
                                      <span
                                        className="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      />
                                      <span
                                        className="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Play
                                      </span>
                                    </button>
                                    <div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
                                      <button
                                        className="vjs-mute-control vjs-control vjs-button vjs-vol-3"
                                        type="button"
                                        title="Mute"
                                        aria-disabled="false"
                                      >
                                        <span
                                          className="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        />
                                        <span
                                          className="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Mute
                                        </span>
                                      </button>
                                      <div className="vjs-volume-control vjs-control vjs-volume-horizontal">
                                        <div
                                          tabIndex={0}
                                          className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal"
                                          role="slider"
                                          aria-valuenow={100}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                          aria-label="Volume Level"
                                          aria-live="polite"
                                          aria-valuetext="100%"
                                        >
                                          <div className="vjs-mouse-display">
                                            <div
                                              className="vjs-volume-tooltip"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <div className="vjs-volume-level">
                                            <span className="vjs-control-text" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vjs-current-time vjs-time-control vjs-control">
                                      <span
                                        className="vjs-control-text"
                                        role="presentation"
                                      >
                                        Current Time&nbsp;
                                      </span>
                                      <span
                                        className="vjs-current-time-display"
                                        aria-live="off"
                                        role="presentation"
                                      >
                                        0:00
                                      </span>
                                    </div>
                                    <div
                                      className="vjs-time-control vjs-time-divider"
                                      aria-hidden="true"
                                    >
                                      <div>
                                        <span>/</span>
                                      </div>
                                    </div>
                                    <div className="vjs-duration vjs-time-control vjs-control">
                                      <span
                                        className="vjs-control-text"
                                        role="presentation"
                                      >
                                        Duration&nbsp;
                                      </span>
                                      <span
                                        className="vjs-duration-display"
                                        aria-live="off"
                                        role="presentation"
                                      >
                                        13:14
                                      </span>
                                    </div>
                                    <div className="vjs-progress-control vjs-control">
                                      <div
                                        tabIndex={0}
                                        className="vjs-progress-holder vjs-slider vjs-slider-horizontal"
                                        role="slider"
                                        aria-valuenow={0.0}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label="Progress Bar"
                                        aria-valuetext="00:00 of 13:14"
                                      >
                                        <div
                                          className="vjs-load-progress"
                                          style={{ width: "0.25%" }}
                                        >
                                          <span className="vjs-control-text">
                                            <span>Loaded</span>:{" "}
                                            <span className="vjs-control-text-loaded-percentage">
                                              0.25%
                                            </span>
                                          </span>
                                          <div
                                            data-start={0}
                                            data-end={2}
                                            style={{
                                              left: "0%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                        <div className="vjs-mouse-display">
                                          <div
                                            className="vjs-time-tooltip"
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <div
                                          className="vjs-play-progress vjs-slider-bar"
                                          aria-hidden="true"
                                          style={{ width: "0%" }}
                                        >
                                          <div
                                            className="vjs-time-tooltip"
                                            aria-hidden="true"
                                            style={{ right: 0 }}
                                          >
                                            00:00
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="vjs-live-control vjs-control vjs-hidden">
                                      <div
                                        className="vjs-live-display"
                                        aria-live="off"
                                      >
                                        <span className="vjs-control-text">
                                          Stream Type&nbsp;
                                        </span>
                                        LIVE
                                      </div>
                                    </div>
                                    <button
                                      className="vjs-seek-to-live-control vjs-control"
                                      type="button"
                                      title="Seek to live, currently behind live"
                                      aria-disabled="false"
                                    >
                                      <span
                                        className="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      />
                                      <span
                                        className="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Seek to live, currently behind live
                                      </span>
                                      <span
                                        className="vjs-seek-to-live-text"
                                        aria-hidden="true"
                                      >
                                        LIVE
                                      </span>
                                    </button>
                                    <div className="vjs-remaining-time vjs-time-control vjs-control">
                                      <span
                                        className="vjs-control-text"
                                        role="presentation"
                                      >
                                        Remaining Time&nbsp;
                                      </span>
                                      <span aria-hidden="true">-</span>
                                      <span
                                        className="vjs-remaining-time-display"
                                        aria-live="off"
                                        role="presentation"
                                      >
                                        13:14
                                      </span>
                                    </div>
                                    <div className="vjs-custom-control-spacer vjs-spacer ">
                                      &nbsp;
                                    </div>
                                    <div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">
                                      <div
                                        className="vjs-playback-rate-value"
                                        id="vjs-playback-rate-value-label-my-player_component_1021"
                                      >
                                        1x
                                      </div>
                                      <button
                                        className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Playback Rate"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-describedby="vjs-playback-rate-value-label-my-player_component_1021"
                                      >
                                        <span
                                          className="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        />
                                        <span
                                          className="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Playback Rate
                                        </span>
                                      </button>
                                      <div className="vjs-menu">
                                        <ul
                                          className="vjs-menu-content"
                                          role="menu"
                                        >
                                          <li
                                            className="vjs-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span className="vjs-menu-item-text">
                                              2x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            />
                                          </li>
                                          <li
                                            className="vjs-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span className="vjs-menu-item-text">
                                              1.75x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            />
                                          </li>
                                          <li
                                            className="vjs-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span className="vjs-menu-item-text">
                                              1.5x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            />
                                          </li>
                                          <li
                                            className="vjs-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span className="vjs-menu-item-text">
                                              1.25x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            />
                                          </li>
                                          <li
                                            className="vjs-menu-item vjs-selected"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span className="vjs-menu-item-text">
                                              1x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                          <li
                                            className="vjs-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span className="vjs-menu-item-text">
                                              0.75x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            />
                                          </li>
                                          <li
                                            className="vjs-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="false"
                                          >
                                            <span className="vjs-menu-item-text">
                                              0.5x
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Chapters"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          className="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        />
                                        <span
                                          className="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Chapters
                                        </span>
                                      </button>
                                      <div className="vjs-menu">
                                        <ul
                                          className="vjs-menu-content"
                                          role="menu"
                                        >
                                          <li
                                            className="vjs-menu-title"
                                            tabIndex={-1}
                                          >
                                            Chapters
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Descriptions"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          className="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        />
                                        <span
                                          className="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Descriptions
                                        </span>
                                      </button>
                                      <div className="vjs-menu">
                                        <ul
                                          className="vjs-menu-content"
                                          role="menu"
                                        >
                                          <li
                                            className="vjs-menu-item vjs-selected"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span className="vjs-menu-item-text">
                                              descriptions off
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
                                      <button
                                        className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
                                        type="button"
                                        aria-disabled="false"
                                        title="Audio Track"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <span
                                          className="vjs-icon-placeholder"
                                          aria-hidden="true"
                                        />
                                        <span
                                          className="vjs-control-text"
                                          aria-live="polite"
                                        >
                                          Audio Track
                                        </span>
                                      </button>
                                      <div className="vjs-menu">
                                        <ul
                                          className="vjs-menu-content"
                                          role="menu"
                                        >
                                          <li
                                            className="vjs-menu-item vjs-selected vjs-main-menu-item"
                                            tabIndex={-1}
                                            role="menuitemradio"
                                            aria-disabled="false"
                                            aria-checked="true"
                                          >
                                            <span className="vjs-menu-item-text">
                                              default
                                            </span>
                                            <span
                                              className="vjs-control-text"
                                              aria-live="polite"
                                            >
                                              , selected
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <button
                                      className="vjs-fullscreen-control vjs-control vjs-button"
                                      type="button"
                                      title="Fullscreen"
                                      aria-disabled="false"
                                    >
                                      <span
                                        className="vjs-icon-placeholder"
                                        aria-hidden="true"
                                      />
                                      <span
                                        className="vjs-control-text"
                                        aria-live="polite"
                                      >
                                        Fullscreen
                                      </span>
                                    </button>
                                  </div>
                                  <div
                                    className="vjs-error-display vjs-modal-dialog vjs-hidden "
                                    tabIndex={-1}
                                    aria-describedby="my-player_component_1263_description"
                                    aria-hidden="true"
                                    aria-label="Modal Window"
                                    role="dialog"
                                  >
                                    <p
                                      className="vjs-modal-dialog-description vjs-control-text"
                                      id="my-player_component_1263_description"
                                    >
                                      This is a modal window.
                                    </p>
                                    <div
                                      className="vjs-modal-dialog-content"
                                      role="document"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="activity-unit-detail"
                              className="activity-unit-detail"
                            >
                              <div className="row">
                                <div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
                                  <div className="unit-detail-title">
                                    <div>ASPNET Core ve ASPNET Tarihçesi</div>
                                  </div>
                                  <div className="unit-detail-col unit-detail-col-default">
                                    Video - <span>13 dk</span>
                                  </div>
                                  <div className="unit-detail-col unit-detail-col-score text-green"></div>
                                  <div className="unit-detail-col unit-detail-col-status last-child text-green"></div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
                                  <div className="unit-box-actions text-lg-left text-md-left text-sm-left text-xs-center">
                                    <div
                                      className="ant-space ant-space-vertical"
                                      style={{ gap: 8 }}
                                    >
                                      <div
                                        className="ant-space-item"
                                        style={{}}
                                      />
                                      <div className="ant-space-item">
                                        <button
                                          type="button"
                                          className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
                                        >
                                          <span>DETAY</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
