import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteExperiencesAction, putExperienceAction } from "../redux/actions";

function ChangeExp(props) {
  const [role, setRole] = useState(props.experience.role);
  const [company, setCompany] = useState(props.experience.company);
  const [startDate, setStartDate] = useState(props.experience.startDate);

  const [endDate, setEndDate] = useState(props.experience.endDate);
  const [description, setDescription] = useState(props.experience.description);
  const [area, setArea] = useState(props.experience.area);

  const oldData = useSelector((state) => state.profile.content);

  const newData = { role, company, description, startDate, endDate, area };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(putExperienceAction(newData, oldData._id, props.id));
    props.onHide();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    alert(
      `Sei sicuro di voler eliminare questa esperienza: ${props.experience.role} presso ${props.experience.company}?`
    );
    dispatch(deleteExperiencesAction(oldData._id, props.id));
    props.onHide();
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Inserisci la tua esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                autoFocus
              />
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cognome"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoFocus
              />
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control type="date" rows={3} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="es.: Web Developer"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoFocus
              />
              <Form.Label>Città</Form.Label>
              <Form.Control
                type="text"
                placeholder="Città"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Modal.Footer className="justify-content-between">
              <Button variant="danger" onClick={handleDelete}>
                Elimina questa esperienza
              </Button>
              <div>
                <Button className="mx-1" onClick={props.onHide}>
                  Annulla
                </Button>
                <Button variant="success" onClick={handleSubmit}>
                  Salva le modifiche
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ChangeExp;
