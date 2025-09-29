import "./contact.css";
import FormComponent from "../form/FormComponent";

function ContactComponent(props) {
	return (
		<section className='h-full pb-8' id="contact">
				<div className='p-8 flex flex-col text-3xl text-pink items-center gap-3'>
					<div className="flex gap-3 h-8">
						<a href='https://linkedin.com/in/isaiahpaget' aria-label="Linkedin.com" target='_blank' className="text-4xl">
							Linkedin
						</a>
						<a href='https://github.com/isaiahpaget' aria-label="Github.com" target='_blank' className="text-4xl">
							Github
						</a>
						<a href='isaiahpaget@gmail.com' aria-label="isaiahpaget@gmail.com" target='_blank' className="text-4xl">
							isaiahpaget@gmail.com
						</a>
					</div>
				</div>
		</section>
	);
}

export default ContactComponent;
