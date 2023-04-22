import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePostAction, putPostAction } from "../redux/actions";

const ModalPost = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(`${props.post.text}`);
  const handleSubmit = () => {
    dispatch(putPostAction(text, props.post._id));
    props.onHide();
  };
  const handleDelete = () => {
    dispatch(deletePostAction(props.post._id));
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modifica il tuo post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>modifica:</Form.Label>
            <Form.Control
              type="text"
              placeholder="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
          </Form.Group>

          <Modal.Footer>
            <Button onClick={props.onHide}>Annulla</Button>
            <Button variant="success" onClick={handleSubmit}>
              Salva le modifiche
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Elimina post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalPost;
