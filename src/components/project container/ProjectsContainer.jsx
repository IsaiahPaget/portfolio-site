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
				<h3 className='rotate text-gray-light text-9xl whitespace-nowrap'>
					PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
					PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
				</h3>
			</div>
			<section
				onMouseLeave={handleHidden}
				className='bg-opacity-0 projects overflow-hidden relative grid grid-cols-2'
			>
				<img
					id='project_img'
					className={`price absolute aspect-video object-cover object-top h-full ${
						hidden ? "hidden" : null
					}`}
					src={source}
				/>

				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Wizard Dungeon"}
					data={"/images/wizardbumgeon.png"}
					route={"https://github.com/IsaiahPaget/Wizard-Bumgeon"}
					description={
						"First Title from my indie game studio!\n\n/ Unity\n/ C#\n/ Object/Oriented Programming\n/ SOLID code principles\n/ Git\n/ Collaboration"
					}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Price Compass"}
					data={"/images/pricecompasspage.png"}
					route={"https://pricecompass.one"}
					description={
						"Full-stack web app that tracks prices on Google Shopping!\n\n/ React\n/ OpenAI GPT/3 API\n/ Cloud Functions\n/ Authentication\n/ Web Security\n/ Data Modeling"
					}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Bachelor Suite Skateboards"}
					data={"/images/bachelorsuitepage.png"}
					route={"https://bachelorsuitestore.com"}
					description={
						"E-commerce website allowing Bachelor Suite Skateboards to reach new customers!\n\n/ UX/UI Design\n/ Easy To Use Back End\n/ Customer Satisfaction\n/ Replicating Figma Designs\n/ Web Security\n/ Google Anayltics"
					}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Arc Liquor Store"}
					data={"/images/arcliquorpage.png"}
					route={"https://arcliquorkelowna.web.app"}
					description={"Front-End project, I learned a whole lot about React and Firebase!\n\n/ React\n/ Sass\n/ Boot Strap\n/ UX/UI Design\n/ Security\n/ Firebase"}
				/>
				<div className='z-10 bg-opacity-0 p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
				<div className='z-10 bg-opacity-0 p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
			</section>
		</div>
	);
}

export default ProjectsContainer;
