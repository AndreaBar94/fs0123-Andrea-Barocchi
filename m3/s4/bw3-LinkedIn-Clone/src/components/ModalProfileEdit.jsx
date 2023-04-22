import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { editProfileAction, editProfileImageAction } from "../redux/actions";
import { getFormAction } from "../redux/actions";

function MyVerticallyCenteredModal(props) {
  // const newData = useSelector((state)=> state.editProfile.content)
  // console.log(newData)

  const oldData = useSelector((state) => state.profile.content);
  const newData = useSelector((state) => state.profileForm.content);
  const dispatch = useDispatch();
  const [name, setName] = useState(oldData.name);
  const [surname, setSurname] = useState(oldData.surname);
  const [email, setEmail] = useState(oldData.email);
  const [bio, setBio] = useState(oldData.bio);
  const [title, setTitle] = useState(oldData.title);
  const [area, setArea] = useState(oldData.area);
  const [image, setImage] = useState();

  const dataImage = new FormData();
  dataImage.append("profile", image);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFormAction({ name, surname, email, title, bio, area }));
    props.onHide();
  };

  useEffect(() => {
    if (newData !== null && image) {
      dispatch(editProfileAction(newData));
      dispatch(editProfileImageAction(dataImage, oldData._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newData]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Inserisci le tue modifiche</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder={oldData.nome}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <Form.Label>Cognome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cognome"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              autoFocus
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="nome@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
            <Form.Label>Posizione Lavorativa</Form.Label>
            <Form.Control
              type="text"
              placeholder="es.: Web Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            <Form.Label>Immagine del profilo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              placeholder="Carica un'immagine qui"
              onChange={(e) => setImage(() => e.target.files[0])}
              autoFocus
            />
          </Form.Group>
          <Modal.Footer>
            <Button onClick={props.onHide}>Annulla</Button>
            <Button variant="success" onClick={handleSubmit}>
              Salva le modifiche
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
