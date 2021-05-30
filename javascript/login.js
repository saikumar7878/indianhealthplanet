// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhAG_F-pccfheM__b_wK1S9EakuUls-6c",
    authDomain: "medical-89c64.firebaseapp.com",
    projectId: "medical-89c64",
    storageBucket: "medical-89c64.appspot.com",
    messagingSenderId: "1065978868113",
    appId: "1:1065978868113:web:b8f05c79d6869ab375aa30"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function SignUp(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    if(password == password2) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
            database.ref('User/'+firebase.auth().currentUser.uid).set({
                email:email,
                password:password,
                name: username,
            });
            alert("Sign in successful, Log in to continue.. 🙂");
            }).catch((error) => {
                console.log(error);
                alert(error.message);
            });
    }
    else{
        alert("password didnt match");
        document.querySelector('.form').reset();
    }
}

function LogOut(){
    firebase.auth().signOut();
}

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email.length!=0 && password.length!=0){
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            firebase.database().ref('User/'+firebase.auth().currentUser.uid).get().then(function(snapshot) {
                if (snapshot.exists()){
                    username = snapshot.val()['name'];
                    sessionStorage.setItem("username", username);
                    window.location.href = './home.html';
                }
                }).catch(function(error) {
                    console.error(error);
                    alert(error.message);
                });
            }).catch(function(error) {
            // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert("wrong password 🤕");
                }
                alert(error.message);
          });        
    }else{
        alert("enter valid credentials...... 😶");
    }   
}