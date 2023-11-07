import React from "react";

function CharactersComponent() {
	return (
		<div className="my-40 lg:mb-40">
			<div className='flex justify-center p-8'>
				<div className='relative gap-8 md:left-32 lg:left-44 '>
					<img alt="Wizard Character" className=' aspect-square md:h-72' src='/images/wizard.gif' loading="lazy"/>
				</div>
			</div>
            <div className="p-8 mb-14 flex justify-center">
                <a href="https://instagram.com/shea.kotylak" target="_blank">Character by <span className="link-text font-bold text-pink">@shea.kotylak</span> ^</a>
            </div>
		</div>
	);
}

export default CharactersComponent;
