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
					<li>// Redux & Pinia</li>
					<li>// Figma</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"Back-End Development"}
				alt={"Server"}
				image={"/images/back-end.gif"}
			>
				<ul>
					<li>// .NET C#</li>
					<li>// Node</li>
					<li>// Postgres SQL</li>
					<li>// MSSQL</li>
					<li>// CI/CD</li>
					<li>// Docker</li>
					<li>// GCP</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"UX/UI Design"}
				alt={"Squares Over lapping"}
				image={"/images/UXUI.gif"}
			>
				<ul>
					<li>// Emphasis</li>
					<li>// Balance and Alignment</li>
					<li>// Contrast</li>
					<li>// Repetition</li>
					<li>// Proportion</li>
					<li>// Movement</li>
					<li>// White Space</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"Game Development"}
				alt={"Walking Droid"}
				image={"/images/gamedev.gif"}
			>
				<ul>
					<li>// Unity</li>
					<li>// Godot</li>
					<li>// Pygame</li>
					<li>// Odin + Raylib</li>
					<li>// SOLID</li>
					<li>// GIMP</li>
				</ul>
			</SkillComponent>
		</ScrollingCardComponent>
	);
}

export default SkillsContainerComponent;
