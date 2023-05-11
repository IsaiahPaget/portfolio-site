import React from "react";

function QuoteComponent(props) {
	return (
		<section className='flex flex-col text-gray-light items-end bg-gray-dark pt-96 pb-44 gap-8 px-10'>
			<h3 data-value="quote" className="text-3xl hidden-before-scroll">“Make it work, make it right, make it fast.”</h3>
            <p data-value="quote" className=" italic font-bold hidden-before-scroll">- Kent Beck</p>
		</section>
	);
}

export default QuoteComponent;
