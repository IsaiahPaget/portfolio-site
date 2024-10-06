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
				image={"/portfolio-site/images/front-end.gif"}
			>
				<ul>
					<li>// React & React Native</li>
					<li>// JavaScript</li>
					<li>// TypeScript</li>
					<li>// HTML5</li>
					<li>// CSS</li>
					<li>// Redux</li>
					<li>// Figma</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"Back-End Development"}
				alt={"Server"}
				image={"/portfolio-site/images/back-end.gif"}
			>
				<ul>
					<li>// Node Js</li>
					<li>// Express Js</li>
					<li>// Python</li>
					<li>// Flask</li>
					<li>// SQL</li>
					<li>// MongDb</li>
					<li>// Google Cloud Platforms</li>
				</ul>
			</SkillComponent>
			<SkillComponent
				skill={"UX/UI Design"}
				alt={"Squares Over lapping"}
				image={"/portfolio-site/images/UXUI.gif"}
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
				image={"/portfolio-site/images/gamedev.gif"}
			>
				<ul>
					<li>// Unity</li>
					<li>// C#</li>
					<li>// GIMP</li>
					<li>// Reaper Audio</li>
					<li>// Game Design</li>
					<li>// Object Oriented Code</li>
					<li>// SOLID Principles</li>
				</ul>
			</SkillComponent>
		</ScrollingCardComponent>
	);
}

export default SkillsContainerComponent;
