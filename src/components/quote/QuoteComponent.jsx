import React from "react";

function QuoteComponent(props) {
	return (
		<section className='flex flex-col text-gray-light items-end bg-gray-dark pt-96 pb-44 gap-8 px-10'>
			<h3 className="text-3xl">“Make it work, make it right, make it fast.”</h3>
            <p className=" italic font-bold">- Kent Beck</p>
		</section>
	);
}

export default QuoteComponent;
