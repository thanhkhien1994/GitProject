function creatObject() {
    add.innerHTML = "Thêm";
    if (_name.value && _class.value && _age.value && _mail.value && _address.value) {
        console.log(parseFloat(_age.value) >= 17 && parseFloat(_age.value) <= 50)
        if (parseFloat(_age.value) >= 17 && parseFloat(_age.value) <= 50) {
            objStudents.unshift({
                isName: _name.value,
                isClass: _class.value,
                isAge: _age.value,
                isAddress: _address.value,
                isGender: gender,
                isMail: _mail.value
            });
            localStorage.setItem("savedData", JSON.stringify(objStudents));
            clearValue();
        }
    } else if (!_name.value) {
        _name.style.border = '1px solid red';
        alert('Tên là bắt buộc');
    } else if (!_class.value) {
        _class.style.border = '1px solid red';
        alert('Lớp là bắt buộc');
    } else if (!_age.value) {
        _age.style.border = '1px solid red';
        alert('Tuổi là bắt buộc');
    } else if (!_address.value) {
        _address.style.border = '1px solid red';
        alert('Địa chỉ là bắt buộc');
    } else if (!_mail.value) {
        _mail.style.border = '1px solid red';
        alert('Email là bắt buộc');
    }
    showListStudent();
}
