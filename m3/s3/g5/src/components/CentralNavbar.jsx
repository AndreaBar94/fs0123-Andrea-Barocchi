import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import user from '../img/user.png';

/* eslint-disable jsx-a11y/anchor-is-valid */
const CentralNavbar = () => {

    return(
        <Navbar id="centralNavbar" className="px-3 navbar-dark d-flex justify-content-end sticky-top bg-opacity-10">
            <Container fluid className=" ps-3 ps-lg-1">
                            <span className="d-lg-none text-light fw-bold fs-5">Good evening</span>
                            <div className="btn-group d-none d-lg-block d-flex align-items-center my-2" role="group">
                                <Button variant="none" className="btn navBtns text-light bg-dark rounded-circle mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fillRule="currentColor"
                                        className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fillrule-rule="evenodd"
                                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </Button>
                                <Button type="button" className="btn navBtns text-light bg-dark rounded-circle mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fillRule="currentColor"
                                        className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillrule-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </Button>
                            </div>
                            <Button className="btn d-lg-none ms-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fillRule="currentColor"
                                    className="text-light bi bi-bell" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                </svg>
                            </Button>
                            <Button className="btn d-lg-none ms-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"
                                    className="text-light bi bi-clock-history" viewBox="0 0 16 16">
                                    <path
                                        d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                    <path
                                        d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </Button>
                            <Navbar.Toggle className="navbar-toggler border-0 d-none" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"
                                    className="bi bi-gear text-light" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path
                                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="navbarSupportedContent">
                                <Nav className="ms-auto">
                                    <Navbar.Toggle
                                        className="btn btn-secondary rounded-pill bg-dark d-flex align-items-center me-0"
                                        >
                                        <img src={user} className="rounded-circle img-fluid bg-light"
                                            width="28" alt="userImg" />
                                        <p id="userNameCustom" className="px-3 m-0">Nome Cognome</p>
                                    </Navbar.Toggle>
                                    <NavDropdown className="dropdown-menu dropdown-menu-end bg-secondary">
                                        <NavDropdown.Item><a className="text-light" href="#">Account</a></NavDropdown.Item>
                                        <NavDropdown.Item><a className="text-light" href="#">Profilo</a></NavDropdown.Item>
                                        <NavDropdown.Item><a className="text-light" href="#">Effettua l'upgrade a premium</a>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item><a className="text-light border-bottom border-light pb-2"
                                                href="#">Impostazioni</a></NavDropdown.Item>
                                        <NavDropdown.Item><a className="text-light pt-2" href="login.html">Esci</a></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default CentralNavbar ;