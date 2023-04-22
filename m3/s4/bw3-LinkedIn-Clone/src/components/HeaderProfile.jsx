import { useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import MyVerticallyCenteredModal from "./ModalProfileEdit"; //import fatto correttamente e funziona tutto, non sappiamo ancora cosa vuole dalla vita.
import { useSelector } from "react-redux";

const HeaderProfile = ({ profileData }) => {
  const [modalShow, setModalShow] = useState(false);
  const exp = useSelector((state) => state.experiences.content);

  return (
    <>
      <Card className="headerCard border mt-4">
        <Card.Img
          className="profile-background-image pb-5"
          variant="top"
          src="https://picsum.photos/seed/picsum/800/200"
        />
        <div className="iconaFotoDiv">
          <button className="modificaFoto border-0 bg-light rounded-circle ">
            <svg
              fill="#0a66c2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 3 16 16"
              data-supported-dps="16x16"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
            </svg>
          </button>
        </div>
        <Card.Body>
          <Row className="absoluteProfile">
            <Col xs={7}>
              <img
                className="profileImg rounded-circle "
                src={profileData.image}
                alt="profileImage"
              />
              <Card.Title className=" mx-3">
                {profileData.name} {profileData.surname}
              </Card.Title>
              <Card.Text className=" mx-3">{profileData.bio}</Card.Text>
              <span className="text-secondary fs-6 mx-3">
                {profileData.area}
              </span>
              <span>-</span>
              <span className="info fs-6 mx-3">
                Informazioni di contatto:
                <p className="mx-3 mb-0">{profileData.email}</p>
              </span>
            </Col>
            <Col className="ms-5">
              <Row className="">
                <div className="d-flex justify-content-end">
                  <button
                    className="btnModificaProfilo border-0 rounded-circle "
                    onClick={() => setModalShow(true)}
                  >
                    <svg
                      fill="#666666"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                    </svg>
                  </button>
                </div>
              </Row>

              {exp && (
                <Row>
                  <Col>
                    <img style={{ width: "32px" }} src="" alt="" />
                    <span className="text-dark">{exp.company}</span>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          <p className="info fs-6 ms-3">100 collegamenti</p>
          <div className="mx-3">
            <button className="btnDisponibile border-0 text-light px-3 me-1 fs-6 rounded-pill fw-semibold">
              Disponibile per
            </button>

            <button className="btnAdd info bg-light me-1 fs-6 px-3 rounded-pill fw-semibold">
              Aggiungi sezione del profilo
            </button>

            <button className="bg-light  px-3 fs-6 text-secondary border border-secondary rounded-pill fw-semibold">
              Altro
            </button>
          </div>
          <Carousel>
            <Row className="mt-3 flex-nowrap overflow-auto">
              <Card className="miniHeaderCard cardDettaglio d-flex flex-row mx-3">
                <Card.Body className="hl-1">
                  <div className="lh-sm">
                    <span className="fs-6 fw-semibold">
                      Disponibile a lavorare
                    </span>
                    <p className="mb-2  fs-6">lavoro</p>
                    <Card.Link className="linkCard info " href="#">
                      Mostra dettagli
                    </Card.Link>
                  </div>
                </Card.Body>

                <div style={{ width: "10px" }}>
                  <div className="d-flex justify-content-end">
                    <Button className="btnModificaMiniCard border-0 rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        data-supported-dps="16x16"
                        fill="#585c60"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="miniHeaderCard d-flex flex-row mx-2">
                <Card.Body className="hl-1">
                  <div className="lh-sm">
                    <span className="fs-6 fw-semibold">
                      Metti in risalto i servizi{" "}
                    </span>
                    <span className="mb-2  fs-6">
                      che offri, così tu e la tua azienda potrete apparire nei
                      risultati di ricerca.
                    </span>
                    <div>
                      <Card.Link className="linkCard info " href="#">
                        Inizia
                      </Card.Link>
                    </div>
                  </div>
                </Card.Body>

                <div style={{ width: "10px" }}>
                  <div className="d-flex justify-content-end">
                    <Button className="border-0 bg-transparent text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="miniHeaderCard d-flex flex-row mx-3">
                <Card.Body className="">
                  <div className="lh-sm">
                    <span className="fs-6 fw-semibold">
                      Fai sapere che stai facendo selezione{" "}
                    </span>
                    <span className="mb-2 fs-6">
                      e attrai candidati qualificati.{" "}
                    </span>
                    <div>
                      <Card.Link className="linkCard info" href="#">
                        Inizia
                      </Card.Link>
                    </div>
                  </div>
                </Card.Body>

                <div style={{ width: "10px" }}>
                  <div className="d-flex justify-content-end">
                    <Button className="border-0 bg-transparent text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            </Row>
          </Carousel>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default HeaderProfile;
