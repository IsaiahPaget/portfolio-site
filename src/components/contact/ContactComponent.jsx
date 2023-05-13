import React, { useState } from "react";
import "./contact.css";
import { sendEmail } from "../../firebase";
import ButtonComponent from "../button/ButtonComponent";
import FormComponent from "../form/FormComponent";

function ContactComponent(props) {
	return (
		<section className='h-full pb-8'>
			{!props.submitted ? (
				<div className='p-10 flex flex-col text-3xl text-pink items-center gap-4'>
					<div className="flex gap-4">
						<a href='https://linkedin.com/in/isaiahpaget' target='_blank'>
							<i className='fa-brands fa-linkedin'></i>
						</a>
						<a href='https://github.com/isaiahpaget' target='_blank'>
							<i className='fa-brands fa-square-github'></i>
						</a>
						<a href='isaiahpaget@gmail.com' target='_blank'>
							<i className='fa-solid fa-envelope'></i>
						</a>
					</div>
					<FormComponent handleSubmit={props.handleSubmit} />
				</div>
			) : (
				<div className='p-10 mt-32 flex lg:flex-row flex-col justify-center items-center'>
					<img className='h-72' alt='wizard guy' src='/images/UXUI.gif' />
				</div>
			)}
		</section>
	);
}

export default ContactComponent;
