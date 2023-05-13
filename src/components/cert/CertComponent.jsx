import React from "react";
import ButtonComponent from "../button/ButtonComponent";

function CertComponent(props) {
	return (
		<article
			data-value='cert'
			className='border flex flex-col card hidden-before-scroll p-3 w-full lg:h-96 bg-pink'
		>
			<header className='text-3xl flex-1'>{props.name}</header>
			<div className='flex flex-1'>
				<div className='flex-1'>{props.children}</div>
				<div className='flex flex-1 justify-end md:justify-end items-end'>
					<ButtonComponent name={"See Certificate"} href={props.href} />
				</div>
			</div>
		</article>
	);
}

export default CertComponent;
