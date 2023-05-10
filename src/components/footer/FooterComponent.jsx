import React from 'react';
import "./footer.css"
import ButtonComponent from '../button/ButtonComponent';

function FooterComponent(props) {


    return (
        <footer className='z-20 p-10 flex gap-4 flex-col fixed bottom-0'>
            <ButtonComponent  name={"/ skills"}/>
            <ButtonComponent name={"/ projects"}/>
            <ButtonComponent name={"/ certification"}/>
        </footer>
    );
}

export default FooterComponent;