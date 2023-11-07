import "./contact.css";
import FormComponent from "../form/FormComponent";

function ContactComponent(props) {
	return (
		<section className='h-full pb-8' id="contact">
			{!props.submitted ? (
				<div className='p-8 flex flex-col text-3xl text-pink items-center gap-3'>
					<div className="flex gap-3 h-8">
						<a href='https://linkedin.com/in/isaiahpaget' aria-label="Linkedin.com" target='_blank'>
							<i className='fa-brands fa-linkedin duration-100 hover:text-4xl'></i>
						</a>
						<a href='https://github.com/isaiahpaget' aria-label="Github.com" target='_blank'>
							<i className='fa-brands fa-square-github duration-100 hover:text-4xl'></i>
						</a>
						<a href='isaiahpaget@gmail.com' aria-label="isaiahpaget@gmail.com" target='_blank'>
							<i className='fa-solid fa-envelope duration-100 hover:text-4xl'></i>
						</a>
					</div>
					<FormComponent handleSubmit={props.handleSubmit} />
				</div>
			) : (
				<div className='p-10 mt-32 flex lg:flex-row flex-col justify-center items-center'>
					<img className='h-72' alt='UX/UI' src='/images/UXUI.gif' />
				</div>
			)}
		</section>
	);
}

export default ContactComponent;
