// =============================
// Load Saved Data
// =============================

window.onload = function () {

    const details =
        localStorage.getItem("studentDetails");

    const result =
        localStorage.getItem("studentResult");

    if (details) {
        document.getElementById(
            "studentDetails"
        ).innerHTML = details;
    }

    if (result) {
        document.getElementById(
            "output"
        ).innerHTML = result;
    }

    displayHistory();
};


// =============================
// Validation Helper
// =============================

function showValidationError(
    inputId,
    message
) {

    const input =
        document.getElementById(inputId);

    if (input) {

        input.focus();

        input.style.borderColor =
            "#dc2626";

        input.style.boxShadow =
            "0 0 0 3px rgba(220, 38, 38, 0.12)";
    }

    alert(message);
}


// =============================
// Clear Validation Styles
// =============================

function clearValidationStyles() {

    const inputs =
        document.querySelectorAll(
            "input"
        );

    inputs.forEach(
        input => {

            input.style.borderColor = "";

            input.style.boxShadow = "";

        }
    );
}


// =============================
// Get Subject Grade
// =============================

function getSubjectGrade(mark) {

    if (mark >= 90) {
        return "A+";
    }

    if (mark >= 80) {
        return "A";
    }

    if (mark >= 70) {
        return "B";
    }

    if (mark >= 60) {
        return "C";
    }

    if (mark >= 50) {
        return "D";
    }

    if (mark >= 40) {
        return "Pass";
    }

    return "F";
}


// =============================
// Get Grade Point
// =============================

function getGradePoint(mark) {

    if (mark >= 90) {
        return 10;
    }

    if (mark >= 80) {
        return 9;
    }

    if (mark >= 70) {
        return 8;
    }

    if (mark >= 60) {
        return 7;
    }

    if (mark >= 50) {
        return 6;
    }

    if (mark >= 40) {
        return 5;
    }

    return 0;
}


// =============================
// Get Performance
// =============================

function getPerformance(mark) {

    if (mark >= 90) {
        return "Outstanding";
    }

    if (mark >= 80) {
        return "Excellent";
    }

    if (mark >= 70) {
        return "Very Good";
    }

    if (mark >= 60) {
        return "Good";
    }

    if (mark >= 50) {
        return "Average";
    }

    return "Needs Improvement";
}


// =============================
// Overall Performance
// =============================

function getOverallPerformance(
    percentage
) {

    if (percentage >= 90) {
        return "Outstanding Performance";
    }

    if (percentage >= 80) {
        return "Excellent Performance";
    }

    if (percentage >= 70) {
        return "Very Good Performance";
    }

    if (percentage >= 60) {
        return "Good Performance";
    }

    if (percentage >= 50) {
        return "Average Performance";
    }

    return "Needs Significant Improvement";
}


// =============================
// Get Result History
// =============================

function getHistory() {

    const history =
        localStorage.getItem(
            "resultHistory"
        );

    if (!history) {
        return [];
    }

    try {

        return JSON.parse(history);

    } catch (error) {

        console.error(
            "Unable to load result history:",
            error
        );

        return [];
    }
}


// =============================
// Save Result To History
// =============================

function saveToHistory(data) {

    const history =
        getHistory();

    history.push(data);

    localStorage.setItem(
        "resultHistory",
        JSON.stringify(history)
    );
}


// =============================
// Display History
// =============================

function displayHistory() {

    const historyContainer =
        document.getElementById(
            "history"
        );

    if (!historyContainer) {
        return;
    }

    const history =
        getHistory();


    if (history.length === 0) {

        historyContainer.innerHTML = `

            <h2>
                Result History
            </h2>

            <div class="empty-history">

                <p>
                    No previous results found.
                </p>

            </div>

        `;

        return;
    }


    let historyRows = "";


    history.forEach(
        (item, index) => {

            historyRows += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${item.name}
                    </td>

                    <td>
                        ${item.roll}
                    </td>

                    <td>
                        ${item.percentage}%
                    </td>

                    <td>
                        ${item.grade}
                    </td>

                    <td>
                        ${item.cgpa}
                    </td>

                    <td>
                        ${item.status}
                    </td>

                    <td>
                        ${item.date}
                    </td>

                </tr>

            `;
        }
    );


    historyContainer.innerHTML = `

        <h2>
            Result History
        </h2>

        <table class="history-table">

            <thead>

                <tr>

                    <th>#</th>
                    <th>Name</th>
                    <th>Roll Number</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>CGPA</th>
                    <th>Status</th>
                    <th>Date</th>

                </tr>

            </thead>

            <tbody>

                ${historyRows}

            </tbody>

        </table>

        <br>

        <button
            class="danger-button"
            onclick="clearHistory()"
        >
            Clear History
        </button>

    `;
}


// =============================
// Clear History
// =============================

function clearHistory() {

    const history =
        getHistory();


    if (history.length === 0) {

        alert(
            "There is no history to clear."
        );

        return;
    }


    const confirmation =
        confirm(
            "Are you sure you want to clear all result history?"
        );


    if (!confirmation) {
        return;
    }


    localStorage.removeItem(
        "resultHistory"
    );


    displayHistory();


    alert(
        "Result history cleared successfully."
    );
}


// =============================
// Calculate Result
// =============================

function runProgram() {

    clearValidationStyles();


    // =============================
    // Student Information
    // =============================

    const name =
        document.getElementById(
            "name"
        ).value.trim();


    const roll =
        document.getElementById(
            "roll"
        ).value.trim();


    const course =
        document.getElementById(
            "course"
        ).value.trim();


    const ageValue =
        document.getElementById(
            "age"
        ).value.trim();


    // =============================
    // Student Name Validation
    // =============================

    if (name === "") {

        showValidationError(
            "name",
            "Please enter the student's name."
        );

        return;
    }


    if (name.length < 2) {

        showValidationError(
            "name",
            "Student name must contain at least 2 characters."
        );

        return;
    }


    // =============================
    // Roll Number Validation
    // =============================

    if (roll === "") {

        showValidationError(
            "roll",
            "Please enter the roll number."
        );

        return;
    }


    if (roll.length < 2) {

        showValidationError(
            "roll",
            "Please enter a valid roll number."
        );

        return;
    }


    // =============================
    // Course Validation
    // =============================

    if (course === "") {

        showValidationError(
            "course",
            "Please enter the course name."
        );

        return;
    }


    if (course.length < 2) {

        showValidationError(
            "course",
            "Course name must contain at least 2 characters."
        );

        return;
    }


    // =============================
    // Age Validation
    // =============================

    if (ageValue === "") {

        showValidationError(
            "age",
            "Please enter the student's age."
        );

        return;
    }


    const age =
        Number(ageValue);


    if (!Number.isInteger(age)) {

        showValidationError(
            "age",
            "Age must be a whole number."
        );

        return;
    }


    if (age < 1 || age > 100) {

        showValidationError(
            "age",
            "Age must be between 1 and 100."
        );

        return;
    }


    // =============================
    // Subject Names
    // =============================

    const subjectIds = [
        "subject1",
        "subject2",
        "subject3",
        "subject4",
        "subject5"
    ];


    const subjects = [];


    for (
        let i = 0;
        i < subjectIds.length;
        i++
    ) {

        const subject =
            document.getElementById(
                subjectIds[i]
            ).value.trim();


        if (subject === "") {

            showValidationError(
                subjectIds[i],
                `Please enter the name for Subject ${i + 1}.`
            );

            return;
        }


        if (subject.length < 2) {

            showValidationError(
                subjectIds[i],
                `Subject ${i + 1} name must contain at least 2 characters.`
            );

            return;
        }


        subjects.push(subject);
    }


    // =============================
    // Marks
    // =============================

    const markIds = [
        "m1",
        "m2",
        "m3",
        "m4",
        "m5"
    ];


    const marks = [];


    for (
        let i = 0;
        i < markIds.length;
        i++
    ) {

        const markValue =
            document.getElementById(
                markIds[i]
            ).value.trim();


        if (markValue === "") {

            showValidationError(
                markIds[i],
                `Please enter marks for ${subjects[i]}.`
            );

            return;
        }


        const mark =
            Number(markValue);


        if (!Number.isFinite(mark)) {

            showValidationError(
                markIds[i],
                `Please enter a valid number for ${subjects[i]}.`
            );

            return;
        }


        if (mark < 0 || mark > 100) {

            showValidationError(
                markIds[i],
                `Marks for ${subjects[i]} must be between 0 and 100.`
            );

            return;
        }


        marks.push(mark);
    }


    // =============================
    // Subject Analysis
    // =============================

    let subjectRows = "";


    for (
        let i = 0;
        i < marks.length;
        i++
    ) {

        const mark =
            marks[i];


        const grade =
            getSubjectGrade(mark);


        const gradePoint =
            getGradePoint(mark);


        const performance =
            getPerformance(mark);


        subjectRows += `

            <tr>

                <td>
                    ${subjects[i]}
                </td>

                <td>
                    ${mark}
                </td>

                <td>
                    ${grade}
                </td>

                <td>
                    ${gradePoint}
                </td>

                <td>
                    ${performance}
                </td>

            </tr>

        `;
    }


    // =============================
    // Total
    // =============================

    const total =
        marks.reduce(
            (sum, mark) =>
                sum + mark,
            0
        );


    // =============================
    // Average
    // =============================

    const average =
        total / marks.length;


    const percentage =
        average;


    // =============================
    // CGPA
    // =============================

    const gradePoints =
        marks.map(
            mark =>
                getGradePoint(mark)
        );


    const totalGradePoints =
        gradePoints.reduce(
            (sum, point) =>
                sum + point,
            0
        );


    const cgpa =
        totalGradePoints /
        gradePoints.length;


    const formattedCGPA =
        cgpa.toFixed(2);


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
    // Overall Performance
    // =============================

    const overallPerformance =
        getOverallPerformance(
            percentage
        );


    // =============================
    // Best Subject
    // =============================

    const highestMark =
        Math.max(...marks);


    const highestIndex =
        marks.indexOf(
            highestMark
        );


    const bestSubject =
        subjects[highestIndex];


    // =============================
    // Weakest Subject
    // =============================

    const lowestMark =
        Math.min(...marks);


    const lowestIndex =
        marks.indexOf(
            lowestMark
        );


    const weakestSubject =
        subjects[lowestIndex];


    // =============================
    // Student Details
    // =============================

    const details = `

        <h2>
            Student Details
        </h2>

        <p>
            <b>Name:</b>
            ${name}
        </p>

        <p>
            <b>Roll Number:</b>
            ${roll}
        </p>

        <p>
            <b>Course:</b>
            ${course}
        </p>

        <p>
            <b>Age:</b>
            ${age}
        </p>

    `;


    // =============================
    // Performance Bar
    // =============================

    const performanceBar = `

        <div class="performance-container">

            <div
                class="performance-bar"
                style="width:${percentage}%"
            >

                ${percentage.toFixed(1)}%

            </div>

        </div>

    `;


    // =============================
    // Result
    // =============================

    const result = `

        <h2>
            Student Grade Report
        </h2>


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
            <b>CGPA:</b>
            ${formattedCGPA} / 10
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


        <h3>
            Overall Performance
        </h3>


        <p>
            <b>
                ${overallPerformance}
            </b>
        </p>


        ${performanceBar}


        <hr>


        <h3>
            Subject-wise Performance
        </h3>


        <table class="result-table">

            <thead>

                <tr>

                    <th>
                        Subject
                    </th>

                    <th>
                        Marks
                    </th>

                    <th>
                        Grade
                    </th>

                    <th>
                        Grade Point
                    </th>

                    <th>
                        Performance
                    </th>

                </tr>

            </thead>


            <tbody>

                ${subjectRows}

            </tbody>

        </table>


        <hr>


        <h3>
            Performance Analysis
        </h3>


        <div class="analysis-box">

            <p>
                <b>
                    Best Subject:
                </b>

                ${bestSubject}
                (${highestMark} marks)
            </p>


            <p>
                <b>
                    Subject Needing Most Improvement:
                </b>

                ${weakestSubject}
                (${lowestMark} marks)
            </p>


            <p>
                <b>
                    CGPA:
                </b>

                ${formattedCGPA} / 10
            </p>

        </div>


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
    // Save Current Result
    // =============================

    localStorage.setItem(
        "studentDetails",
        details
    );


    localStorage.setItem(
        "studentResult",
        result
    );


    // =============================
    // Save Result History
    // =============================

    const historyData = {

        name: name,

        roll: roll,

        course: course,

        age: age,

        subjects: subjects,

        marks: marks,

        total: total,

        percentage:
            percentage.toFixed(2),

        grade: grade,

        cgpa: formattedCGPA,

        status: status,

        date:
            new Date().toLocaleString()
    };


    saveToHistory(
        historyData
    );


    // =============================
    // Update History
    // =============================

    displayHistory();


    // =============================
    // Success Message
    // =============================

    alert(
        "Result calculated successfully!"
    );
}


// =============================
// Reset Form
// =============================

function resetForm() {

    clearValidationStyles();


    const inputIds = [

        "name",
        "roll",
        "course",
        "age",

        "subject1",
        "subject2",
        "subject3",
        "subject4",
        "subject5",

        "m1",
        "m2",
        "m3",
        "m4",
        "m5"

    ];


    inputIds.forEach(
        id => {

            const input =
                document.getElementById(id);

            if (input) {
                input.value = "";
            }

        }
    );


    document.getElementById(
        "studentDetails"
    ).innerHTML = `

        <h2>
            Student Details
        </h2>

        <p>
            Enter student information and
            calculate the result.
        </p>

    `;


    document.getElementById(
        "output"
    ).innerHTML = `

        <h2>
            Student Grade Report
        </h2>

        <p>
            Your calculated result will
            appear here.
        </p>

    `;
}


// =============================
// Dark Mode
// =============================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );
}


// =============================
// Print Result
// =============================

function printResult() {

    const output =
        document.getElementById(
            "output"
        );


    if (
        output.innerText.trim() === ""
    ) {

        alert(
            "Please calculate the result first."
        );

        return;
    }


    window.print();
}


// =============================
// Download Result
// =============================

function downloadResult() {

    const output =
        document.getElementById(
            "output"
        );


    if (
        output.innerText.trim() === ""
    ) {

        alert(
            "Please calculate the result first."
        );

        return;
    }


    const studentDetails =
        document.getElementById(
            "studentDetails"
        ).innerText;


    const result =
        output.innerText;


    const content = `

STUDENT GRADE REPORT
====================

${studentDetails}

${result}

====================
Generated by Student Grade Calculator

`;


    const blob =
        new Blob(
            [content],
            {
                type: "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;


    link.download =
        "student-grade-report.txt";


    document.body.appendChild(
        link
    );


    link.click();


    document.body.removeChild(
        link
    );


    URL.revokeObjectURL(
        url
    );
}
