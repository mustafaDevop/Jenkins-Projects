import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../images/logo-light.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="footer-widget-logo">
                                <a href="index-2"><img src={Logo} className="img-fluid" alt="img-55" /></a>
                            </div>
                            <div className="footer-widget-text">
                                <p>Grit Procurement Solutions helps you see what your government is up to.</p>
                            </div>
                            <div className="footer-widget-socials">
                                <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                <a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                                <a href="/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                <a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="footer-widget">
                                <div className="footer-widget-explore">
                                    <h4 className="footer-widget-title">Explore</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="department-details">Administration</a></li>
                                        <li><a href="service-details">Fire Services</a></li>
                                        <li><a href="event-details">Business & Taxation</a></li>
                                        <li><a href="team-details">Circular’s And Go’s</a></li>
                                        <li><a href="contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="footer-widget">
                                <div className="footer-widget-department">
                                    <h4 className="footer-widget-title">Departments</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="department-details">Health & Safety</a></li>
                                        <li><a href="department-details">Housing & Land</a></li>
                                        <li><a href="department-details">Legal & Finance</a></li>
                                        <li><a href="department-details">Transport & Traffic</a></li>
                                        <li><a href="department-details">Arts & Culture</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="footer-widget">
                                <div className="footer-widget-contact">
                                    <h4 className="footer-widget-title">Contact</h4>
                                    <p>19, ICE Road, Innovation Hub, Benin City<br />Edo State, Nigeria.</p>
                                </div>
                                <div className="footer-widget-contact-list">
                                    <FontAwesomeIcon icon="envelope"/>
                                    <div className="footer-widget-contact-item">
                                        <a href="mailto:needhelp@gritapp.com">needhelp@gritapp.com</a>
                                    </div>
                                </div>
                                <div className="footer-widget-contact-list">
                                    <FontAwesomeIcon icon="phone"/>
                                    <div className="footer-widget-contact-item">
                                        <a href="tel:+92-003-68-090">+234 80 (403) 68 090</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bottom-footer">
                <Container>
                    <p>&copy; Copyright 2023 by Grit Procurement Solutions Inc. </p>
                </Container>
            </div>
        </footer>
    )
}