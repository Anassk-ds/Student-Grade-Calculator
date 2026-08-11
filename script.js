// =============================
// Load Saved Result
// =============================

window.onload = function () {

    const details = localStorage.getItem("studentDetails");
    const result = localStorage.getItem("studentResult");

    if (details) {
        document.getElementById("studentDetails").innerHTML = details;
    }

    if (result) {
        document.getElementById("output").innerHTML = result;
    }
};


// =============================
// Get Subject Grade
// =============================

function getSubjectGrade(mark) {

    if (mark >= 90) {
        return "A+";
    } else if (mark >= 80) {
        return "A";
    } else if (mark >= 70) {
        return "B";
    } else if (mark >= 60) {
        return "C";
    } else if (mark >= 50) {
        return "D";
    } else {
        return "F";
    }
}


// =============================
// Get Performance
// =============================

function getPerformance(mark) {

    if (mark >= 90) {
        return "Outstanding";
    } else if (mark >= 80) {
        return "Excellent";
    } else if (mark >= 70) {
        return "Very Good";
    } else if (mark >= 60) {
        return "Good";
    } else if (mark >= 50) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}


// =============================
// Get Overall Performance
// =============================

function getOverallPerformance(percentage) {

    if (percentage >= 90) {
        return "Outstanding Performance";
    } else if (percentage >= 80) {
        return "Excellent Performance";
    } else if (percentage >= 70) {
        return "Very Good Performance";
    } else if (percentage >= 60) {
        return "Good Performance";
    } else if (percentage >= 50) {
        return "Average Performance";
    } else {
        return "Needs Significant Improvement";
    }
}


// =============================
// Calculate Result
// =============================

function runProgram() {

    const name =
        document.getElementById("name").value.trim();

    const roll =
        document.getElementById("roll").value.trim();

    const course =
        document.getElementById("course").value.trim();

    const age =
        document.getElementById("age").value;


    // =============================
    // Get Marks
    // =============================

    const m1 =
        Number(document.getElementById("m1").value);

    const m2 =
        Number(document.getElementById("m2").value);

    const m3 =
        Number(document.getElementById("m3").value);

    const m4 =
        Number(document.getElementById("m4").value);

    const m5 =
        Number(document.getElementById("m5").value);


    // =============================
    // Basic Validation
    // =============================

    if (
        name === "" ||
        roll === "" ||
        course === "" ||
        age === ""
    ) {

        alert("Please fill in all student details.");

        return;
    }


    // =============================
    // Age Validation
    // =============================

    const ageNumber = Number(age);

    if (
        !Number.isInteger(ageNumber) ||
        ageNumber < 1 ||
        ageNumber > 100
    ) {

        alert("Please enter a valid age between 1 and 100.");

        return;
    }


    // =============================
    // Marks Validation
    // =============================

    const marks = [m1, m2, m3, m4, m5];

    if (
        marks.some(mark => !Number.isFinite(mark))
    ) {

        alert(
            "Please enter valid numeric marks for all subjects."
        );

        return;
    }


    if (
        marks.some(mark => mark < 0 || mark > 100)
    ) {

        alert(
            "Marks must be between 0 and 100."
        );

        return;
    }


    // =============================
    // Subject Names
    // =============================

    const subjects = [
        "Subject 1",
        "Subject 2",
        "Subject 3",
        "Subject 4",
        "Subject 5"
    ];


    // =============================
    // Subject Analysis
    // =============================

    let subjectRows = "";

    for (let i = 0; i < marks.length; i++) {

        const mark = marks[i];

        const subjectGrade =
            getSubjectGrade(mark);

        const performance =
            getPerformance(mark);

        subjectRows += `
            <tr>
                <td>${subjects[i]}</td>
                <td>${mark}</td>
                <td>${subjectGrade}</td>
                <td>${performance}</td>
            </tr>
        `;
    }


    // =============================
    // Total & Average
    // =============================

    const total =
        marks.reduce(
            (sum, mark) => sum + mark,
            0
        );

    const average =
        total / marks.length;

    const percentage =
        average;


    // =============================
    // Overall Grade
    // =============================

    let grade = "";
    let remarks = "";

    if (percentage >= 90) {

        grade = "A+";
        remarks = "Outstanding";

    } else if (percentage >= 80) {

        grade = "A";
        remarks = "Excellent";

    } else if (percentage >= 70) {

        grade = "B";
        remarks = "Very Good";

    } else if (percentage >= 60) {

        grade = "C";
        remarks = "Good";

    } else if (percentage >= 50) {

        grade = "D";
        remarks = "Pass";

    } else {

        grade = "F";
        remarks = "Fail";
    }


    // =============================
    // Status
    // =============================

    const status =
        percentage >= 50
            ? "PASS"
            : "FAIL";


    // =============================
    // Scholarship
    // =============================

    const scholarship =
        percentage >= 85
            ? "Eligible"
            : "Not Eligible";


    // =============================
    // Performance
    // =============================

    const overallPerformance =
        getOverallPerformance(percentage);


    // =============================
    // Best Subject
    // =============================

    const highestMark =
        Math.max(...marks);

    const highestIndex =
        marks.indexOf(highestMark);

    const bestSubject =
        subjects[highestIndex];


    // =============================
    // Weakest Subject
    // =============================

    const lowestMark =
        Math.min(...marks);

    const lowestIndex =
        marks.indexOf(lowestMark);

    const weakestSubject =
        subjects[lowestIndex];


    // =============================
    // Student Details
    // =============================

    const details = `
        <h2>Student Details</h2>

        <p>
            <b>Name:</b> ${name}
        </p>

        <p>
            <b>Roll Number:</b> ${roll}
        </p>

        <p>
            <b>Course:</b> ${course}
        </p>

        <p>
            <b>Age:</b> ${ageNumber}
        </p>
    `;


    // =============================
    // Performance Bar
    // =============================

    const performanceBar = `
        <div style="
            width:100%;
            background:#e5e7eb;
            border-radius:10px;
            overflow:hidden;
            margin:15px 0;
        ">

            <div style="
                width:${percentage}%;
                height:25px;
                background:#333;
                border-radius:10px;
                text-align:center;
                color:white;
                line-height:25px;
                font-weight:bold;
            ">
                ${percentage.toFixed(1)}%
            </div>

        </div>
    `;


    // =============================
    // Result
    // =============================

    const result = `

        <h2>Student Grade Report</h2>

        <p>
            <b>Total Marks:</b>
            ${total} / 500
        </p>

        <p>
            <b>Average:</b>
            ${average.toFixed(2)}
        </p>

        <p>
            <b>Percentage:</b>
            ${percentage.toFixed(2)}%
        </p>

        <p>
            <b>Overall Grade:</b>
            ${grade}
        </p>

        <p>
            <b>Remarks:</b>
            ${remarks}
        </p>

        <p>
            <b>Status:</b>
            ${status}
        </p>

        <p>
            <b>Scholarship:</b>
            ${scholarship}
        </p>

        <hr>

        <h3>Overall Performance</h3>

        <p>
            <b>${overallPerformance}</b>
        </p>

        ${performanceBar}

        <hr>

        <h3>Subject-wise Performance</h3>

        <table
            border="1"
            cellpadding="8"
            cellspacing="0"
            width="100%"
        >

            <thead>

                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Grade</th>
                    <th>Performance</th>
                </tr>

            </thead>

            <tbody>

                ${subjectRows}

            </tbody>

        </table>

        <hr>

        <h3>Performance Analysis</h3>

        <p>
            <b>Best Subject:</b>
            ${bestSubject}
            (${highestMark} marks)
        </p>

        <p>
            <b>Subject Needing Most Improvement:</b>
            ${weakestSubject}
            (${lowestMark} marks)
        </p>

        <hr>

        <p style="text-align:center;">
            Generated by Student Grade Calculator
        </p>
    `;


    // =============================
    // Display Result
    // =============================

    document.getElementById(
        "studentDetails"
    ).innerHTML = details;

    document.getElementById(
        "output"
    ).innerHTML = result;


    // =============================
    // Save Result
    // =============================

    localStorage.setItem(
        "studentDetails",
        details
    );

    localStorage.setItem(
        "studentResult",
        result
    );
}


// =============================
// Reset Form
// =============================

function resetForm() {

    document.getElementById("name").value = "";

    document.getElementById("roll").value = "";

    document.getElementById("course").value = "";

    document.getElementById("age").value = "";

    document.getElementById("m1").value = "";

    document.getElementById("m2").value = "";

    document.getElementById("m3").value = "";

    document.getElementById("m4").value = "";

    document.getElementById("m5").value = "";

    document.getElementById(
        "studentDetails"
    ).innerHTML = "";

    document.getElementById(
        "output"
    ).innerHTML = "";

    localStorage.removeItem(
        "studentDetails"
    );

    localStorage.removeItem(
        "studentResult"
    );
}


// =============================
// Dark Mode
// =============================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

}


// =============================
// Print Result
// =============================

function printResult() {

    const output =
        document.getElementById("output");

    if (
        output.innerHTML.trim() === ""
    ) {

        alert(
            "Please calculate the result first."
        );

        return;
    }

    window.print();
}
