import react, { useEffect, useState } from "react";

function Logo(props) {

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		location.reload();
	});

	return (
		<section className='p-5  pt-8 lg:pt-28 lg:mb-40'>
			<div className='grid max-w-7xl mx-auto'>
				<div className='lg:w-1/2 border-b-2 border-secondary'>
					<div className='text-4xl gradient-text drop-shadow-lg text-secondary dark:text-secondary font-bold hover:-translate-y-1 duration-700'>
						Let me tell you a bit about myself!
					</div>
					<div className='text-lg mt-8 pb-8 dark:text-gray-light text-light-black dark:text-white hover:-translate-y-1 duration-700'>
						<p>
							I am a software developer with a passion for skateboarding, playing guitar, and
							metal music.
						</p>
						<br />
						<p>
							My educational background is diverse, with multiple alternative educational
							experiences including art school.
						</p>
						<br />
						<p>I am excited to bring my unique perspective and skill set to your team.</p>
						<br />
						<p>
							I am confident that my experience in arts, coupled with my technical skills, makes me an excellent developer.
						</p>
						<br />
						<p>
							This website features dark mode, consider changing your colour settings if you
							haven't already!
						</p>
					</div>
				</div>
				{/* <div id="bigHeadshot" className='flex justify-center align-center mt-8 lg:my-auto lg:ml-auto hover:-translate-y-1 duration-700'>
					{window.matchMedia("(prefers-color-scheme: light)").matches && (
						<img
							className='headshot'
							alt='Headshot of Isaiah Paget'
							src='/images/HeadShot (1).svg'
						/>
					)}
					{window.matchMedia("(prefers-color-scheme: dark)").matches && (
						<img
							className='headshot'
							alt='Headshot of Isaiah Paget'
							src='/images/HeadShot (dark).svg'
						/>
					)}
				</div> */}
			</div>
		</section>
	);
}

export default Logo;
