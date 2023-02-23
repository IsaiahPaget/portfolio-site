import React from "react";
import ProjectCard from "./ProjectCardComponent";

function Projects() {

	return (
		<>
			<header className='flex justify-end pr-5 pt-5 text-white drop-shadow-lg max-w-7xl mx-auto font-bold text-4xl hover:-translate-y-1 duration-700'>
				<p className='gradient-text text-secondary'>My Work</p>
			</header>
			<section className='grid sm:grid-cols-1 px-4 xl:px-0 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto my-8 lg:mb-40'>
				<ProjectCard/>
			</section>
		</>
	);
}

export default Projects;
