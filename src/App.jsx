import { useEffect, useState } from "react";
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import HeroComponent from "./components/hero/HeroComponent";
import { cypherEffect, dragScrolling, observer } from "./events";
import CharactersComponent from "./components/charactersgif/CharactersComponent";
import SkillsContainerComponent from "./components/skills container/SkillsContainerComponent";
import ProjectsContainer from "./components/project container/ProjectsContainer";
import CertificationComponent from "./components/certication/CertificationComponent";
import QuoteComponent from "./components/quote/QuoteComponent";
import ContactComponent from "./components/contact/ContactComponent";

function App() {

	const [contactMessage, setContactMessage] = useState("Contact Me!");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = () => {
		setContactMessage("Thanks For Connecting!");
		setSubmitted(true);
	};

	useEffect(() => {
		cypherEffect();
		dragScrolling();
		observer();

	}, []);

	return (
		<>
			<HeaderComponent />
			<main>
				<HeroComponent />
				<CharactersComponent />
				<SkillsContainerComponent />
				<ProjectsContainer />
				<div className="background-solid-gadient">
					<h3 className='sticky top-80 pointer-events-none text-center text-6xl md:text-9xl'>
						{contactMessage}
					</h3>
					<div className='bg-gray-dark'>
						<QuoteComponent />
						<h3 id="certificates" className="text-gray-light text-5xl md:text-7xl lg:text-9xl relative z-10 text-center md:right-24 lg:right-44">Certifications</h3>
						<CertificationComponent />
					</div>
					<div className='h-96 pointer-events-none'></div>
				</div>
				<ContactComponent submitted={submitted} handleSubmit={handleSubmit} />
			</main>
			<FooterComponent />
		</>
	);
}

export default App;
