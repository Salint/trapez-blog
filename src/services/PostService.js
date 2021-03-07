import firebase from "../services/FirebaseService";

const getPosts = async () => {

	let posts = [];

	try {
		const results = await firebase.firestore().collection("mods").orderBy("date", "desc").get();
		const docs = results.docs;
		
		for(let i = 0; i < docs.length; i++) {

			const imageURL = await firebase.storage().ref(docs[i].id + "/image." + docs[i].get("imageExtension")).getDownloadURL();
			const modLink = await firebase.storage().ref(docs[i].id + "/file." + docs[i].get("modExtension")).getDownloadURL();
			
			posts.push({
				title: docs[i].get("title"),
				description: docs[i].get("description"),
				date: new Date(docs[i].get("date").seconds * 1000),
				image: imageURL,
				file: modLink
			});

		}

	}
	catch (error) {
		throw error;

	} finally {
		return posts;

	}

}

export default getPosts;