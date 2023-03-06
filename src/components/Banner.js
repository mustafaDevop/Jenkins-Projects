import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
    return (
        <section className="main-slider">
            <div className="main-slider-swiper">
                <div className="item">
                    <div className="item-slider-bg"></div>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="slider-content">
                                    <div className="slider-tagline">Improving government transparency</div>
                                    <h1 className="section-title">Procurement data,<br /> open to all.</h1>
                                    <a href="/" className="btn btn-primary">Get Started</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Banner