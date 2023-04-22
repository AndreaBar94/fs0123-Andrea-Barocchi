import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ModalExp from "./ModalExp"; 
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import SingleExperience from "./SingleExperience";

const Esperienze = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.profile.content)
  const experiences = useSelector((state) => state.allExp.content)

  useEffect(()=>{
    dispatch(getExperiencesAction(user._id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <Card className="EsperienzaCard mt-3">
      <Row className="mx-1 my-2 align-items-center">
        <Col xs={10}>
          <Card.Title className="fs-5">Esperienza</Card.Title>
        </Col>
        <Col xs={1}>
          <button className="btnModificaProfilo border-0 rounded-circle " onClick={() => setModalShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#666666"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
          </button>
        </Col>
      </Row>
      {experiences.length > 0 && (
        experiences.map((experience) => (
          <SingleExperience key={experience._id} experience={experience}/>
        )
        )
      )}
    </Card>
    <ModalExp show={modalShow} onHide={() => setModalShow(false)}/>
    </>
    
  );
};
export default Esperienze;
