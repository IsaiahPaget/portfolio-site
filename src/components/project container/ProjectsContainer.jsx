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
					route={"/"}
					description={
						"The first title from a indie game studio that my friends and I have started. Since starting this project I have learned so much about object oriented programming, Unity and C#. I have learn't what it means to have good code architecture, and I have begun to realize the important of certain desgin patterns. Since overhauling the code base to align with the SOLID code principles I have seen a major increase in productivity."
					}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Price Compass"}
					data={"/images/pricecompasspage.png"}
					route={"/"}
					description={
						"I like the idea of finding the best deal, but I am too lazy to check the internet everyday until I find it. So I made an app that does it for me. This app allows users to add key words to their list and the app will check Google shopping everyday at 12pm PST for the best deals. I made this using React, Firebase, and the OpenAI GPT-3 API, along with some web scraping tools."
					}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Bachelor Suite Skateboards"}
					data={"/images/bachelorsuitepage.png"}
					route={"/"}
					description={""}
				/>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"_Arc Liquor Store"}
					data={"/images/arcliquorpage.png"}
					route={"/"}
					description={""}
				/>
				<div className='z-10 bg-opacity-0 p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
				<div className='z-10 bg-opacity-0 p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'></div>
			</section>
		</div>
	);
}

export default ProjectsContainer;
