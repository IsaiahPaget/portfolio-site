import React from "react";
import "./skill.css";

function SkillComponent({ skill, children, image, alt }) {
	return (
		<article
			data-value='skill'
			className='border observer flex flex-col card hidden-before-scroll p-4 w-full lg:h-96 h-full bg-pink'
		>
			<header className='text-3xl flex-1'>{skill}</header>
			<div className='flex-1 md:flex'>
				<div className="flex-1">{children}</div>
				<div className="flex flex-1 justify-center md:justify-end md:items-end">
					<img className='aspect-square max-h-36' alt={alt} src={image} />
				</div>
			</div>
		</article>
	);
}

export default SkillComponent;
