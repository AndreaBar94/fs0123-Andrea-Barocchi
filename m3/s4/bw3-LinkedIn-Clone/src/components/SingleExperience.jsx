import { Col, Row } from "react-bootstrap"
import { useState } from "react";
import ChangeExp from "./ChangeExp";

const SingleExperience =({experience}) => {

    const [change, setChange] = useState(false);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedEndDate = new Date(experience.endDate).toLocaleDateString('en-US', options);
    const formattedStartDate = new Date(experience.startDate).toLocaleDateString('en-US', options);

    
    return(
        <>
            <Row className="mx-1">
            <Col xs={1}>
              <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
            </Col>
            <Col xs={8} className="d-flex flex-column px-3 testoGray">
              <span className="fw-semibold">{experience.role}</span>
              <span className=" fw-light">{experience.company}</span>
              <span className=" fw-light">{experience.description}</span>
              <span className=" fw-light">{formattedStartDate} / {formattedEndDate}</span>
              <span className=" fw-light">{experience.area}</span>
            </Col>

            <Col xs={1}>
              <button className="btnModificaProfilo border-0 rounded-circle " onClick={() => setChange(true)}>
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
            </Col>
          </Row>
          <div className="px-3">
            <hr className="testoGray" />
          </div>
        <ChangeExp show={change} onHide={() => setChange(false)} id={experience._id} experience={experience}/>

        </>
    )
}

export default SingleExperience;