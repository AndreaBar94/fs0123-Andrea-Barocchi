import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const JobSectionNavLink = () => {
  return (
    <>
      {" "}
      <Col className="bg-white rounded-3 pt-3 px-3 mx-3 border ">
        <Container fluid>
          <Row className="align-items-center pb-2 ">
            <Col className="d-flex justify-content-between align-items-center">
              <div>
                <h5>Ricerche di offerte di lavoro suggerite</h5>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="hover-icon rounded-circle mercado-match p-1"
                  width="35"
                  height="35"
                  focusable="false"
                >
                  <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                </svg>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="flex-wrap d-flex pb-4 gap-2">
              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div className="text-truncate">marketing manager</div>
              </Button>

              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div>hr</div>
              </Button>

              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div>legal</div>
              </Button>

              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div>sales</div>
              </Button>

              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div>amazon</div>
              </Button>

              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div>google</div>
              </Button>

              <Button
                variant="outlined"
                className="btn-blue-custom rounded-5 border-primary py-0 d-flex align-items-center text-primary fw-bold"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match me-1"
                    width="19"
                    height="19"
                    focusable="false"
                  >
                    <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                  </svg>
                </div>
                <div>analyst</div>
              </Button>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

export default JobSectionNavLink;
