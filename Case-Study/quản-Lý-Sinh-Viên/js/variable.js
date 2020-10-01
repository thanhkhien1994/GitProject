let objStudents = localStorage.getItem("savedData") ? JSON.parse(localStorage.getItem("savedData")) : JSON.stringify(students);
let students = [
    {
        isName: "Nguyễn Thanh Khiên" ,
        isClass: "C0620K1",
        isAge: 22,
        isAddress: "Mỹ đình, Hà nội",
        isGender: "Nam",
        isMail: "Thanhkhien1994@gmail.com/0335915359"
    }
]
let gender = "Nam";
let _name = document.getElementById("name");
let _class = document.getElementById("class");
let _age = document.getElementById("age");
let _address = document.getElementById("address");
let _mail = document.getElementById("mail");
let add = document.getElementById("add");
let search = document.getElementById('search');
let display = document.getElementById('display');