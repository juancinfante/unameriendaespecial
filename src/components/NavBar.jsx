import logo from '../assets/logo.jpg';
import '../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav>
                <img src={logo} />
                <ul>
                    <a href="#nosotros"><li>NOSOTROS</li></a>
                    <a href="#servicio"><li>SERVICIO</li></a>
                    <a href="#galeria"><li>GALERIA</li></a>
                    <a href="#contacto"><li>CONTACTO</li></a>
                </ul>
                <div className='menu'>
                    <FontAwesomeIcon icon={faBars} size='2xl' onClick={handleShow} />
                </div>
            </nav>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>MENU</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='offcanvas-navbar'>
                        <ul>
                            <a href="#nosotros"><li>NOSOTROS</li></a>
                            <a href="#servicio"><li>SERVICIO</li></a>
                            <a href="#galeria"><li>GALERIA</li></a>
                            <a href="#contacto"><li>CONTACTO</li></a>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
