import React from "react";

function HeaderComponent(props) {
	return (
		<nav className='z-20 fixed w-full flex gap-8 flex-row p-9'>
			<a
				tag='cypher'
				data-value='Isaiah Paget'
				className='text-2xl mr-auto rounded-sm p-1 bg-gray-light'
				href='/'
			>
				Isaiah Paget
			</a>
			<a tag='cypher' data-value='Contact' className='text-2xl p-1'>
				Contact
			</a>
			<a
				tag='cypher'
				data-value='Github'
				className='text-2xl p-1'
				href='https://github.com/isaiahpaget'
			>
				Github
			</a>
		</nav>
	);
}

export default HeaderComponent;
