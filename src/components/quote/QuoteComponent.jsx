import React from "react";

function QuoteComponent(props) {
	return (
		<section className='flex overflow-x-hidden flex-col text-gray-light items-end py-96 px-4 gap-3 lg:gap-8 lg:px-8'>
			<h3 data-value='quote' className='observer text-3xl hidden-before-scroll'>
				“Make it work, make it right, make it fast.”
			</h3>
			<p
				data-value='quote'
				className='observer italic font-bold hidden-before-scroll'
			>
				- Kent Beck
			</p>
		</section>
	);
}

export default QuoteComponent;
