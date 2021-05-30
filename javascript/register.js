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

function Submit(){
    var fname = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var place = document.getElementById("place").value;
    var phone = document.getElementById("phone").value;
    var docname = document.getElementById("docname").value;
    var dept = document.getElementById("dptname").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if (fname.length!=0 && age.length!=0 && address.length!=0 && phone.length!=0 && place.length!=0 && docname.length!=0 && dept.length!=0 && date.length!=0 && time.length!=0) {
        database.ref('Registration-Information/'+phone).set({
            fname:fname,
            age:age,
            address:address,
            place:place,
            phone:phone,
            docname:docname,
            dept:dept,
            date:date,
            time:time,
        });
        sessionStorage.setItem("fname", fname);
        sessionStorage.setItem("age", age);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("place", place);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("docname", docname);
        sessionStorage.setItem("time", time);
        sessionStorage.setItem("date", date);
        sessionStorage.setItem("dept", dept);
        alert("registered succesfully");
        setTimeout(() => {
            window.location.href = './invoice.html';
        },3000);
    }
    else{
        alert("Please enter all the details.. 😶");
    }
}

firebase.auth().onAuthStateChanged(function(user){
    if (user){
        var username = sessionStorage.getItem("username");
        document.getElementById('username').innerHTML = username;
    }
});