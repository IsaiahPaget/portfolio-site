import { motion } from "framer-motion";
import BackDrop from "./BackDropComponent";

function ContactModal(props) {
	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0,
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 25,
				stiffness: 500,
			},
		},
		exit: {
			y: "100vh",
			opacity: 0,
		},
	};

	return (
		<BackDrop onclick={props.onModalClick}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className='m-auto p-8 rounded-lg modal bg-gradient-to-r from-whitesmoke to-white dark:from-light-black dark:to-gray-dark'
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<div className='flex'>
					<h1 className=' font-extrabold text-secondary'>Email Me</h1>
					<button
						onClick={props.onModalClick}
						className='ml-auto font-extrabold text-secondary'
					>
						Close
					</button>
				</div>
				<form className='flex-col flex' id='contact' onSubmit={props.handlesubmit}>
					<input
						type='text'
						id='name'
						className='mt-3 rounded p-2 dark:bg-tertiary border-secondary text-secondary border-2'
						placeholder='Enter Your Name'
						required
					></input>
					<input
						required
						type='email'
						className='mt-3 rounded p-2 dark:bg-tertiary border-secondary text-secondary border-2'
						placeholder='Enter Your Email'
						id='email'
					></input>
					<textarea
						required
						type='text'
						rows='5'
						className=' mt-3 rounded p-2 dark:bg-tertiary border-secondary text-secondary border-2'
						placeholder='Message'
						id='message'
					></textarea>
					<div className='flex justify-center'>
						<button
							type='sumbit'
							className='font-extrabold p-2 mt-3 rounded text-white bg-secondary shadow-lg'
						>
							Submit
						</button>
					</div>
				</form>
			</motion.div>
		</BackDrop>
	);
}

export default ContactModal;
