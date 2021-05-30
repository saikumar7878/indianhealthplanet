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

function SelectAllData(){
    firebase.database().ref('Registration-Information').on('value',
    function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var name = CurrentRecord.val().fname;
                var age = CurrentRecord.val().age;
                var address = CurrentRecord.val().address;
                var place = CurrentRecord.val().place;
                var phone = CurrentRecord.val().phone;
                var docname = CurrentRecord.val().docname;
                var dept = CurrentRecord.val().dept;
                var date = CurrentRecord.val().date;
                var time = CurrentRecord.val().time;
                AddItemsToTable(name,age,address,place,phone,docname,dept,date,time);
            }
        );
    });
}

window.onload = SelectAllData;
var sno=0;

function AddItemsToTable(name,age,address,place,phone,docname,dept,date,time){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    td1.innerHTML = ++sno;
    td2.innerHTML = name;
    td3.innerHTML = age;
    td4.innerHTML = address;
    td5.innerHTML = place;
    td6.innerHTML = phone;
    td7.innerHTML = docname;
    td8.innerHTML = dept;
    td9.innerHTML = date;
    td10.innerHTML = time;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    tbody.appendChild(trow);
}
