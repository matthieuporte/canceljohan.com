var domCounter = document.getElementById("valCounter");


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCM6Vi_p2kDC7oSv09JYkv3oWvU0S3-a0",
    authDomain: "canceljohan-314af.firebaseapp.com",
    databaseURL: "https://canceljohan-314af-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "canceljohan-314af",
    storageBucket: "canceljohan-314af.appspot.com",
    messagingSenderId: "1089186343487",
    appId: "1:1089186343487:web:9bf7a94dbf0b88f018668a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, onValue,increment } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js';

const db = getDatabase();
const countRef = ref(db, '/count/count');
onValue(countRef, (snapshot) => {
    const data = snapshot.val();
    if(data > 1 || data < -1){
        domCounter.innerHTML = data;
        if (data < 0){
            document.getElementById("imageJojo").style.backgroundImage = 'url("./src/images/johan.jpg")';
        }
        else{
            document.getElementById("imageJojo").style.backgroundImage = 'url("./src/images/johanCanceled.jpg")';
        }
    }

});

const increase = async () => {
    await set(ref(db, `/count`), {
        count: increment(1)
    });
}

const decrease = async () => {
    await set(ref(db, `/count`), {
        count: increment(-1)
    });
}

document.getElementById("free").addEventListener("click", decrease);
document.getElementById("cancel").addEventListener("click", increase);

