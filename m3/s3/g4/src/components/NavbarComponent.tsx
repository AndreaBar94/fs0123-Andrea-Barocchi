import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Nav
        className="navbar justify-content-center p-3 bg-opacity-50">
            <Nav.Item>
                <Link className="navBtn text-decoration-none mx-3" id="home" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="navBtn text-decoration-none mx-3" to="*">About</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="navBtn text-decoration-none mx-3" to="*">Browse</Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavbarComponent;