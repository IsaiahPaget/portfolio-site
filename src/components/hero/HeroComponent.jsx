import React from "react";
import "./hero.css";

function HeroComponent(props) {
	return (
		<section className='flex gap-8 px-10'>
			<div className="mr-36">
				<h1 className="hero">Hello!</h1>
			</div>
			<div className='flex align-middle'>
				<div className='relative top-36 '>
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
