import react, { useState } from "react";
import { motion } from "framer-motion";

function NavBar(props) {
	return (
		<nav className='p-5'>
			<div className='flex max-w-7xl mx-auto'>
				<div className='dark:text-white text-light-black font-bold text-lg flex-grow dark:hover:text-secondary hover:-translate-y-1 duration-700'>
					<a href='/'>Hey, I am Isaiah!</a>
				</div>

				<div className='dark:text-white text-light-black font-bold text-lg justify-self-center dark:hover:text-secondary hover:-translate-y-1 duration-700'>
					<a href='/#' onClick={props.onModalClick}>Contact</a>
				</div>
				<div className='dark:text-white text-light-black font-bold text-lg justify-self-center ml-8 dark:hover:text-secondary hover:-translate-y-1 duration-700'>
					<a href='https://github.com/IsaiahPaget' target='_blank' rel='noreferrer'>
						GitHub
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
