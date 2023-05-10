import React from "react";
import SkillComponent from "../skill/SkillComponent";
import './skillscontainer.css'

function SkillsContainerComponent(props) {
	return (
		<section tag="scroll" className="scroll flex pl-12 overflow-x-scroll p-10 gap-8 hidden-before-scroll">
			<article className="border card h-96 relative w-64 bg-gray-light">
                <h3 className=" text-3xl p-3">_SKILLS INCLUDE BUT AREN'T LIMITED TO = () =&gt; </h3>
            </article>
			<SkillComponent skill={"Front-End Development"} description={"React & React Native\nJavaScript\nTypeScript\nHTML5\nCSS\nRedux\nFigma"} alt={"Computer Screen"} image={"/images/front-end.gif"}/>
			<SkillComponent skill={"Back-End Development"} description={"Node Js\nExpress Js\nPython\nFlask\nSQL\nMongDb\nGoogle Cloud Platforms"} alt={"Server"} image={"/images/back-end.gif"}/>
            <SkillComponent skill={"UX/UI Design"} description={"Emphasis\nBalance and Alignment\nContrast\nRepetition\nProportion\nMovement\nWhite Space"} alt={"Squares Over lapping"} image={"/images/UXUI.gif"}/>
            <SkillComponent skill={"Game Development"} description={"Unity\nC#\nGIMP\nReaper Audio Software\nGame Design\nObject-Oriented Programming\nSOLID Code Principles"}alt={"Walking Droid"} image={"/images/gamedev.gif"}/>
		</section>
	);
}

export default SkillsContainerComponent;
