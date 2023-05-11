import React from "react";
import "./skill.css";

function SkillComponent({ skill, description, image, alt }) {
	return (
		<article data-value="skill" className='border flex flex-col hidden-before-scroll card p-3 h-96 bg-pink'>
			<header className='text-3xl flex-1'>{skill}</header>
			<div className="relative flex-1">
				<pre>{description}</pre>
				<img className=" bottom-0 right-0 absolute aspect-square h-32" alt={alt} src={image}/>
			</div>
		</article>
	);
}

export default SkillComponent;
