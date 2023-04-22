import { Container } from "react-bootstrap";

const SingleComment = (props) => {
  return (
    <>
      <Container className="py-2 my-2 border bg-secondary bg-opacity-10 rounded">
        <p className="p-2">{props.comment.author}</p>
        <p className="px-1">{props.comment.comment}</p>
      </Container>
    </>
  );
};
export default SingleComment;
