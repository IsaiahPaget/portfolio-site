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
					I’m a software developer based in Canada, passionate about building high-performance web applications and digital experiences. I specialize in JavaScript, HTML/CSS, and SQL, with experience working on large-scale web solutions for governments and financial institutions across North America.
					On the weekends and in my free time I am skateboarding, rock climbing and building projects with tech that excites me. Recently I have been enjoying Laravel and Vue for web apps as well as Godot and Odin for game jams.
					Check me out on <span><a className="link-text font-bold text-pink" href="https://linkedin.com/in/isaiahpaget">LinkedIn!</a></span>
				</p>
			</div>
		</section>
	);
}

export default HeroComponent;
