import React from 'react';
import "./footer.css"
import ButtonComponent from '../button/ButtonComponent';

function FooterComponent(props) {

    function scrollToSkills() {
        window.scrollTo(0,850)
    }
    function scrollToProjects() {
        window.scrollTo(0,1760)
    }
    function scrollToCerts() {
        window.scrollTo(0,3675)
    }


    return (
        <footer className='z-20 p-10 flex gap-4 flex-col fixed bottom-0 max-md:hidden'>
            <ButtonComponent scrollFunction={scrollToSkills} name={"/ skills"}/>
            <ButtonComponent scrollFunction={scrollToProjects} name={"/ projects"}/>
            <ButtonComponent scrollFunction={scrollToCerts} name={"/ certification"}/>
        </footer>
    );
}

export default FooterComponent;