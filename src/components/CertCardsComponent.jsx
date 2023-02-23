import react from "react";
import certs from "../data/certs";

function CertCards(props) {
	const Cards = (props) => {
		return certs.map((cert) => {
			return (
				<section className='flex relative flex-col shadow-lg card-trick p-3 rounded-lg bg-gradient-to-r from-secondary to-secondary dark:from-tertiary dark:to-tertiary hover:-translate-y-3 duration-700'>
					<a href={cert.url} target='_blank'>
						<header className='text-lg text-light-black dark:text-white font-bold mb-3'>{cert.title}</header>
						<img
							className='rounded-lg border-secondary border-2 dark:border-secondary dark:border-2 card-picture'
							src={cert.image}
						/>
						<p className='mt-2 text-light-black dark:text-gray-light whitespace-pre-wrap'>{cert.description}</p>
					</a>
				</section>
			);
		});
	};

	return (
		<section>
			<header className='flex justify-center text-white drop-shadow-lg font-bold text-4xl hover:-translate-y-1 duration-700'>
				<p className='gradient-text text-secondary'>Certification</p>
			</header>
			<section className='flex p-10 lg:justify-center card-list overflow-x-scroll'>
				<Cards />
			</section>
		</section>
	);
}

export default CertCards;
