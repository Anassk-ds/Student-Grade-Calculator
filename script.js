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

function getOverallPerformance(percentage) {

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
// Get History
// =============================

function getHistory() {

    const history =
        localStorage.getItem("resultHistory");

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
        document.getElementById("history");

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


    const age =
        document.getElementById(
            "age"
        ).value;


    // =============================
    // Get Marks
    // =============================

    const m1 =
        Number(
            document.getElementById(
                "m1"
            ).value
        );


    const m2 =
        Number(
            document.getElementById(
                "m2"
            ).value
        );


    const m3 =
        Number(
            document.getElementById(
                "m3"
            ).value
        );


    const m4 =
        Number(
            document.getElementById(
                "m4"
            ).value
        );


    const m5 =
        Number(
            document.getElementById(
                "m5"
            ).value
        );


    // =============================
    // Basic Validation
    // =============================

    if (
        name === "" ||
        roll === "" ||
        course === "" ||
        age === ""
    ) {

        alert(
            "Please fill in all student details."
        );

        return;
    }


    // =============================
    // Age Validation
    // =============================

    const ageNumber =
        Number(age);


    if (
        !Number.isInteger(ageNumber) ||
        ageNumber < 1 ||
        ageNumber > 100
    ) {

        alert(
            "Please enter a valid age between 1 and 100."
        );

        return;
    }


    // =============================
    // Marks Validation
    // =============================

    const marks = [
        m1,
        m2,
        m3,
        m4,
        m5
    ];


    if (
        marks.some(
            mark => !Number.isFinite(mark)
        )
    ) {

        alert(
            "Please enter valid numeric marks for all subjects."
        );

        return;
    }


    if (
        marks.some(
            mark => mark < 0 || mark > 100
        )
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


    for (
        let i = 0;
        i < marks.length;
        i++
    ) {

        const mark =
            marks[i];


        const subjectGrade =
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
                    ${subjectGrade}
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
            ${ageNumber}
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
    // Save To History
    // =============================

    const historyData = {

        name: name,

        roll: roll,

        course: course,

        age: ageNumber,

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
}


// =============================
// Reset Form
// =============================

function resetForm() {

    document.getElementById(
        "name"
    ).value = "";


    document.getElementById(
        "roll"
    ).value = "";


    document.getElementById(
        "course"
    ).value = "";


    document.getElementById(
        "age"
    ).value = "";


    document.getElementById(
        "m1"
    ).value = "";


    document.getElementById(
        "m2"
    ).value = "";


    document.getElementById(
        "m3"
    ).value = "";


    document.getElementById(
        "m4"
    ).value = "";


    document.getElementById(
        "m5"
    ).value = "";


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
        output.innerHTML.trim() === ""
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
