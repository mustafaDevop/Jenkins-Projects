import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Service4 from "../images/services/service-4.jpg"
import Service5 from "../images/services/service-5.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Service3 from "../images/services/service-6.jpg"

export default function Applications() {
    return (
        <section className="service-two-section">
            <h2 className="section-title text-center text-white">Our Applications</h2>
            <Container>
                <Row className="row-gutter-y-40">
                    <Col lg={4} xl={4} sm={12}>
                        <div className="service-two-card">
                            <div className="service-two-imgbox">
                                <div className="service-two-image">
                                    <img src={Service4} className="img-fluid" alt="img-28" />
                                    <a href="/">&nbsp;</a>
                                </div>
                            </div>
                            <div className="service-two-card-content">
                                <h4>Procurement Database</h4>
                                <p>This present moment is perfect simply due to the fact you’re experiencing it.</p>
                                <a href="/">
                                    <FontAwesomeIcon icon="arrow-right-long" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xl={4} sm={12}>
                        <div className="service-two-card">
                            <div className="service-two-imgbox">
                                <div className="service-two-image">
                                    <img src={Service5} className="img-fluid" alt="img-29" />
                                    <a href="/">&nbsp;</a>
                                </div>
                            </div>
                            <div className="service-two-card-content">
                                <h4>Whistle Blower Assistant</h4>
                                <p>This present moment is perfect simply due to the fact you’re experiencing it.</p>
                                <a href="/">
                                    <FontAwesomeIcon icon="arrow-right-long" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xl={4} sm={12}>
                        <div className="service-two-card">
                            <div className="service-two-imgbox">
                                <div className="service-two-image">
                                    <img src={Service4} className="img-fluid" alt="img-29" />
                                    <a href="/">&nbsp;</a>
                                </div>
                            </div>
                            <div className="service-two-card-content">
                                <h4>Contractor Open Portal</h4>
                                <p>This present moment is perfect simply due to the fact you’re experiencing it.</p>
                                <a href="/">
                                    <FontAwesomeIcon icon="arrow-right-long" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}