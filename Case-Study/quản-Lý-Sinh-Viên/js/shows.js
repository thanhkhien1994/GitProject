function showListStudent() {
    let element = `<table border=\"1px\" style=\"border-collapse: collapse;\ margin-top: 200px;">
                    <tr>
                        <th colspan=\"9\"><p>Danh sách học viên CODEGYM HÀ NỘI</p></th>
                    </tr>
                    <tr>
                        <th width=\"35px\"><p>STT</p></th>
                        <th width=\"150px\"><p>Họ tên</p></th>
                        <th width=\"70px\"><p>Lớp</p></th>
                        <th width=\"50px\"><p>Tuổi</p></th>
                        <th width=\"550px\"><p>Địa chỉ</p></th>
                        <th width=\"50px\"><p>Giới tính</p></th>
                        <th width=\"150px\"><p>Email/Số điện thoai</p></th>
                        <th colspan=\"2\" width=\"85px\"><p>Tùy chỉnh</p></th>
                    </tr>`
    for (let i = 0; i < objStudents.length; i++) {
        element +=
            (`<tr>
                <td width="35px"><p>${i + 1}</p></td>
                <td width="250px"><p>${objStudents[i].isName}</p></td>
                <td width="70px"><p>${objStudents[i].isClass}</p></td>
                <td width="50px"><p>${objStudents[i].isAge}</p></td>
                <td width="350px"><p>${objStudents[i].isAddress}</p></td>
                <td width="50px"><p>${objStudents[i].isGender}</p></td>
                <td width="250px"><p>${objStudents[i].isMail}</p></td>
                <td width="40px"><button style="height: 40px" onclick="deleteStudent('${i}');">Xóa</button></td>
                <td width="40px"><button style="height: 40px" onclick="editStudent('${i}');">Sửa</button></td>
            </tr>`);
    }
    element += "</table>";
    document.getElementById('list').innerHTML = (element);
}