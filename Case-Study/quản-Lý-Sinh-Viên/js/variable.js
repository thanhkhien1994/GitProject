let objStudents = localStorage.getItem("savedData") ? JSON.parse(localStorage.getItem("savedData")) : JSON.stringify("Rỗng");
localStorage.setItem("savedData", JSON.stringify(objStudents));

let gender = "Nam";
let _name = document.getElementById("name");
let _class = document.getElementById("class");
let _age = document.getElementById("age");
let _address = document.getElementById("address");
let _mail = document.getElementById("mail");
let add = document.getElementById("add");
let search = document.getElementById('search');
let display = document.getElementById('display');