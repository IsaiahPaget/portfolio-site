import React from "react";
import "./hero.css";

function HeroComponent(props) {
	return (
		<section className='flex flex-col lg:flex-row lg:gap-44 gap-8 p-8'>
			<div className="flex-2/3">
				<img src='/images/banner.png' alt="Hello!"/>
			</div>
			<div className='flex-1/3'>
				<h3 className='text-3xl text-pink'>_About Me</h3>
				<p>
					Innovative and detail-oriented software engineer based in Canada, with a passion
					for creating frictionless and interactive applications. I have experience in
					full-stack development, and proven ability to lead successful projects. Check me out on LinkedIn! ^
				</p>
			</div>
		</section>
	);
}

export default HeroComponent;
