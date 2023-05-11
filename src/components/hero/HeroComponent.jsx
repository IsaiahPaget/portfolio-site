import React from "react";
import "./hero.css";

function HeroComponent(props) {
	return (
		<section className='flex flex-col lg:flex-row gap-8 px-10'>
			<div className="lg:mr-36">
				<h1 className="hero text-center text-8xl">Hello!</h1>
			</div>
			<div className='flex align-middle'>
				<div className='relative lg:top-36 '>
					<h3 className='text-3xl text-pink'>_About Me</h3>
					<p>
						Innovative and detail-oriented software engineer based in Canada, with a passion for creating
						frictionless and interactive applications. I have experience in full-stack development,
						and proven ability to lead successful projects.
					</p>
				</div>
			</div>
		</section>
	);
}

export default HeroComponent;
