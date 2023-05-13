import React from "react";
import "./certification.css";
import CertComponent from "../cert/CertComponent";
import ScrollingCardComponent from "../scrolling card container/ScrollingCardComponent";
import ButtonComponent from "../button/ButtonComponent";

function CertificationComponent(props) {
	return (
		<ScrollingCardComponent id={"certificates"}>
			<div
				data-value='cert'
				className='observer border border-gray-light card w-full h-72 lg:h-96'
			></div>
			<CertComponent
				name={"Front-End Developer, Meta"}
				href={
					"https://www.coursera.org/account/accomplishments/specialization/certificate/Y6N9LXZDMLFY"
				}
			>
				<ul>
					<li>/ Advanced React</li>
					<li>/ React Basics</li>
					<li>/ HTML / CSS In Depth</li>
					<li>/ Principles of UX/UI Design</li>
					<li>/ Version Control</li>
				</ul>
			</CertComponent>
			<CertComponent
				name={"Full-Stack Developer, Coursera"}
				href={
					"https://www.coursera.org/account/accomplishments/specialization/certificate/L7EMVASX5X5J"
				}
			>
				<ul>
					<li>/ React and React Native</li>
					<li>/ Redux</li>
					<li>/ Node Js and Express Js</li>
					<li>/ MongoDb</li>
					<li>/ jQuery</li>
				</ul>
			</CertComponent>
			<CertComponent
				name={"Introduction to Computer Science, HarvardX"}
				href={"https://courses.edx.org/certificates/cb3f468bbf5c41c9948495d9a1725c87"}
			>
				<ul>
					<li>/ Algorithms</li>
					<li>/ Data Structures</li>
					<li>/ C Programming</li>
					<li>/ Python</li>
					<li>/ SQL</li>
					<li>/ Web Development</li>
					<li>/ JS, CSS and HTML</li>
				</ul>
			</CertComponent>
			<article
				data-value='cert'
				className='border flex flex-col card p-4 w-full lg:h-96 bg-pink hidden-before-scroll'
			>
				<header className='text-3xl flex-1'>More in Progress ...</header>
				<div className='flex justify-end'>
					<ButtonComponent
						href={"https://linkedin.com/in/isaiahpaget"}
						name={"Check Out Linkedin!"}
					/>
				</div>
			</article>
		</ScrollingCardComponent>
	);
}

export default CertificationComponent;
