import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'


// Import Pages
import Home from './views/Home';
import Contact from './views/Contact';
import Petitions from './views/Petitions';
import Faqs from './views/Faqs';

//Import Components
import Navbar from './components/Navbar';

library.add(fab, fas)

function App() {
	return (
		<Router>
			<div className="App">
				<header><Navbar /></header>
				<Routes baseName="">
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path={`/petitions`} element={<Petitions />} />
					<Route path="faqs" element={<Faqs />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
