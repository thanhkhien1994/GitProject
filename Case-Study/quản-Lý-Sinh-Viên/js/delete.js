function deleteStudent(i) {
    let exitNow = confirm('Hành động này sẽ xóa vĩnh viễn và không thể khôi phục bạn chắc chứ!');
    if(exitNow){
        objStudents.splice(i, 1);
        localStorage.setItem("savedData", JSON.stringify(objStudents));
    }
    showListStudent();
}