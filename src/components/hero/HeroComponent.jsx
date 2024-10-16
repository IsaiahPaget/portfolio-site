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
					Software developer based in Canada. At work I use Javascript, HTML/CSS, SQL and OutSystems to build web applications for governments and credit unions all over North America. Some of my daily challenges are: Looking around my cat so I can see the screen, and figuring out why my code isn't working.
					On the weekends and in my free time I am skateboarding, rock climbing and building projects with tech that excites me. Recently I have been enjoying .NET, Vue and Godot for my personal projects. I also have a keen interest in security and low level programming and like to challenge myself with some low level stuff like C and Odin every once in a while.
					Check me out on <span><a className="link-text font-bold text-pink" href="https://linkedin.com/in/isaiahpaget">LinkedIn!</a></span>
				</p>
			</div>
		</section>
	);
}

export default HeroComponent;
