import react, { Component } from "react";
import NavBar from "./NavBarComponent";
import "../index.css";
import Logo from "./LogoComponent.jsx";
import CaseStudyCards from "./CaseStudyCardsComponent.jsx";
import ContactModal from "./ContactModalComponent.jsx";
import { motion, AnimatePresence } from "framer-motion";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBaz5GyoC3uH3cK78nnP91F2GX_flGswkI",
	authDomain: "portfolio-site-fdd81.firebaseapp.com",
	projectId: "portfolio-site-fdd81",
	storageBucket: "portfolio-site-fdd81.appspot.com",
	messagingSenderId: "384260227468",
	appId: "1:384260227468:web:0ccae1fd649a3f217516a9",
	measurementId: "G-GHR2K5HDFY",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const db = getFirestore(firebase);

let colourChange = false;
let removeColorTimeout;

document.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("mousemove", (e) => {
		if (!colourChange) {
			document.getElementById("navBarBorder").classList.add("colour-rotate");
			colourChange = true;
		}
		clearTimeout(removeColorTimeout);
		removeColorTimeout = setTimeout(() => {
			document.getElementById("navBarBorder").classList.remove("colour-rotate");
			colourChange = false;
		}, 2000);
	});

	document.addEventListener("mouseout", (e) => {
		clearTimeout(removeColorTimeout);
		document.getElementById("navBarBorder").classList.remove("colour-rotate");
		colourChange = false;
	});
});

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};

		this.onModalClick = this.onModalClick.bind(this);
		this.handlesubmit = this.handlesubmit.bind(this);
	}
	onModalClick() {
		this.setState({ modalOpen: !this.state.modalOpen });
	}

	async handlesubmit(event) {
		event.preventDefault();

		try {
			const name = await event.target.elements.name.value;
			const email = await event.target.elements.email.value;
			const body = await event.target.elements.message.value;

			const docRef = await addDoc(collection(db, "mail"), {
				name: name,
				email: email,
				body: body,
			});
			this.onModalClick();
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", () => {
			if (this.state.modalOpen) {
				this.onModalClick();
			}
		});
	}
	render() {
		return (
			<div className='dark:bg-light-black min-h-screen' id='contact'>
				<NavBar onModalClick={this.onModalClick} />
				<div id='navBarBorder' className='bg-secondary h-1 drop-shadow-xl'></div>
				<Logo />
				<div className='bg-alert'>
					<div className='wavy-upright'></div>
					<div className='bg-alert'>
						<CaseStudyCards />
					</div>
					<div className='wavy-downright'></div>
				</div>
				<AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
					{this.state.modalOpen && (
						<ContactModal
							handlesubmit={this.handlesubmit}
							onModalClick={this.onModalClick}
						/>
					)}
				</AnimatePresence>
			</div>
		);
	}
}

export default Main;
