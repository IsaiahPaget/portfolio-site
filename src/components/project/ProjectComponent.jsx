import React from "react";
import "./project.css";

function ProjectComponent(props) {
	return (
		<article
			onMouseEnter={(e) => props.handleChangePhoto(e)}
			data-value={props.data}
			className='z-10 bg-opacity-0 p-10 duration-500 hover:bg-gray-light hover:text-gray-dark border border-gray-light h-96'
		>
			<div className='parent flex flex-col h-full'>
				<h3 className='text-3xl mb-8 flex-1'>{props.project}</h3>
				<pre className=' text-gray-dark flex-1 hidden'>{props.description}</pre>
				<button className='flex flex-col items-end'>
					<a
						href={props.route}
						target='_blank'
						data-value='See More'
						tag='cypher'
						className='p-3 border'
					>
						See More
					</a>
				</button>
			</div>
		</article>
	);
}

export default ProjectComponent;
