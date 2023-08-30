const students = [
  {
    email: "huong@gmail.com",
    phone: "079513651222",
    fullname: "le thi dieu huong",
    address: "quang tri",
    gender: "female",
  },
  {
    email: "vietvo@gmail.com",
    phone: "0379456123",
    fullname: "tran duy hieu",
    address: "quang nam",
    gender: "male",
  },
  {
    email: "thai@gmail.com",
    phone: "0379456123",
    fullname: "luu hong thai",
    address: "hai phong",
    gender: "male",
  },
];
const tbodyElement = document.querySelector("#studentList");
render();
function render() {
  let html = "";
  students.filter(function (student, index) {
    html += `<tr>
            <td>${index + 1}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.gender}</td>
            <td><button onclick="handleDelete(${index})">Delete</button><button onclick="handleEdit(${index})">Edit</button></td>
          </tr>`;
  });
  tbodyElement.innerHTML = html;
}
function handleDelete(index) {
  students.splice(index, 1);
  render();
}

//validate form
const formEl = document.querySelector("#studentForm");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const hometown = document.querySelector("#hometown");
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const student = {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    hometown: hometown.value,
    gender: "male", // Giới tính đang được cố định là "nam"
  };

  students.push(student);
  console.log(students);
  render();
});

// function validateEmail(email) {
//   return true;
// }

// function validatePhone(phone) {
//   return true;
// }

// function displayStudents() {
//   const table = document.getElementById("studentTable");
//   table.innerHTML = `
//         <tr>
//             <th>Họ và tên</th>
//             <th>Email</th>
//             <th>Số điện thoại</th>
//             <th>Quê quán</th>
//             <th>Giới tính</th>
//             <th>Thao tác</th>
//         </tr>
//     `;

//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const row = table.insertRow();

//     row.innerHTML = `
//             <td>${student.fullName}</td>
//             <td>${student.email}</td>
//             <td>${student.phone}</td>
//             <td>${student.hometown}</td>
//             <td>${student.gender}</td>
//             <td><button onclick="deleteStudent(${i})">Xoá</button></td>
//         `;
//   }
// }

// function clearForm() {
//   document.getElementById("fullName").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("phone").value = "";
//   document.getElementById("hometown").value = "";
//   document.getElementById("gender").value = "Nam";
// }

// displayStudents();
