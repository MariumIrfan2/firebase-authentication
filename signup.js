// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr4akFNWZHU4mFeKfVVvoTwGY5BwTaxYk",
    authDomain: "fir-auth-afc9a.firebaseapp.com",
    projectId: "fir-auth-afc9a",
    storageBucket: "fir-auth-afc9a.appspot.com",
    messagingSenderId: "398691867865",
    appId: "1:398691867865:web:43a83b4ee1c59e72e4f2c8",
    measurementId: "G-QXVR8YGWHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// JS code strat form here...
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
    e.preventDefault()
    var obj = {
        firstname: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            console.log(success.user.uid)
        }).catch(function (err) {
            console.log(err)
        })

    console.log(obj);

};