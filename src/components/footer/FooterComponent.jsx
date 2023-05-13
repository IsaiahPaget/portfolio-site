import React from "react";
import "./footer.css";
import ButtonComponent from "../button/ButtonComponent";

function FooterComponent(props) {
	function scrollToSkills() {
		window.scrollTo(0, 960);
	}
	function scrollToProjects() {
		window.scrollTo(0, 1870);
	}
	function scrollToCerts() {
		window.scrollTo(0, 3790);
	}

	return (
		<footer className='z-50 lg:p-10 flex lg:gap-4 lg:flex-col w-full fixed bottom-0'>
			<ButtonComponent
				className={
					"hover:border-gray-dark hover:bg-gray-light hover:text-gray-dark text-gray-light bg-gray-dark flex-1"
				}
				Function={scrollToSkills}
				name={"/skills"}
			/>
			<ButtonComponent
				className={
					"hover:border-gray-dark hover:bg-gray-light hover:text-gray-dark text-gray-light bg-gray-dark flex-1"
				}
				Function={scrollToProjects}
				name={"/projects"}
			/>
			<ButtonComponent
				className={
					"hover:border-gray-dark hover:bg-gray-light hover:text-gray-dark text-gray-light bg-gray-dark flex-1"
				}
				Function={scrollToCerts}
				name={"/certificates"}
			/>
		</footer>
	);
}

export default FooterComponent;
