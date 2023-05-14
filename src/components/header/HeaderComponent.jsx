import React from "react";

function HeaderComponent(props) {
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
				data-value='Isaiah Paget'
				className='font-bold mr-auto rounded-sm p-3 border bg-gray-light pointer-events-auto'
			>
				Isaiah Paget
			</a>
			<a
				role='button'
				onClick={scrollToContact}
				tag='cypher'
				data-value='Contact'
				className='font-bold p-3 pointer-events-auto'
			>
				Contact
			</a>
			<a
				role='button'
				tag='cypher'
				data-value='Github'
				className='font-bold p-3 max-sm:hidden pointer-events-auto'
				href='https://github.com/isaiahpaget'
			>
				Github
			</a>
		</nav>
	);
}

export default HeaderComponent;
