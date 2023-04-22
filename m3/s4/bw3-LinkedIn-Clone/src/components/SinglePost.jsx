import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import ModalPost from "./ModalPost";
import { useDispatch, useSelector } from "react-redux";
import { getCommentAction, postCommentAction } from "../redux/actions";
import SingleComment from "./SingleComment";

const SinglePost = ({ post }) => {
  const [modalShow, setModalShow] = useState(false);
  const oldData = useSelector((state) => state.profile.content);
  const [commentsShow, setCommentsShow] = useState("d-none");
  const comments = useSelector((state) => state.comments.content);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const newCommentData = {
    comment: newComment,
    rate: "3",
    elementId: `${post._id}`,
  };
  const handleComment = () => {
    setCommentsShow("");
    dispatch(getCommentAction(post._id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCommentAction(post._id, newCommentData));
    setNewComment("");
  };

  return (
    <>
      <Col>
        <Card className="border bg-white rounded-3 p-1 mt-2 mb-3 mx-3">
          <Card.Body>
            <Row>
              <Col xs={2} className="pe-0">
                <img
                  className="img-fluid imgPostProfile rounded-circle text-center"
                  width="60px"
                  height="60px"
                  src={post.user && post.user.image ? post.user.image : ""}
                  alt="profilePostImage"
                />
              </Col>
              <Col xs={8} className="ps-0">
                <Card.Title className="mediumP">
                  {post.user && post.user.name ? post.user.name : ""}{" "}
                  {post.user && post.user.surname ? post.user.surname : ""}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {post.user && post.user.title ? post.user.title : ""}
                </Card.Subtitle>
              </Col>
              <Col xs={1}>
                <Button className="bg-transparent border-0 text-secondary" onClick={() => setModalShow(true)}>
                  ...
                </Button>
              </Col>
            </Row>
            <Card.Text className="my-3 ms-1">
              <p className="text-start textP">{post.text}</p>
            </Card.Text>
            <Button className="bg-transparent text-secondary border-0" onClick={handleComment}>
              Commenti
            </Button>
            <Row className={commentsShow}>
              <Col xs={2} className="mx-0 pe-0 d-flex justify-content-center">
                <img className="imgInputComments rounded-circle" src={oldData.image} alt="" />
              </Col>
              <Col xs={10} className="ps-0 ">
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    className="rounded-pill"
                    type="text"
                    onChange={(e) => {
                      setNewComment(e.target.value);
                    }}
                    value={newComment}
                  />
                </Form>
              </Col>

              {comments.length > 0 &&
                comments.map((comment) => {
                  return (
                    <>
                      <SingleComment key={comment._id} comment={comment} />
                    </>
                  );
                })}
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {oldData.username === post.username && (
        <ModalPost show={modalShow} post={post} onHide={() => setModalShow(false)} />
      )}
    </>
  );
};

export default SinglePost;
