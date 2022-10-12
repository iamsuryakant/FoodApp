import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {

    apiKey: "AIzaSyBHtsFweW-loCc-TLdePvaPaXTY965aZ0c",

    authDomain: "foodgrid-ead20.firebaseapp.com",

    databaseURL: "https://foodgrid-ead20-default-rtdb.firebaseio.com",

    projectId: "foodgrid-ead20",

    storageBucket: "foodgrid-ead20.appspot.com",

    messagingSenderId: "391714381266",

    appId: "1:391714381266:web:0f5e2160f6383882f77c0b"

};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }; 