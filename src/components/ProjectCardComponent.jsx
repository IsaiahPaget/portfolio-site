import React, { useState } from "react";
import { projects } from "../data/projects";
import BackOfCard from "./BackOfCardComponent";

function ProjectCard() {
	let previndex = 0;

	return projects.map((project, curindex) => {
		const [isRotated, setIsRotated] = useState(false);

		const handleRotate = () => {
			setIsRotated(!isRotated);
		};

		const cardStyle = {
			transform: isRotated ? "rotateY(180deg)" : "rotateY(0)",
			transition: "transform 0.5s ease",
		};

		if (curindex % 2 === 0 && previndex % 2 === 0) {
			previndex = curindex;
			return (
				<section className='project-container lg:col-span-2 hover:-translate-y-1 duration-700'>
					<div className='flip-card' onClick={handleRotate} style={cardStyle}>
						<div className='flip-card-inner' style={cardStyle}>
							<div className='flip-card-front'>
								<img
									className='project-img shadow-lg border-2 rounded dark:border-secondary'
									src={project.image}
								></img>
							</div>
							<BackOfCard
								title={project.title}
								description={project.description}
								url={project.url}
							/>
						</div>
					</div>
				</section>
			);
		}
		if (curindex % 3 === 0 && previndex % 2 === 0) {
			return (
				<section className='project-container lg:col-span-2 hover:-translate-y-1 duration-700'>
					<div className='flip-card' onClick={handleRotate} style={cardStyle}>
						<div className='flip-card-inner' style={cardStyle}>
							<div className='flip-card-front'>
								<img
									className='project-img shadow-lg border-2 rounded dark:border-secondary'
									src={project.image}
								></img>
							</div>
							<BackOfCard
								title={project.title}
								description={project.description}
								url={project.url}
							/>
						</div>
					</div>
				</section>
			);
		}
		previndex = curindex;
		return (
			<section className='project-container hover:-translate-y-1 duration-700'>
				<div className='flip-card' onClick={handleRotate} style={cardStyle}>
					<div className='flip-card-inner' style={cardStyle}>
						<div className='flip-card-front'>
							<img
								className='project-img shadow-lg border-2 rounded dark:border-secondary'
								src={project.image}
							></img>
						</div>
						<BackOfCard
							title={project.title}
							description={project.description}
							url={project.url}
						/>
					</div>
				</div>
			</section>
		);
	});
}

export default ProjectCard;
