import React from "react";
import "./hero.css";

function HeroComponent() {
	return (
		<section className='flex flex-col lg:flex-row lg:gap-44 gap-8 p-8'>
			<div className="flex-2/3">
				<img src='/images/banner.png' srcSet="/images/banner_small.png 300w, /images/banner_medium.png 900w, /images/banner.png 1000w" sizes="100vw" alt="Hello!" loading="lazy" />
			</div>
			<div className='flex-1/3'>
				<h3 className='text-3xl'>_About Me</h3>
				<p>
					My name is Isaiah, and I am a software developer based in Canada specializing in building web applications for businesses of all sizes. 
					I work with industry-standard technologies, including modern JavaScript frameworks such as Vue and React, as well as backend technologies like Laravel and .NET. 
					I am passionate about programming and actively contribute to the developer community through open-source projects, including Winter CMS.
					Check me out on <span><a className="link-text font-bold text-pink" href="https://linkedin.com/in/isaiahpaget">LinkedIn!</a></span>
				</p>
			</div>
		</section>
	);
}

export default HeroComponent;
