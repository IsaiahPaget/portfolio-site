import React from "react";
import "./button.css";

function ButtonComponent(props) {
	return (
		<a
			onClick={(e) => {
				if (props.Function()) props.Function(e); else null;
			}}
            role="button"
			className={`lg:w-40 crosshair p-3 border text-left duration-300 pointer-events-auto ${props.className}`}
			tag='cypher'
			data-value={props.name}
			href={props.href}
			target='_blank'
		>
			{props.name}
		</a>
	);
}

export default ButtonComponent;
