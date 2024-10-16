import React, { useRef } from "react";
import emailjs from "@emailjs/browser"

const VITE_MAIL_PUBLIC_KEY = 'JFLA-AbqF3hf0EBYC'
const VITE_MAIL_TEMPLATE_ID = 'template_56r39jf'
const VITE_MAIL_SERVICE_ID = 'service_fzcn58e'

function FormComponent(props) {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(VITE_MAIL_SERVICE_ID, VITE_MAIL_TEMPLATE_ID, form.current, {
				publicKey: VITE_MAIL_PUBLIC_KEY,
			})
			.then(
				() => {
					console.log('EMAIL SUCCESS!');
				},
			).catch(e => {
				console.error(e)
				alert("An error has occured with the contact form, try again or email directly")
			})
	};

	return (
		<form
			ref={form}
			onSubmit={(e) => {
				sendEmail(e)
				props.handleSubmit();
			}}
			className='lg:w-1/2 w-full text-xl text-blue flex flex-col gap-8 lg:p-3'
		>
			<input
				type='text'
				id='name'
				className='bg-gray-dark p-3'
				placeholder='/name'
				required={true}
			></input>
			<input
				type='email'
				className='bg-gray-dark p-3'
				placeholder='/email'
				id='email'
				name='from_name'
				required={true}
			></input>
			<textarea
				type='text'
				rows='5'
				className='bg-gray-dark p-3'
				placeholder='/message'
				id='message'
				name='message'
				required={true}
			></textarea>
			<div className='flex justify-end'>
				<button
					data-value='Send'
					tag='cypher'
					className='button p-3 border border-l-gray-light hover:border-gray-dark text-left duration-300 hover:bg-gray-light hover:text-gray-dark text-gray-light rounded-sm bg-gray-dark'
				>
					Send
				</button>
			</div>
		</form>
	);
}

export default FormComponent;
