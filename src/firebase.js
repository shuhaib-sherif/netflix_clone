import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCTu6Uj9ARm9ntDASRXcZwcbMPH3Msyopw",
    authDomain: "netflix-clone-20e85.firebaseapp.com",
    projectId: "netflix-clone-20e85",
    storageBucket: "netflix-clone-20e85.appspot.com",
    messagingSenderId: "624173863206",
    appId: "1:624173863206:web:abd3fa10a3bc141b96b1e7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export {auth}
  export default db