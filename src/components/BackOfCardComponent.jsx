import react from "react";

function BackOfCard(props) {
	return (
		<div className='flip-card-back border-2 text-light-black dark:text-white border-light-black dark:border-secondary flex flex-col rounded p-2 bg-secondary'>
			<p className='text-4xl font-bold'>{props.title}</p>
			<div className='py-2'>
				<p>{props.description}</p>
			</div>
			<div className='mt-auto'>
				{props.url === "" ? null : (
					<a
						target='_blank'
						className='flex w-1/6 bg-white font-bold transition duration-700 hover:bg-whitesmoke h-100 justify-center flip-card-demo text-light-black dark:text-secondary p-2 rounded'
						href={props.url}
					>
						Demo
					</a>
				)}
			</div>
		</div>
	);
}

export default BackOfCard;
