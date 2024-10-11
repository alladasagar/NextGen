import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    const [navbarBg, setNavbarBg] = useState("transparent");
    const [expanded, setExpanded] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = window.innerHeight * 0.4; // 40% of the viewport height

        if (scrollY > threshold) {
            setNavbarBg("blue");
        } else if (!expanded) {
            setNavbarBg("transparent");
        }
    };

    const handleToggle = (expand) => {
        setExpanded(expand);
        if (expand) {
            setNavbarBg("blue");
        } else {
            // Reset background based on scroll position when collapsed
            const scrollY = window.scrollY;
            const threshold = window.innerHeight * 0.4;
            if (scrollY > threshold) {
                setNavbarBg("blue");
            } else {
                setNavbarBg("transparent");
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [expanded]); // Depend on 'expanded' to handle changes on collapse/expand

    return (
        <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: navbarBg }} expanded={expanded} onToggle={handleToggle}>
            <Container>
                <Navbar.Brand href="#home" className="fs-3 text-light">NextGen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link href="#home" className="text-light mx-2">Home</Nav.Link>
                        <Nav.Link href="#about" className="text-light mx-2">About Us</Nav.Link>
                        <Nav.Link href="#programs" className="text-light mx-2">Activity</Nav.Link>
                        <Nav.Link href="#faculty" className="text-light mx-2">Faculty</Nav.Link>
                    </Nav>
                    <Button variant="light" href="#contact">Contact Us</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
