import React from "react";

function ScrollingCardComponent(props) {
	return (
		<section
			tag='scroll'
			id={props.id}
			className='scroll overflow-x-hidden md:overflow-x-scroll flex flex-col md:flex-row lg:pl-12 p-3 gap-3 lg:p-8 lg:gap-8'
		>
			{props.children}
		</section>
	);
}

export default ScrollingCardComponent;
