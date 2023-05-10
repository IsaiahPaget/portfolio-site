import React from 'react';
import './button.css'

function ButtonComponent({name}) {
    return (
        <button data-value={name} tag="cypher" className='button p-3 font-bold border border-l-gray-light hover:border-gray-dark text-left duration-300 hover:bg-gray-light hover:text-gray-dark text-gray-light rounded-sm bg-gray-dark'>{name}</button>
    );
}

export default ButtonComponent;