//Components
import About from "../components/About"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Applications from "../components/Applications"
import Banner from "../components/Banner"
import MissionVision from "../components/MissionVision"
// import Partners from "../components/Partners"
import Footer from "../components/Footer";


const Home = () => {
	return (
		<>
			<main className="page-wrapper">
				<Banner />
				<About />
				<MissionVision />
				<Applications />
				{/* <Partners /> */}
				<section className="cta-one">
					<Container>
						<Row>
							<Col lg={12}>
								<div className="cta-one-content text-center">
									<h2 className="section-title text-white">Want to see all government <br/> contract processes?</h2>
									<a href="contact.html" className="btn btn-primary">Create an account</a>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<Footer />
			</main>
		</>
	)
}

export default Home