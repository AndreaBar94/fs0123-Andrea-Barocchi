import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  NavDropdown,
  Row,
} from "react-bootstrap";
import FooterHomePage from "./FooterHomePage";
import HomeProfileSection from "./HomeProfileSection";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, postPostAction } from "../redux/actions";
import SinglePost from "./SinglePost";

const HomePage = () => {
  const [newPost, setNewPost] = useState("");
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.content);
  const profile = useSelector((state) => state.profile.content);

  useEffect(() => {
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPostAction(newPost));
    setNewPost("");
  };

  return (
    <Container fluid className="px-0">
      <Topbar />

      <Container>
        <Row className="pt-4 gap-2">
          {/* prima col principale*/}
          <Col xs={2} className="px-0 ">
            {/* container profile */}
            <HomeProfileSection />
            {/* container scopri di più */}
            <Col className="bg-white rounded-3 p-2 my-3 fw-bold border">
              <Col>
                <a href="#" className="underline smallP">
                  Gruppi
                </a>
              </Col>
              <Col className="pt-2 d-flex justify-content-between">
                <a href="#" className="underline smallP">
                  Eventi
                </a>
                ➕
              </Col>
              <Col>
                <a href="#" className="underline smallP">
                  Hashtag seguiti
                </a>
              </Col>
              <Col className="text-center border-top py-2 mt-3 ">
                <a href="#" className="link-nav text-decoration-none smallP">
                  Scopri di più
                </a>
              </Col>
            </Col>
          </Col>

          {/* seconda col principale*/}
          <Col xs={6} className="mediumP">
            {/* search */}

            <Col className="bg-white rounded-3 pt-3 px-3 mx-3 border">
              <Container fluid>
                <Row className="align-items-center">
                  <Col className="text-center" xs={2}>
                    <img
                      src={profile && profile.image}
                      alt="profile-img"
                      className="img-profile-input rounded-circle"
                    />
                  </Col>
                  <Col xs={10} className="pe-5 ps-3">
                    <Form onSubmit={handleSubmit}>
                      <FormControl
                        placeholder="Avvia un post"
                        className=" me-2 border-dark rounded-pill"
                        type="text"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                      />
                    </Form>
                  </Col>
                </Row>
              </Container>

              <Row className="py-3">
                <Col
                  xs={12}
                  className="d-flex px-0 text-center align-items-center flex-wrap"
                >
                  <Col>
                    <Button className="bg-transparent border-0 text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="blue"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                      </svg>{" "}
                      Foto
                    </Button>
                  </Col>
                  <Col>
                    <Button className="bg-transparent border-0 text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="green"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                      </svg>{" "}
                      Video
                    </Button>
                  </Col>
                  <Col>
                    <Button className="bg-transparent p-0 border-0 text-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="orange"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                      </svg>{" "}
                      Evento
                    </Button>
                  </Col>
                  <Col xs={5} className="">
                    <Button className="bg-transparent border-0 text-dark ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="red"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                      </svg>{" "}
                      <span className="">Scrivi un articolo</span>
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Col>

            {/* separè dropdown */}
            <Col xs={12} className="">
              <Container fluid>
                <Row className="pt-2 px-2">
                  <Col className="">
                    <hr className="flex-grow-50" />
                  </Col>
                  <Col xs={4} className="d-flex ps-0">
                    <p className="opacity-75 pe-1 m-0">ordina per </p>
                    <NavDropdown
                      title="Principali"
                      className="link-nav fw-bold"
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            {/* posts */}

            {allPosts.length > 0 &&
              allPosts.map((post) => <SinglePost key={post._id} post={post} />)}
          </Col>

          {/* terza col principale*/}
          <Col xs={3} className="px-0 smallP ">
            {/* linkedin notizie */}
            <Col className="bg-white rounded-3 p-1 border">
              <Col className="d-flex justify-content-between  px-2 py-2 align-items-center">
                <h6 className="fw-bold m-0">Linkedin Notizie</h6>
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
                  <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                </svg>
              </Col>
              <Col>{/* inserire qui il componente notizie */}</Col>
              <Col>
                <NavDropdown
                  title="Visualizza altro"
                  className="link-nav fw-bold px-4"
                />
              </Col>
            </Col>
            {/* container annuncio */}
            <Col className="bg-white rounded-3 p-1 my-3 border">
              <Col className="d-flex justify-content-end pe-2 align-items-center">
                <p className="fw-bold pt-2">Annuncio </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots pb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </Col>
              <p className="text-center px-3 opacity-50">
                Segui i nostri valori e partners seguendo la nostra pagina.
              </p>
              <img src="" alt="" />
              <img src="" alt="" />
              <p className="fw-bold text-center">Entra nel mondo Audi Italia</p>
              <Col className="justify-content-center d-flex pb-3">
                <Button
                  className="text-primary border-primary fw-bold rounded-pill"
                  variant="outlined "
                >
                  Segui
                </Button>
              </Col>
            </Col>
            {/* mini footer */}
            <FooterHomePage />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
