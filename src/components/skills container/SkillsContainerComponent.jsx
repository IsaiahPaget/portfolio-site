import React from "react";
import SkillComponent from "../skill/SkillComponent";
import "./skillscontainer.css";
import ScrollingCardComponent from "../scrolling card container/ScrollingCardComponent";

function SkillsContainerComponent(props) {
	return (
		<ScrollingCardComponent id={"skills"}>
			<article data-value="skill" className='observer border h-72 w-full card lg:h-96 relative bg-gray-light'>
				<h3 className=' text-3xl p-3'>
					_SKILLS INCLUDE BUT AREN'T LIMITED TO = () =&gt;
				</h3>
			</article>
			<SkillComponent
				skill={"Front-End Development"}
				alt={"Computer Screen"}
				image={"/images/front-end.gif"}
			>
				<ul>
					<li>// React & Vue</li>
					<li>// TypeScript</li>
					<li>// HTML5</li>
					<li>// CSS</li>
					<li>// Tailwind</li>
					<li>// Redux & Pinia</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"Back-End Development"}
				alt={"Server"}
				image={"/images/back-end.gif"}
			>
				<ul>
					<li>// Laravel PHP</li>
					<li>// .NET C#</li>
					<li>// Node</li>
					<li>// SQL Databases</li>
					<li>// Docker</li>
					<li className="whitespace-nowrap">// Object Oriented Programming</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"UX/UI Design"}
				alt={"Squares Over lapping"}
				image={"/images/UXUI.gif"}
			>
				<ul>
					<li>// Figma</li>
					<li className="whitespace-nowrap">// Ripping off Awwwards sites</li>
					<li>// Adobe colour wheel</li>
					<li>// CSS tricks</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"Game Development"}
				alt={"Walking Droid"}
				image={"/images/gamedev.gif"}
			>
				<ul>
					<li>// Godot</li>
					<li>// Raylib</li>
					<li>// Unity</li>
					<li>// Pygame</li>
					<li>// Odin</li>
					<li>// GIMP</li>
				</ul>
			</SkillComponent>
		</ScrollingCardComponent>
	);
}

export default SkillsContainerComponent;
