import firebase from 'firebase';

try{
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGE_SENDER_ID
    };
    firebase.initializeApp(config);
}catch(err){ 
    
}


export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;