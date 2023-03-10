import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Shape1 from "../images/shapes/shape-1.png"
import Mission2 from "../images/gallery/mayor-2.jpg"

const MissionVision = () => {
    return (
        <section className="mayor-section">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="mayor-box">
                            <div className="section-title-box">
                                <div className="section-tagline">Mission and Vision</div>
                                <h2 className="section-title">Making contract data accessed by all</h2>
                                <p>There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae.</p>
                            </div>
                            <div className="mayor-icon-box">
                                <div className="mayor-icon">
                                    <i className="flaticon-professor"></i>
                                </div>
                                <h4 className="mayor-icon-title">Be able to make suggestions to development in your state.</h4>
                            </div>
                            <ul className="list-unstyled list-style-one">
                                <li>
                                    <FontAwesomeIcon icon="circle-check"/>
                                    <p>Making this the first true generator on the Internet</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="circle-check"/>
                                    <p>Lorem Ipsum is not simply random text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon="circle-check"/>
                                    <p>If you are going to use a passage</p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="mayor-img">
                            <img src={Shape1} className="floated-image-one" alt="img-7" />
                            <img src={Mission2} alt="img-8" />
                            <div className="mayor-name">
                                Grit Solutions Inc.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MissionVision