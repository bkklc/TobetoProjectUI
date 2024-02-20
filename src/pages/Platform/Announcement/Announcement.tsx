
import { Container } from 'react-bootstrap'
import AnnouncementsComponent from '../../../components/Platform/Items/AnnouncementsComponent';

const Announcement = () => {
    return (
        
        <>
            <div className="container-fluid">
                <div className="page-banner-card">
                    <div className="container">
                        <div className="row">
                            <span>Duyurularım</span>
                        </div>
                    </div>
                </div>
            </div>


            <Container>

                <div className="row">
                    <div className="responsive-flex mb-4 mt-2" style={{ gap: "1em" }}>
                        <div className="searchBox search-box ">
                            <input
                                className="w-100"
                                type="text"
                                id="search"
                                placeholder="Arama"
                                defaultValue=""
                            />
                            <button className="">
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "end"
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
                            </button>
                        </div>
                        <div className="dropdown">
                            <button
                                className="white-filter dropdown-toggle ms-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Tür
                            </button>
                            <ul className="dropdown-menu new-filter" style={{}}>
                                <li className="filter-checkbox-item">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="typeNews" />
                                        <label className="form-check-label" htmlFor="typeNews">
                                            Haber
                                        </label>
                                    </div>
                                </li>
                                <li className="filter-checkbox-item">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="typeAnnouncement"
                                        />
                                        <label className="form-check-label" htmlFor="typeAnnouncement">
                                            Duyuru
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="rw-100 css-b62m3t-container">
                            <span id="react-select-8-live-region" className="css-7pg0cj-a11yText" />
                            <span
                                aria-live="polite"
                                aria-atomic="false"
                                aria-relevant="additions text"
                                className="css-7pg0cj-a11yText"
                            />
                            <div className="select__control css-13cymwt-control">
                                <div className="select__value-container select__value-container--is-multi css-hlgwow">
                                    <div
                                        className="select__placeholder css-1jqq78o-placeholder"
                                        id="react-select-8-placeholder"
                                    >
                                        Organizasyon
                                    </div>
                                    <div className="select__input-container css-19bb58m" data-value="">
                                        <input
                                            className="select__input"
                                            autoCapitalize="none"
                                            autoComplete="off"
                                            autoCorrect="off"
                                            id="react-select-8-input"
                                            spellCheck="false"
                                            tabIndex={0}
                                            type="text"
                                            aria-autocomplete="list"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            role="combobox"
                                            aria-describedby="react-select-8-placeholder"
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
                                                padding: 0
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
                            <div>
                                <input name="colors" type="hidden" defaultValue="" />
                            </div>
                        </div>
                        <div className="d-flex align-items-center rw-100 gap-3">
                            <div className="dropdown ">
                                <button
                                    className="white-filter dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sıralama
                                </button>
                                <ul className="dropdown-menu new-filter" style={{}}>
                                    <li>
                                        <a className="dropdown-item createdAt active">Tarihe Göre (Y-E)</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item createdAt ">Tarihe Göre (E-Y)</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="readButton">
                                <button className="read-hide" />
                            </div>
                        </div>
                    </div>
                </div>

                <AnnouncementsComponent />
            </Container>
<div>


<ul
                className="pagination justify-content-center"
                role="navigation"
                aria-label="Pagination"
            >
                <li className="page-item disabled">
                    <a
                        className="page-link "
                        tabIndex={-1}
                        role="button"
                        aria-disabled="true"
                        aria-label="Previous page"
                        rel="prev"
                    />
                </li>
                <li className="page-item active">
                    <a
                        rel="canonical"
                        role="button"
                        className="page-link"
                        tabIndex={-1}
                        aria-label="Page 1 is your current page"
                        aria-current="page"
                    >
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a
                        rel="next"
                        role="button"
                        className="page-link"
                        tabIndex={0}
                        aria-label="Page 2"
                    >
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a role="button" className="page-link" tabIndex={0} aria-label="Page 3">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a
                        className="page-link"
                        tabIndex={0}
                        role="button"
                        aria-disabled="false"
                        aria-label="Next page"
                        rel="next"
                    />
                </li>
            </ul>



        </div>



</>
           




    )
}

export default Announcement;