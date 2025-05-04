
function showList() {
    let row = ''
    for (let i = 0; i < students.length; i++) {
        let st = students[i];
        row +=
            ` <tr>
                <td>${st.id}</td>
                <td>${st.name}</td>
                <td>${st.dateborn}</td>
                <td>${st.gender}</td>
                <td>${st.grade}</td>
                <td><img src="${st.img}" width="60" alt="ảnh"></td>
                <td><button class="delete-btn" onclick="deleteStudents(${i})">Xóa</button>
                <button class="edit-btn"  onclick="editStudents(${i})">Chỉnh Sửa</button>
                </td>
              </tr> 
            `
    }
    document.getElementById('table_body').innerHTML = row;
}
window.onload = function() {
    showList();
}

function add() {

    let id = document.getElementById('uid').value.trim();
    let name = document.getElementById('name').value.trim();
    let gender = document.getElementById('gender').value.trim();
    let dateborn = document.getElementById('dateborn').value.trim();
    let img = document.getElementById('img').value.trim();
    let grade = document.getElementById('grade').value.trim();

    if (!id || !name || !gender || !dateborn || !img || !grade) {
        alert('Vui lòng nhập đầy đủ thông tin ')
        return;
    }
    let idExists = students.some(student => student.id === id);
    if (idExists) {
        alert('ID đã tồn tại. Vui lòng nhập ID khác!');
        return;
    }

    let newStudent = new Student(id, name, dateborn, gender, grade , img );
    students.push(newStudent);
    showList()
    clear()
}



function clear() {
    document.getElementById('uid').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('dateborn').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('img').value = '';
}
function deleteStudents(index) {
    if(confirm('Xóa học viên này')) {
        students.splice(index, 1);
        showList();
    }
}
let editingIndex = -1;
function editStudents(index) {
    let st = students[index]
    editingIndex = index;
    document.getElementById('uid').value = st.id;
    document.getElementById('name').value = st.name;
    document.getElementById('gender').value = st.gender;
    document.getElementById('dateborn').value = st.dateborn;
    document.getElementById('grade').value = st.grade;
    document.getElementById('img').value = st.img;
}
function save() {
    if (editingIndex >= 0) {
        students[editingIndex].changeInfo(
            document.getElementById('uid').value,
            document.getElementById('name').value,
            document.getElementById('gender').value,
            document.getElementById('dateborn').value,
            document.getElementById('grade').value,
            document.getElementById('img').value,
        );
    }
    showList();
    clear()
}
    const defaultStudents = [
        new Student('001', 'Đỗ Đình Hiếu', '29/02/2002', 'Nam', 'A02', 'anhthenam.jpg'),
        new Student('002', 'Nguyễn Thị Thanh', '14/03/2003', 'Nữ', 'A00', 'anhtheca.jpg'),
        new Student('003', 'Nguyễn Đắc Thắng', '30/09/2005', 'Nam', 'C01', 'anhthes3.jpg')
    ];
function reset() {
    if (confirm('Chắc chắn khôi phục dữ liệu ?')) {
    students = [...defaultStudents];
    showList();
    alert('Khôi phục dữ liệu thành công !!')
    }
}