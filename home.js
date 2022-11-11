// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

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


var inpTodo = document.getElementById("inpTodo")
var parent = document.getElementById("parent")
var arr = []

function renderUL() {
    parent.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        parent.innerHTML += `<li>${arr[i].task}<br><span class='label'>${arr[i].date}<span></li>`;
    }
}



window.addTodo = function (e) {
    e.preventDefault()
    var obj = {
        task: inpTodo.value,
        date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`,
        user: "ABC"
    }

    console.log(obj)

    arr.push(obj)
    renderUL()

    inpTodo.value = "";
}

window.logout = function () {
    signOut(auth)
        .then(function () {
            console.log("Logout Successfully");
            // window.location.href = "login.html";
        })
        .catch(function (err) {
            console.log(err);
        });
};

function checkAuthentication() {
    onAuthStateChanged(auth, function (user) {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out
            // ...
            window.location.href = "login.html";
        }
    })


}

checkAuthentication();
