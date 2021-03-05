import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyArpGBNkYwd1BV9JUL6AS9taDgG1SDh7xE",
	authDomain: "trapez-blog.firebaseapp.com",
	projectId: "trapez-blog",
	storageBucket: "trapez-blog.appspot.com",
	messagingSenderId: "244429224834",
	appId: "1:244429224834:web:aced58b00349e9f296ad9b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;