import React from "react";
import "./contact.css";
import { sendEmail } from "../../firebase";
import ButtonComponent from "../button/ButtonComponent";

function ContactComponent(props) {
	return (
		<section className='px-10 pt-96 h-96'>
			<div className='p-10 flex flex-col items-center gap-8'>
				<div className='w-1/3 items-center text-gray-dark text-3xl p-3 m-3 flex flex-col'>
					<a tag="cypher" data-value="LinkedIn" href='https://linkedin.com/in/isaiahpaget' target='_blank'>
						LinkedIn
					</a>
					<a tag="cypher" data-value="Github" href='https://github.com/isaiahpaget' target='_blank'>
						Github
					</a>
					<a tag="cypher" data-value="isaiahpaget@gmail.com" href='isaiahpaget@gmail.com' target='_blank'>
						isaiahpaget@gmail.com
					</a>
				</div>
				<form
					onSubmit={(e) => sendEmail(e)}
					className='w-1/2 text-xl text-blue flex flex-col gap-8 p-3'
				>
					<input
						type='text'
						id='name'
						className='bg-gray-dark p-3'
						placeholder='/ Name'
					></input>
					<input
						type='email'
						className='bg-gray-dark p-3'
						placeholder='/ Email'
						id='email'
					></input>
					<textarea
						type='text'
						rows='5'
						className='bg-gray-dark p-3'
						placeholder='/ Message'
						id='message'
					></textarea>
					<div className="flex justify-end">
						<ButtonComponent name={"submit"} />
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactComponent;
