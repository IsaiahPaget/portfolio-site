import React, { useState } from "react";
import "./projectscontainer.css";
import ProjectComponent from "../project/ProjectComponent";

function ProjectsContainer(props) {
	const [source, setSource] = useState(null);
	const [hidden, setHidden] = useState(true);

	const handleHidden = () => {
		setHidden(true);
	};

	const handleChangePhoto = (e) => {
		setHidden(false);
		setSource(e.target.dataset.value);
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
				onMouseLeave={handleHidden}
				className='bg-opacity-0 projects relative grid grid-cols-1 md:grid-cols-2'
			>
				<img
					id='project_img'
					className={`price absolute aspect-video object-cover object-top h-full max-lg:hidden ${
						hidden ? "hidden" : null
					}`}
					src={source}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Wizard Dungeon"}
					data={"/images/wizardbumgeon.png"}
					route={"https://github.com/IsaiahPaget/Wizard-Bumgeon"}
					title={"First Title from my indie game studio!"}
				>
					<p>/Unity</p>
					<p>/C#</p>
					<p>/Object/Oriented Programming</p>
					<p>/SOLID code principles</p>
					<p>/Git</p>
					<p>/Collaboration</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Price Compass"}
					data={"/images/pricecompasspage.png"}
					route={"https://pricecompass.one"}
					title={"Full-stack web app that tracks prices on Google Shopping!"}
				>
					<p>/React</p>
					<p>/OpenAI GPT-3 API</p>
					<p>/Cloud Functions</p>
					<p>/Authentication</p>
					<p>/Web Security</p>
					<p>/Data Modeling</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Bachelor Suite Skateboards"}
					data={"/images/bachelorsuitepage.png"}
					route={"https://bachelorsuitestore.com"}
					title={
						"E-commerce website allowing Bachelor Suite Skateboards to reach new customers!"
					}
				>
					<p>/UX/UI Design</p>
					<p>/Easy To Use Back End</p>
					<p>/Customer Satisfaction</p>
					<p>/Replicating Figma Designs</p>
					<p>/Web Security</p>
					<p>/Google Anayltics</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Arc Liquor Store"}
					data={"/images/arcliquorpage.png"}
					route={"https://arcliquorkelowna.web.app"}
					title={"Front-End project, I learned a whole lot about React and Firebase!"}
				>
					<p>/React</p>
					<p>/Sass</p>
					<p>/Boot Strap</p>
					<p>/UX/UI Design</p>
					<p>/Security</p>
					<p>/Firebase</p>
				</ProjectComponent>
				<div className='z-10 bg-opacity-0 max-lg:hidden p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
				<div className='z-10 bg-opacity-0 max-lg:hidden p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
			</section>
		</div>
	);
}

export default ProjectsContainer;
