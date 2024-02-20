
import { Button, Col, Container} from "react-bootstrap";
import SurveyComponentForSurveyPage from "./SurveyComponentForSurveyPage";


const Survey = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="page-banner-card">
          <div className="container">
            <div className="row">
              <span>Anketlerim</span>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="row">
          <div className="col-md-5 col-12 mb-4">
            <div className="searchBox search-box ">
              <input
                className="w-100"
                type="text"
                id="search"
                placeholder="Arama"
                defaultValue=""
              />
              <Button className="">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "end",
                  }}
                >
                  <svg
                    width={33}
                    height={33}
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
                      stroke="#828282"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.8758 28.8748L22.8945 22.8936"
                      stroke="#828282"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.8758 28.8748L22.8945 22.8936"
                      stroke="#828282"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </div>

          

          <div className="col-md-3 col-12 mb-4">
            <div className=" css-b62m3t-container">
              <span
                id="react-select-19-live-region"
                className="css-7pg0cj-a11yText"
              />
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                className="css-7pg0cj-a11yText"
              />
              <div className="select__control css-13cymwt-control">
                <div className="select__value-container select__value-container--has-value css-hlgwow">
                  <div className="select__single-value css-1dimb5e-singleValue">
                    Tarihe Göre
                  </div>
                  <div
                    className="select__input-container css-19bb58m"
                    data-value=""
                  >
                    <input
                      className="select__input"
                      autoCapitalize="none"
                      autoComplete="off"
                      autoCorrect="off"
                      id="react-select-19-input"
                      spellCheck="false"
                      tabIndex={0}
                      type="text"
                      aria-autocomplete="list"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="combobox"
                      defaultValue=""
                      style={{
                        color: "inherit",
                        background: "0px center",
                        opacity: 1,
                        width: "100%",
                        gridArea: "1 / 2",
                        font: "inherit",
                        minWidth: 2,
                        border: 0,
                        margin: 0,
                        outline: 0,
                        padding: 0,
                      }}
                    />
                  </div>
                </div>
                <div className="select__indicators css-1wy0on6">
                  <span className="select__indicator-separator css-1u9des2-indicatorSeparator" />
                  <div
                    className="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer"
                    aria-hidden="true"
                  >
                    <svg
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className="css-8mmkcg"
                    >
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                    </svg>
                  </div>
                </div>
              </div>
              <input name="sort" type="hidden" defaultValue="name-asc" />
            </div>
          </div>
          <Col className="col-md-1 col-12 mb-4 d-flex justify-content-end" />
        </div>
        <SurveyComponentForSurveyPage/>
      </Container>
      
      
    </div>
  );
};

export default Survey;
