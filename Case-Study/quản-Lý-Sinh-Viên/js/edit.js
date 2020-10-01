function editStudent(i) {
    alert('Dữ liệu có thể bị mất');
    let exitNow = confirm("bạn có muốn tiếp tục");
    if (exitNow) {
        _name.value = objStudents[i].isName;
        _age.value = objStudents[i].isAge;
        _address.value = objStudents[i].isAddress;
        _mail.value = objStudents[i].isMail;
        _class.value = objStudents[i].isClass;
        objStudents.splice(i, 1);
        localStorage.setItem("savedData", JSON.stringify(objStudents));
        add.innerHTML = "Sửa";
    }
    showListStudent();
}