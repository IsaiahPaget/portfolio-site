import React from "react";

function QuoteComponent() {
	return (
		<section className='flex overflow-x-hidden flex-col text-gray-light items-end py-96 px-4 gap-3 lg:gap-8 lg:px-8'>
			<h3 data-value='quote' className='observer text-3xl hidden-before-scroll'>
				“I love your thirst for knowledge and your ability to execute. I played one of the games you built and was amazed! I see you are always pushing forward into new technologies,”
			</h3>
			<p
				data-value='quote'
				className='observer italic font-bold hidden-before-scroll'
			>
				- A friend and colleague at Accelerated Focus
			</p>
		</section>
	);
}

export default QuoteComponent;
