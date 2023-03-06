import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shape1 from "../images/shapes/shape-1.png"
import About7 from "../images/gallery/about-7.jpg"

export default function About() {
    return (
        <section className="about-one-section">
            <Container>
                <Row className="row-gutter-y-40">
                    <Col lg={12} xl={6}>
                        <div className="about-one-image">
                            <img src={Shape1} className="floated-image-one" alt="img-58" />
                            <img src={About7} alt="img-59" className="img-fluid" />
                        </div>
                    </Col>
                    
                    <Col lg={12} xl={6}>
                        <div className="about-one-inner">
                            <div className="section-tagline">
                                About Us
                            </div>
                            <h2 className="section-title">The future of open governance</h2>
                            <p>Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</p>
                            <h5 className="about-one-inner-text">Denounce with righteous indignation and dislike men who are so beguiled & demoralized our power.</h5>
                            <Row className="row-gutter-y-30">
                                <Col xl={6} lg={6} md={6}>
                                    <div className="about-one-card">
                                        <div className="about-one-card-number">01</div>
                                        <div className="about-one-card-content"><h5>Going Above and Beyond</h5></div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className="about-one-card">
                                        <div className="about-one-card-number">02</div>
                                        <div className="about-one-card-content"><h5>Committed to People First</h5></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}