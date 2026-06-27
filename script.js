// Load saved data when page opens
window.onload = function () {
    if (localStorage.getItem("studentResult")) {
        document.getElementById("output").innerHTML =
            localStorage.getItem("studentResult");
    }
};

// Calculate Result
function runProgram() {

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();
    let age = document.getElementById("age").value;

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    if (
        name === "" ||
        roll === "" ||
        course === "" ||
        age === "" ||
        isNaN(m1) ||
        isNaN(m2) ||
        isNaN(m3) ||
        isNaN(m4) ||
        isNaN(m5)
    ) {
        alert("Please fill all fields.");
        return;
    }

    let marks = [m1, m2, m3, m4, m5];

    for (let mark of marks) {
        if (mark < 0 || mark > 100) {
            alert("Marks should be between 0 and 100.");
            return;
        }
    }

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;
    let percentage = average;

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

    let status = percentage >= 50 ? "PASS" : "FAIL";

    let scholarship =
        percentage >= 85 ? "Eligible" : "Not Eligible";

    let output = `
    <h2>Student Details</h2>

    <p><b>Name:</b> ${name}</p>
    <p><b>Roll Number:</b> ${roll}</p>
    <p><b>Course:</b> ${course}</p>
    <p><b>Age:</b> ${age}</p>

    <h2>Result</h2>

    <p><b>Total:</b> ${total}</p>
    <p><b>Average:</b> ${average.toFixed(2)}</p>
    <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
    <p><b>Grade:</b> ${grade}</p>
    <p><b>Remarks:</b> ${remarks}</p>
    <p><b>Status:</b> ${status}</p>
    <p><b>Scholarship:</b> ${scholarship}</p>
    `;

    document.getElementById("output").innerHTML = output;

    localStorage.setItem("studentResult", output);
}

// Reset Form
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

    document.getElementById("output").innerHTML = "";

    localStorage.removeItem("studentResult");
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
function printResult() {

    // Check if dark mode is enabled
    const isDark = document.body.classList.contains("dark");

    // Temporarily remove dark mode
    if (isDark) {
        document.body.classList.remove("dark");
    }

    // Open print dialog
    window.print();

    // Restore dark mode after printing
    if (isDark) {
        document.body.classList.add("dark");
    }
        }
