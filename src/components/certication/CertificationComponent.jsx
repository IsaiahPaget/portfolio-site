import React from "react";
import "./certification.css";

function CertificationComponent(props) {
	return (
		<section>
			<div className='bg-gray-dark text-gray-light flex justify-center'>
				<h2 className='text-9xl relative right-32'>Certification</h2>
			</div>
			<div className="bg-gray-dark">
				<div
					tag='scroll'
					className='scroll text-gray-dark flex pl-12 overflow-x-scroll hidden-before-scroll p-10 gap-8'
				>
					<div className='border border-gray-light card h-96 relative w-64'></div>
					<article className='border z-10 border-pink flex flex-col card p-3 h-96 bg-pink'>
						<header className='text-3xl flex-1'>Front-End Developer, Meta</header>
						<div className='relative flex-1'>
							<p>Advanced React</p>
							<p>React Basics</p>
							<p>HTML / CSS In Depth</p>
							<p>Principles of UX / UI Design</p>
							<p>Version Control</p>
							<p>Java Script Programming</p>
							<p>Front-End Capstone</p>
							<button className='border p-3 bottom-0 right-0 absolute'>
								<a
									tag='cypher'
									data-value='See Certificate'
									href='https://www.coursera.org/account/accomplishments/specialization/certificate/Y6N9LXZDMLFY'
									target='_blank'
								>
									See Certificate
								</a>
							</button>
						</div>
					</article>
					<article className='border z-10 border-pink flex flex-col card p-3 h-96 bg-pink'>
						<header className='text-3xl flex-1'>Full-Stack Developer, Coursera</header>
						<div className='relative flex-1'>
							<p>React and React Native</p>
							<p>Redux</p>
							<p>Node Js and Express Js</p>
							<p>MongoDb</p>
							<p>jQuery</p>
							<p>SASS</p>
							<p>Boot Strap</p>
							<button className='border p-3 bottom-0 right-0 absolute'>
								<a
									tag='cypher'
									data-value='See Certificate'
									href='https://www.coursera.org/account/accomplishments/specialization/certificate/L7EMVASX5X5J'
									target='_blank'
								>
									See Certificate
								</a>
							</button>
						</div>
					</article>
					<article className='border z-10 border-pink flex flex-col card p-3 h-96 bg-pink'>
						<header className='text-3xl flex-1'>
							Introduction to Computer Science, HarvardX
						</header>
						<div className='relative flex-1'>
							<p>Algorithms</p>
							<p>Data Structures</p>
							<p>C Programming</p>
							<p>Web Development</p>
							<p>Python</p>
							<p>SQL</p>
							<p>JS, CSS and HTML</p>
							<button className='border p-3 bottom-0 right-0 absolute'>
								<a
									tag='cypher'
									data-value='See Certificate'
									href='https://courses.edx.org/certificates/cb3f468bbf5c41c9948495d9a1725c87'
									target='_blank'
								>
									See Certificate
								</a>
							</button>
						</div>
					</article>
					<article className='border z-10 border-pink flex flex-col card p-3 h-96 bg-pink'>
						<header className='text-3xl flex-1'>More in Progress ...</header>
						<div className='relative flex-1'>
							<button className='border w-52 p-3 bottom-0 right-0 absolute'>
								<a
									tag='cypher'
									data-value='Check out LinkedIn for more!'
									href='https://linkedin.com/in/isaiahpaget'
									target='_blank'
								>
									Check out LinkedIn for more!
								</a>
							</button>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default CertificationComponent;
