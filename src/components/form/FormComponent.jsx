import React from "react";

function FormComponent(props) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.handleSubmit();
				sendEmail(e)
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
				required={true}
			></input>
			<textarea
				type='text'
				rows='5'
				className='bg-gray-dark p-3'
				placeholder='/message'
				id='message'
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
