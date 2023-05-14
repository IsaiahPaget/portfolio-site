import React from "react";
import "./footer.css";
import ButtonComponent from "../button/ButtonComponent";

function FooterComponent(props) {
	function scrollToSkills() {
		const skills = document.getElementById("skills");
		skills.scrollIntoView()
	}
	function scrollToProjects() {
		const projects = document.getElementById("projects");
		projects.scrollIntoView()
	}
	function scrollToCerts() {
		const certs = document.getElementById("certificates");
		certs.scrollIntoView()
	}

	return (
		<footer className='z-50 lg:p-8 flex lg:gap-3 lg:flex-col pointer-events-none w-full fixed bottom-0'>
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
