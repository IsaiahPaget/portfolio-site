import React from "react";
import "./hero.css";

function HeroComponent() {
	return (
		<section className='flex flex-col lg:flex-row lg:gap-44 gap-8 p-8'>
			<div className="flex-2/3">
				<img src='/portfolio-site/images/banner.png' srcSet="/portfolio-site/images/banner_small.png 300w, /portfolio-site/images/banner_medium.png 900w, /portfolio-site/images/banner.png 1000w" sizes="100vw" alt="Hello!" loading="lazy" />
			</div>
			<div className='flex-1/3'>
				<h3 className='text-3xl'>_About Me</h3>
				<p>
					Software engineer based in Canada, with a passion for developing applications at scale.
					I have a solid background in web development and a keen interest in ensuring the security of the systems I work on.
					My goal is to create web applications that are not only functional and user-friendly, but also secure and efficient.
					Check me out on <span><a className="link-text font-bold text-pink" href="https://linkedin.com/in/isaiahpaget">LinkedIn!</a></span>
				</p>
			</div>
		</section>
	);
}

export default HeroComponent;
