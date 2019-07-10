console.log("connected")

firebase.initializeApp({
    apiKey: "AIzaSyAO6lUZstiSf_siMPd91vbUopvzadeRrLw",
    authDomain: "basketball-analyst-ad924.firebaseapp.com",
    databaseURL: "https://basketball-analyst-ad924.firebaseio.com",
    projectId: "basketball-analyst-ad924",
    storageBucket: "",
    messagingSenderId: "302991295174",
    appId: "1:302991295174:web:f551b5124a916f43"
});

const auth = firebase.auth();

const txtUsername = document.getElementById("username");
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

btnLogin.addEventListener("click", e => {
    e.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;


    const userInfo = {email, password}

    // $.post("/auth/login", userInfo, function(data) {
    //     if(data.user) {
    //         const promise = auth.signInWithEmailAndPassword(data.email, data.password);
    //         window.location.href = '/dashboard';
    //     }
    // })

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.error(e.message));
    // window.location.href = '/dashboard';
})

btnSignUp.addEventListener("click", e => {
    e.preventDefault();
    // check for real email
    const email = txtEmail.value;
    const password = txtPassword.value;
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.error(e.message));
})

btnLogout.addEventListener("click", e => {
    auth.signOut();
    // $(btnLogout).addClass("d-none");
    // $(btnLogin).removeClass("d-none");
})

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.uid);
        // $(btnLogout).removeClass("d-none");
    } else {
        console.log("not logged in");
        // $(btnLogin).addClass("d-none");
    }
})
