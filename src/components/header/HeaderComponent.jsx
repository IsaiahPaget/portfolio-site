import React from "react";

function HeaderComponent(props) {

	function scrollToContact() {
		window.scrollTo(0, 4650)
	}

	function scrollToTop() {
		window.scrollTo(0, 0)
	}

	return (
		<nav className='z-20 sticky top-0 w-full flex lg:gap-8 flex-row p-9'>
			<a
				onClick={scrollToTop}
				tag='cypher'
				data-value='Isaiah Paget'
				className='text-2xl mr-auto rounded-sm p-1 bg-gray-light'
			>
				Isaiah Paget
			</a>
			<a onClick={scrollToContact} tag='cypher' data-value='Contact' className='text-2xl p-1'>
				Contact
			</a>
			<a
				tag='cypher'
				data-value='Github'
				className='text-2xl p-1 max-sm:hidden'
				href='https://github.com/isaiahpaget'
			>
				Github
			</a>
		</nav>
	);
}

export default HeaderComponent;
