import React, { useState } from "react";
import "./projectscontainer.css";
import ProjectComponent from "../project/ProjectComponent";

function ProjectsContainer() {
	const [source, setSource] = useState(null);
	const [hidden, setHidden] = useState(true);

	const handleHidden = () => {
		setHidden(true);
	};

	const handleChangePhoto = (e) => {
		setHidden(false);
		setSource((prev) => {
			prev = e.target.getAttribute('id');
			return prev;
		});
	};

	return (
		<div className=' bg-gray-dark -z-20 mt-44'>
			<div className='flex border  border-gray-light overflow-hidden'>
				<h3 className='rotate text-gray-light text-6xl lg:text-9xl whitespace-nowrap'>
					PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
					PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
				</h3>
			</div>
			<section
				id='projects'
				onMouseLeave={handleHidden}
				className='bg-opacity-0 projects relative grid grid-cols-1 md:grid-cols-2'
			>
				<img
					id='project_img'
					className={`absolute object-cover object-top h-full w-full ${hidden ? "hidden" : null
						}`}
					src={source}
					loading="lazy"
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Wizard Dungeon"}
					id={"/portfolio-site/images/wizardbumgeon.jpg"}
					route={"https://github.com/IsaiahPaget/Wizard-Bumgeon"}
					title={"First Title from my indie game studio!"}
				>
					<p>// Unity</p>
					<p>// C#</p>
					<p>// Object/Oriented Programming</p>
					<p>// SOLID code principles</p>
					<p>// Git</p>
					<p>// Collaboration</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Hack Assembler"}
					id={"/portfolio-site/images/hackassembler.jpg"}
					route={"https://github.com/isaiahpaget/hackassembler"}
					title={"An assembler built to transpose the Hack assembly language into binary instructions that a 16 bit computer can run."}
				>
					<p>// C</p>
					<p>// Assembly</p>
					<p>// Linux</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Bachelor Suite Skateboards"}
					id={"/portfolio-site/images/bachelorsuitepage.jpg"}
					route={"https://bachelorsuitestore.com"}
					title={
						"E-commerce website allowing Bachelor Suite Skateboards to reach new customers!"
					}
				>
					<p>// UX/UI Design</p>
					<p>// Easy To Use Back End</p>
					<p>// Customer Satisfaction</p>
					<p>// Replicating Figma Designs</p>
					<p>// Web Security</p>
					<p>// Google Anayltics</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Arc Liquor Store"}
					id={"/portfolio-site/images/arcliquorpage.jpg"}
					route={"https://arcliquorkelowna.web.app"}
					title={"Front-End project, I learned a whole lot about React and Firebase!"}
				>
					<p>// React</p>
					<p>// Sass</p>
					<p>// Boot Strap</p>
					<p>// UX/UI Design</p>
					<p>// Security</p>
					<p>// Firebase</p>
				</ProjectComponent>
				<div className='z-10 bg-opacity-0 max-lg:hidden p-8 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
				<div className='z-10 bg-opacity-0 max-lg:hidden p-8 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
			</section>
		</div>
	);
}

export default ProjectsContainer;
