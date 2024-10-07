import React from "react";

function HeaderComponent() {
	function scrollToContact() {
		const contact = document.getElementById("contact");
		contact.scrollIntoView();
	}

	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	return (
		<nav className='z-20 sticky pointer-events-none top-0 w-full flex lg:gap-8 flex-row p-9'>
			<a
				role='button'
				onClick={scrollToTop}
				tag='cypher'
				data-value='/Go to top'
				className='font-bold mr-auto lg:w-28 p-3 border bg-gray-light pointer-events-auto crosshair'
			>
				/Isaiah Paget
			</a>
			<a
				role='button'
				tag='cypher'
				data-value='/LinkedIn'
				className='font-bold p-3 lg:w-20 pointer-events-auto crosshair'
				href='https://linkedin.com/in/isaiahpaget'
				target="_blank"
			>
				/LinkedIn
			</a>
			<a
				role='button'
				tag='cypher'
				data-value='/Github'
				className='font-bold p-3 lg:w-20 max-sm:hidden pointer-events-auto crosshair'
				href='https://github.com/isaiahpaget'
				target="_blank"
			>
				/Github
			</a>
			<a
				role='button'
				onClick={scrollToContact}
				tag='cypher'
				data-value='/Contact'
				className='font-bold p-3 lg:w-20 max-sm:hidden pointer-events-auto crosshair'
			>
				/Contact
			</a>
		</nav>
	);
}

export default HeaderComponent;
