import React from "react";
import "./project.css";
import ButtonComponent from "../button/ButtonComponent";

function ProjectComponent(props) {
	return (
		<article
			onMouseEnter={(e) => props.handleChangePhoto(e)}
			id={props.id}
			className='z-10 bg-opacity-0 p-4 lg:p-8 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light project parent group gap-4 lg:gap-8 flex flex-col'
		>
			<h3 className='text-3xl flex-1'>{props.project}</h3>
			<div className='flex flex-col gap-4 lg:gap-8 flex-1 '>
				<p className=' text-gray-dark group-hover:block hidden'>{props.title}</p>
				<div className=' text-gray-dark group-hover:block hidden'>{props.children}</div>
			</div>
			<div className='flex justify-end'>
				<ButtonComponent
					href={props.route}
					name={"See More"}
					className={
						" group-hover:border-gray-dark group-hover:text-gray-dark border-blue text-blue"
					}
				/>
			</div>
		</article>
	);
}

export default ProjectComponent;
