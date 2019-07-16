// console.log("connected")

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
// const btnLogout = document.getElementById("btnLogout");
let userName;
let userToken;
let userEmail;
let currentUser;

// const userLogin = () => {
//     let userToken = currentUser.uid;
//     let userEmail = currentUser.email;
//     let userInfo = {userToken, userEmail, userName};
//     console.log(userToken);
//     console.log(userEmail);
    
//     $.post("/auth/login", userInfo, function(data) {
//         console.log(data)
//         if(data) {
//             $("#btnLogout").removeClass("d-none");
//             let userToken = data;
//             window.location.href = '/:'+ userToken;
//         } else {
//             window.location.href = '/search';
//         }
//     })
// }

document.addEventListener("click", async event => {
    // console.log("auth.js sees a click");
    if (event.target.matches("#btnLogin")) {
        console.log("auth.js sees #btnLogin");
        event.preventDefault();
        let email = txtEmail.value;
        let password = txtPassword.value;
        userName = txtUsername.value;
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.error(e.message));
        // promise.then(currentUser = auth.currentUser);
        // console.log(currentUser)
        // await recordUser();
        // userLogin();
    } else if (event.target.matches("#btnLogout")) {
        console.log("auth.js sees #btnLogout");
        auth.signOut();
        $("#btnLogout").addClass("d-none");
        // window.location.href = '/auth/logout';
    } else if (event.target.matches("#btnSignUp")) {
        console.log("auth.js sees #btnSignUp");
        event.preventDefault();
        // check for real email
        let email = txtEmail.value;
        let password = txtPassword.value;
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.error(e.message));
    }
})

// btnLogin.addEventListener("click", e => {
//     e.preventDefault();
//     const email = txtEmail.value;
//     const password = txtPassword.value;

//     const promise = auth.signInWithEmailAndPassword(email, password);
//     promise.catch(e => console.error(e.message));
//     // window.location.href = '/dashboard';
// })

// btnSignUp.addEventListener("click", e => {
//     e.preventDefault();
//     // check for real email
//     const email = txtEmail.value;
//     const password = txtPassword.value;
//     const promise = auth.createUserWithEmailAndPassword(email, password);
//     promise.catch(e => console.error(e.message));
// })

// btnLogout.addEventListener("click", e => {
//     auth.signOut();
//     // $(btnLogout).addClass("d-none");
//     // $(btnLogin).removeClass("d-none");
// })

// const recordUser = async (user) => {  
    auth.onAuthStateChanged(user => {        
        if (user) {
            if (window.location.pathname !== '/') {return};
        console.log(user.uid);
        console.log(user.email);
        let userToken = user.uid;
        let userEmail = user.email
        let userInfo = {userToken, userEmail, userName};
        // $("#btnLogout").removeClass("d-none");
        
        $.post("/auth/login", userInfo, function(data) {
                // some code
            console.log(data)
            if(data) {
                console.log("server responded with found data");
                let userToken = data;
                setTimeout((window.location = '/dashboard/:'+ userToken), 500)
                
            } else {
                console.log("server could not find data");
                window.location = '/search';
            }
        })
        // $(btnLogin).addClass("d-none");
        } else {
            console.log("not logged in");
            // $("#btnLogout").addClass("d-none");
            // $(btnLogin).removeClass("d-none");
        }
    })
// }
