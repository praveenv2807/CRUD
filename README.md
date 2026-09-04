CREATE-READ-UPDATE-DELETE Created using html,css and javaScript for a student management webpage.
##https://praveenv2807.github.io/CRUD/ 

i Used a simole html tags to create this webpage
<!DOCTYPE html>
<html>
<head>
<title>Student Management System</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">
    <h1>Student Management System</h1>

    <form id="studentForm">
        <input type="hidden" id="studentId">

        <input type="text" id="name" placeholder="Student Name" required>
        <input type="number" id="Roll Number" placeholder="Roll Number" required>
        <input type="text" id="course" placeholder="Course" required>

        <button type="submit">Save Student</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Course</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="studentList"></tbody>
    </table>
</div>

<script src="script.js"></script>

</body>
</html>

