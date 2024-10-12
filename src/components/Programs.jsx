import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Programs = () => {
    return (
        <Container>
            <h5 className="text-center">Activities</h5>
            <h2 className="text-center"><span className="text-primary">Students Do</span></h2>
            <Row className="programs d-flex justify-content-center my-5 ">
                <Col xs={12} md={4} className="program my-2">
                    <div className="position-relative">
                        <img src="/images/music.png" className="img-fluid rounded" alt="Music Program" />
                        <div className="box">MUSIC</div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="program my-2">
                    <div className="position-relative">
                        <img src="/images/dance.png" className="img-fluid rounded" alt="Dance Program" />
                        <div className="box">DANCE</div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="program my-2">
                    <div className="position-relative">
                        <img src="/images/play.png" className="img-fluid rounded" alt="Games Program" />
                        <div className="box">GAMES</div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Programs;
