import React from "react";

function QuoteComponent() {
	return (
		<section className='flex overflow-x-hidden flex-col text-gray-light items-end py-96 px-4 gap-3 lg:gap-8 lg:px-8'>
			<h3 data-value='quote' className='observer text-3xl hidden-before-scroll'>
				“I feel like when you add numbers to other numbers, they get like bigger.”
			</h3>
			<p
				data-value='quote'
				className='observer italic font-bold hidden-before-scroll'
			>
				- A dear friend of mine
			</p>		
		</section>
	);
}

export default QuoteComponent;
