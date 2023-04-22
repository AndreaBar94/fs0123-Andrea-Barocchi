import React from "react";
import { Button, Col } from "react-bootstrap";
import BgImg from "../assets/imgs/gradient-background.jpg";
import ProfileImg from "../assets/imgs/gif.gif";
import { useSelector } from "react-redux";

const HomeProfileSection = () => {
  const profile = useSelector((state) => state.profile.content);

  return (
    <>
      <Col className="bg-white rounded-3 border">
        <Col className="border-bottom">
          <img
            src="https://picsum.photos/seed/picsum/800/300"
            alt="bg-img-profile"
            className="bg-img-profile img-fluid rounded-top"
          />
        </Col>
        <Col>
          <Col className="position-relative d-flex justify-content-center">
            <img
              src={profile.image}
              alt="profile-img"
              className="img-profile img-fluid rounded-circle  position-absolute"
            />
          </Col>
          <Col className="fw-bold text-center pt-5">
            {profile.name} {profile.surname}
          </Col>
          <Col className="text-center pb-4 smallP">{profile.bio}</Col>
        </Col>
        <Col className="border-top border-bottom p-3 smallP link-nav-profile">
          <Col className="d-flex justify-content-between">
            <p className="mb-0">Collegamenti</p>
            <p className="mb-0 text-primary fw-bold">60</p>
          </Col>
          <p className="fw-bold">Espandi la tua rete</p>
          <Col className="d-flex justify-content-between">
            <p className="mb-0">Chi ha visitato il tuo profilo?</p>
            <p className="mb-0 text-primary fw-bold">18</p>
          </Col>
        </Col>
        <Col className="p-3 opacity-75 border-bottom smallP link-nav-profile">
          <p className="mb-0">Accedi a strumenti e informazioni in esclusiva</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            className="mercado-match me-2"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
              fill="#f8c77e"
            ></path>
            <path
              d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
              fill="#e7a33e"
            ></path>
          </svg>
          <a href="#" className="text-primary fw-bold">
            Prova Premium Gratis
          </a>
        </Col>
        <Col className="align-items-center d-flex px-3 smallP link-nav-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            className="bi bi-bookmark-fill me-2"
            viewBox="0 0 16 16"
          >
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          </svg>
          <Button className="bg-transparent text-dark border-0 fw-bold py-3 smallP">
            I miei elementi
          </Button>
        </Col>
      </Col>
    </>
  );
};

export default HomeProfileSection;
