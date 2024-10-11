import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aboutus = () => {
    return (
        <Container className="py-5">
            <Row className="align-items-center">
            <Col xs={12} md={6}>
                    <h2 className='text-primary'>About NextGen</h2>
                    <p><span className='text-primary'>Welcome</span> to NextGen School, where we believe that education is not just about reaching a final destination but about the continuous journey of discovery, growth, and development. At NextGen, we are committed to preparing students for the future by providing a holistic learning experience that goes beyond the classroom.</p>
                    <p><span className='text-primary'>Our mission</span> is to nurture the leaders of tomorrow by fostering a love of learning, encouraging creativity, and building strong character. We offer a comprehensive curriculum that blends traditional academic excellence with innovative approaches to teaching, ensuring our students are well-equipped to thrive in a rapidly changing world.</p>
                </Col>
                <Col xs={12} md={6} className="mb-4 mb-md-0">
                    <div className="video">
                        <video width="100%" height="auto" controls>
                            <source src="/videos/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Aboutus;
