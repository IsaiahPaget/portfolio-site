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
					project={"Password_Manager"}
					id={"/images/PasswordManagerShowcase.jpg"}
					route={"https://github.com/IsaiahPaget/PasswordManager"}
					title={"A self hostable password manager made with .NET and Vue"}
				>
					<p>// Multiple accounts for friends and family</p>
					<p>// Client side encryption</p>
					<p>// Light and dark mode</p>
					<p>// Mobile first design</p>
					<p>// Auto generate secure passwords</p>
					<p>// Import/Export passwords from CSV</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"Tron_Agent"}
					id={"/images/tronagent.jpg"}
					route={"https://github.com/isaiahpaget/tronagent"}
					title={"Game of Tron where one player is controlled by a Deep QNet model and the other is procedural"}
				>
					<p>// Pygame</p>
					<p>// Machine Learning</p>
					<p>// Deep QNet</p>
					<p>// Simulation</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"Hack_Assembler"}
					id={"/images/hackassembler.jpg"}
					route={"https://github.com/isaiahpaget/hackassembler"}
					title={"An assembler built to transpose the Hack assembly language into binary instructions that a 16 bit computer can run"}
				>
					<p>// C</p>
					<p>// Assembly</p>
					<p>// Linux</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"Save_Pompeii"}
					id={"/images/savepompeii.jpg"}
					route={"https://isaiahpaget.itch.io/savepompeii"}
					title={
						"Submission for the Brackeys 2024 game jam! Convince the village that the volcano is about to erupt"
					}
				>
					<p>// Godot</p>
					<p>// OOP</p>
					<p>// Strategy</p>
					<p>// Web based</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={"Strong_Towns_Kelowna"}
					id={"/images/strongtownskelowna.jpeg"}
					route={"https://strongtownskelowna.org"}
					title={"I am the founder of a 'local chapter' of Strong Towns, an organization advocating for livable and financially resilient communities, where people, not cars, are prioritized"}
				>
					<p>// Wordpress</p>
					<p>// PHP</p>
					<p>// HTML, CSS, and JavaScript</p>
					<p>// Community activisim</p>
				</ProjectComponent>
				<ProjectComponent
					handleChangePhoto={handleChangePhoto}
					project={".dotfiles"}
					id={"/images/dotfiles.jpg"}
					route={"https://github.com/isaiahpaget/dotfiles"}
					title={"Where I keep all my configuration because my install always breaks"}
				>
					<p>// Neovim</p>
					<p>// Kitty</p>
					<p>// zsh</p>
					<p>// i3</p>
					<p>// Install script</p>
				</ProjectComponent>
			</section>
		</div>
	);
}

export default ProjectsContainer;
