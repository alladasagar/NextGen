import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header-bg">
            <Container fluid className="text-center text-white d-flex align-items-center justify-content-center min-vh-100">
                <Row>
                    <Col>
                        <h1>Learning is a Journey</h1>
                        <h1>Not a Destination</h1>
                        <p>We believe that education is not just about reaching a final destination,</p>
                        <p>it's about the continuous journey of discovery, growth, and development.</p>
                        <Button variant="light" size="lg">Explore More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
