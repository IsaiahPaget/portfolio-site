// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBaz5GyoC3uH3cK78nnP91F2GX_flGswkI",
	authDomain: "portfolio-site-fdd81.firebaseapp.com",
	projectId: "portfolio-site-fdd81",
	storageBucket: "portfolio-site-fdd81.appspot.com",
	messagingSenderId: "384260227468",
	appId: "1:384260227468:web:0ccae1fd649a3f217516a9",
	measurementId: "G-GHR2K5HDFY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const analytics = getAnalytics(app);

export async function sendEmail(event) {
	event.preventDefault();

	const name = await event.target.elements.name.value;
	const email = await event.target.elements.email.value;
	const body = await event.target.elements.message.value;

	try {
		await addDoc(collection(db, "mail"), {
			to: "isaiahpaget@gmail.com",
			message: {
				subject: `Bachelor Suite Skateboards`,
				html: `
					<h1>${name}</h1>
					<h2>
					${email}
					</h2>
					<p>${body}</p>
			  `,
			},
		});
	} catch (error) {
		console.error(error);
	}
}
