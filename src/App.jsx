import { useEffect } from "react";
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import HeroComponent from "./components/hero/HeroComponent";
import { cypherEffect, dragScrolling } from "./events";
import CharactersComponent from "./components/charactersgif/CharactersComponent";
import SkillsContainerComponent from "./components/skills container/SkillsContainerComponent";
import ProjectsContainer from "./components/project container/ProjectsContainer";
import CertificationComponent from "./components/certication/CertificationComponent";
import QuoteComponent from "./components/quote/QuoteComponent";
import ContactComponent from "./components/contact/ContactComponent";
import ThankYouComponent from "./components/thankyou/ThankYouComponent";
import { analytics } from "./firebase";

function App() {
	analytics;

	useEffect(() => {
		cypherEffect();
		dragScrolling();
	}, []);

	return (
		<>
			<HeaderComponent />
			<HeroComponent />
			<CharactersComponent />
			<SkillsContainerComponent />
			<ProjectsContainer />
			<QuoteComponent />
			<div className='background-solid-gadient'>
				<h3 className='sticky top-80 text-center text-9xl'>Contact Me!</h3>
				<CertificationComponent />
				<ContactComponent />
			</div>
			<ThankYouComponent name={"isaiah"} />
			<FooterComponent />
		</>
	);
}

export default App;
