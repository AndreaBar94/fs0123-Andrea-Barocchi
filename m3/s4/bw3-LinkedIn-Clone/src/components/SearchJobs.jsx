import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchJobs = () => {
  const searchResults = useSelector((state) => state.searchJobs.content);

  return (
    <Row className="mx-3">
      <Col className="bg-white border rounded-3 ">
        <h4 className="ps-3 py-3 fw-bold ">Offerte di lavoro</h4>
        <Row className="mx-1">
          {/* <Col xs={1}>
              <img style={{ width: "40px" }} src="https://picsum.photos/40" alt="" />
            </Col> */}
          <Col xs={12} className="d-flex flex-column  testoGray">
            {searchResults.length > 0 &&
              searchResults.map((job) => {
                const date = new Date(job.publication_date);
                const formattedDate = `${date.getDate()}-${
                  date.getMonth() + 1
                }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
                console.log(formattedDate);

                return (
                  <Container className="px-3">
                    <Row key={job._id} className="my-2">
                      <Card.Header className="fw-bolder fs-5 ">
                        {job.title}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title className=" d-flex justify-content-between align-items-center text-uppercase">
                          <div>{job.company_name}</div>
                          <div>
                            <Button
                              className="btn-blue-custom rounded-pill border-primary text-primary fw-bold"
                              variant="outlined"
                            >
                              Salva
                            </Button>
                          </div>
                        </Card.Title>

                        <Card.Text className="fw-semibold d-flex justify-content-between align-items-center mt-3  border-top border-bottom py-1">
                          <Col xs={4}>
                            <span className="smallP d-flex fw-normal">
                              {" "}
                              Settore
                            </span>
                            {job.category}
                          </Col>

                          <Col xs={4}>
                            {" "}
                            <span className="smallP d-flex">Tipo</span>
                            <span className="text-capitalize">
                              {job.job_type}
                            </span>
                          </Col>

                          <Col xs={4}>
                            {" "}
                            <span className="smallP d-flex">Luogo</span>
                            {job.candidate_required_location}
                          </Col>
                        </Card.Text>

                        <Link
                          to={job.url}
                          variant="primary"
                          className="job-link"
                        >
                          <span>
                            Visita il sito di{" "}
                            <span className="text-uppercase">
                              {job.company_name}
                            </span>
                          </span>
                        </Link>
                      </Card.Body>
                      <div className=" p-1 align-items-center d-flex justify-content-end">
                        <span className="date-string pe-2">
                          {" "}
                          Data di pubblicazione :
                        </span>{" "}
                        {formattedDate}
                      </div>
                    </Row>
                    <hr className="text-primary " />
                  </Container>
                );
              })}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SearchJobs;
