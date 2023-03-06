import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Partner1 from "../images/shapes/client-1.png"

export default function Partners() {
    return (
        <section className="client-section" style={{paddingTop: 100}}>
            <h5 className="client-text">Our partners & suppoters</h5>
            <Container>
                <div className="client-carousel">
                    <Row className="client-inner">
                        <Col md={2} sm={4} className="item">
                            <img src={Partner1} className="img-fluid" alt="img-82" />
                        </Col>
                        <Col md={2} sm={4} className="item">
                            <img src={Partner1} className="img-fluid" alt="img-83" />
                        </Col>
                        <Col md={2} sm={4} className="item">
                            <img src={Partner1} className="img-fluid" alt="img-84" />
                        </Col>
                        <Col md={2} sm={4} className="item">
                            <img src={Partner1} className="img-fluid" alt="img-85" />
                        </Col>
                        <Col md={2} sm={4} className="item">
                            <img src={Partner1} className="img-fluid" alt="img-85" />
                        </Col>
                        <Col md={2} sm={4} className="item">
                            <img src={Partner1} className="img-fluid" alt="img-85" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}