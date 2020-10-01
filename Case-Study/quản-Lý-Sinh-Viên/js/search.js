function searchStudent() {
    for (let i = 0; i < objStudents.length; i++) {
        let a = objStudents[i].isName.toUpperCase().includes(`${search.value.toUpperCase()}`);
        if (a) {
            display.innerHTML = `Từ khóa: ${search.value}<br> Tên: ${objStudents[i].isName} <br> STT: ${i + 1}<br>SĐT/Mail: ${objStudents[i].isMail}`;
        }
        if (!search.value) {
            display.innerHTML = "Tìm kiếm ...";
        }
    }
}
searchStudent();