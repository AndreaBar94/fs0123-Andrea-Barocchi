import React from "react";
import Topbar from "./Topbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import FooterHomePage from "./FooterHomePage";
import JobSectionNavLink from "./JobSectionNavLink";
import bag from "../assets/imgs/bag.svg";
import { useSelector } from "react-redux";
import SearchJobs from "./SearchJobs";

const JobsPage = () => {
  const profile = useSelector((state) => state.profile.content);

  return (
    <>
      <Container fluid className="px-0">
        <Topbar />

        <Container>
          <Row className="pt-4 gap-2">
            {/* prima col principale*/}
            <Col xs={2} className="px-0 ">
              <Col className="bg-white rounded-3 px-3 py-4  fw-bold border">
                <Col className="mb-0">
                  <a
                    href="#"
                    className="text-decoration-none smallP text-secondary d-flex align-items-center"
                  >
                    <div className="pe-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                      </svg>
                    </div>
                    <div>Le mie offerte di lavoro</div>
                  </a>
                </Col>

                <Col className=" d-flex justify-content-between mb-0 pt-4">
                  <a
                    href="#"
                    className="text-decoration-none smallP text-secondary d-flex align-items-center"
                  >
                    <div className="pe-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                      </svg>
                    </div>
                    <div>Avvisi offerte di lavoro</div>
                  </a>
                </Col>

                <Col className="py-4">
                  <a
                    href="#"
                    className="text-decoration-none smallP text-secondary d-flex align-items-center"
                  >
                    <div className="pe-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
                      </svg>
                    </div>
                    <div>Valutazioni delle competenze</div>
                  </a>
                </Col>

                <Col className="pb-4">
                  <a
                    href="#"
                    className="text-decoration-none smallP text-secondary d-flex align-items-center"
                  >
                    <div className="pe-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                      </svg>
                    </div>
                    <div>Indicazioni per chi cerca lavoro</div>
                  </a>
                </Col>

                <Col>
                  <a
                    href="#"
                    className="text-decoration-none smallP text-secondary d-flex align-items-center"
                  >
                    <div className="pe-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                      </svg>
                    </div>
                    <div>Impostazioni candidatura</div>
                  </a>
                </Col>
              </Col>
              {/* bottone outlined blu */}
              <Col className="pt-3">
                <Button
                  className="btn-blue-custom border-primary rounded-5 py-2 d-flex text-primary fw-bold d-flex align-items-center"
                  variant="outlined"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="28"
                      height="28"
                      focusable="false"
                    >
                      <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
                    </svg>
                  </div>
                  <div>Pubblica offerta gratuita</div>
                </Button>
              </Col>
            </Col>

            {/* seconda col principale*/}
            <Col xs={6} className="mediumP">
              <SearchJobs />
              <JobSectionNavLink />

              <Col className="bg-white mx-3 rounded-3 border pt-2 mt-4 px-4 d-flex">
                <Col xs={1} className="me-3 mt-1">
                  <img
                    className="img-profile-job rounded-circle img-fluid"
                    src={profile.image}
                    alt="..."
                  />
                </Col>

                <Col>
                  <p className="m-0 fw-bold fs-5 pe-5">
                    Vedi l'elenco completo delle offerte di lavoro per cui
                    saresti fra i migliori candidati
                  </p>
                  <Col className="smallP py-2">
                    Milioni di utenti usano Premium
                  </Col>
                  <Button
                    variant="outlined"
                    className="bg-warning rounded-pill mb-3 fw-bold"
                  >
                    Prova Premium gratis
                  </Button>
                </Col>
              </Col>

              <Col className="bg-white mx-3 rounded-3 border pt-4 mt-4 px-4">
                <Col className="fw-bold">
                  <h5>Consigliato per te</h5>
                </Col>
                <Col className=" pb-3">
                  Sulla base del tuo profilo e della tua cronologia delle
                  ricerche
                </Col>
                <Col className="border rounded-3 mb-4 text-center">
                  <img className="py-4" src={bag} alt="..." />
                  <Col className="pb-3 fw-bold">
                    <h3>Vuoi altre offerte di lavoro?</h3>
                  </Col>
                  <Col className="pb-4 px-4">
                    Clicca qui per continuare a cercare tra oltre 20 milioni di
                    offerte di lavoro su Linkedin
                  </Col>
                  <Col>
                    <Button
                      variant="outlined"
                      className="border-primary rounded-pill text-primary fw-bold btn-blue-custom mb-3"
                    >
                      Cerca offerte di lavoro
                    </Button>
                  </Col>
                </Col>
              </Col>
            </Col>

            {/* terza col principale*/}
            <Col xs={3} className="px-0 smallP">
              <FooterHomePage />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default JobsPage;
