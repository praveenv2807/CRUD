let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

function displayStudents() {
  studentList.innerHTML = "";

  students.forEach((student, index) => {
    studentList.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.RollNumber}</td>
            <td>${student.course}</td>
            <td>
                <button class="editBtn" onclick="editStudent(${index})">Edit</button>
                <button class="deleteBtn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
  });

  localStorage.setItem("students", JSON.stringify(students));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("studentId").value;
  const name = document.getElementById("name").value;
  const RollNumber = document.getElementById("Roll Number").value;
  const course = document.getElementById("course").value;

  if (id === "") {
    students.push({ name, RollNumber, course });
  } else {
    students[id] = { name, RollNumber, course };
  }

  form.reset();
  document.getElementById("studentId").value = "";
  displayStudents();
});

function editStudent(index) {
  document.getElementById("studentId").value = index;
  document.getElementById("name").value = students[index].name;
  document.getElementById("Roll Number").value = students[index].RollNumber;
  document.getElementById("course").value = students[index].course;
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

displayStudents();
