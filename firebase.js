// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA155rlBNgC4AIWt4Qkzy5FUZCobxyndgM",
    authDomain: "lsc-app-d7fee.firebaseapp.com",
    projectId: "lsc-app-d7fee",
    storageBucket: "lsc-app-d7fee.appspot.com",
    messagingSenderId: "281989523007",
    appId: "1:281989523007:web:f1cd43d16a07010621fa8a",
    measurementId: "G-SK597PBMBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);




const signupForm = document.querySelector('#signup-form');
const errorPar = document.getElementById('error-par');
const logoutBtn = document.getElementById('logout-btn');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const pConfirm = signupForm['signup-pConfirm'].value;


    // signup the user 
    if (password === pConfirm) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                //   const user = userCredential.user;
                console.log(userCredential);
                errorPar.innerText = 'Your registration was succesfull!!';

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                if (errorCode === 'auth/email-already-in-use') {
                    errorPar.innerText = 'Email address already in use!!  Please Login!';
                    errorPar.style.color = 'red';
                    signupForm['signup-password'].value = '';
                    signupForm['signup-pConfirm'].value = '';
                } else {
                    errorPar.innerText = 'Something went wrong! Try again later!!';
                    signupForm['signup-password'].value = '';
                    signupForm['signup-pConfirm'].value = '';
                }
                // ..
            });
    } else {
        errorPar.innerText = 'Sorry your password did not match!!';
        signupForm['signup-password'].value = '';
        signupForm['signup-pConfirm'].value = '';
    }


});
// logout
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

// signin

const loginForm = document.getElementById('signin-form');
const loginError = document.getElementById('login-error');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            loginError.innerText = '';
            closeModal();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);


            if (errorCode === 'auth/wrong-password') {
                loginError.innerText = 'Sorry! Wrong password!';
            }
            else if (errorCode === 'auth/user-not-found') {
                loginError.innerText = 'User not found!!'
            } else {
                loginError.innerText = 'Something went wrong!!!';
            }
            loginForm.reset();

        });
});

// get data

// db.collection('user').get().then(snapshot => {
//     console.log(snapshot.docs);
// });
const querySnapshot = await getDocs(collection(db, "user"));
function getDb() {
    // userRef = db.collection('user');
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data().currentWeight}kg`);
    //     showUserData(doc.data())
    // });
}

let loggedIn = false;
// Detect auth state 
onAuthStateChanged(auth, user => {
    const loginDiv = document.getElementById('login-div');
    const logoutDiv = document.getElementById('logout-div');
    if (user != null) {
        console.log('logged in!', user.uid);
        getDb();
        loginDiv.classList.add('non-display');
        logoutDiv.classList.remove('non-display');
        loggedIn = true;
    } else {
        console.log('No user');
        loginDiv.classList.remove('non-display');
        logoutDiv.classList.add('non-display');
        loggedIn = false;

    }
});
export { loggedIn };