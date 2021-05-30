var fname = sessionStorage.getItem("fname", fname);
var age = sessionStorage.getItem("age", age);
var address = sessionStorage.getItem("address", address);
var place = sessionStorage.getItem("place", place);
var phone = sessionStorage.getItem("phone", phone);
var docname = sessionStorage.getItem("docname", docname);
var time = sessionStorage.getItem("time", time);
var date = sessionStorage.getItem("date", date);
var dept = sessionStorage.getItem("dept", dept);

document.getElementById('name').innerHTML = fname;
document.getElementById('age').innerHTML = age;
document.getElementById('address').innerHTML = address;
document.getElementById('place').innerHTML = place;
document.getElementById('phone').innerHTML = phone;
document.getElementById('docname').innerHTML = docname;
document.getElementById('dept').innerHTML = dept;
document.getElementById('date').innerHTML = date;
document.getElementById('time').innerHTML = time;

function Print(){ 
    var printContents = document.getElementById('container').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}