import firebase from 'firebase/app'
import 'firebase/firestore'

//.then fires when collection complete
db.collection('users').get().then((snapshot)=>{
	snapshot.docs.forEach(doc =>{
		console.log(doc);	
	})
}); 
