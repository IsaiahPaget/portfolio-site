import React from "react";

function CharactersComponent(props) {
	return (
		<div className="my-40 lg:mb-40">
			<div className='flex justify-center p-10'>
				<div className='relative gap-8 lg:left-44 '>
					<img alt="Wizard Character" className=' lg:h-72' src='/images/wizard.gif' />
				</div>
			</div>
            <div className="p-10 mb-14 flex justify-center">
                <a href="https://instagram.com/shea.kotylak" target="_blank">Character by @shea.kotylak ^</a>
            </div>
		</div>
	);
}

export default CharactersComponent;
