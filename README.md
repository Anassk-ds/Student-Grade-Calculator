Student Grade Calculator

A simple and interactive Student Grade Calculator built using HTML, CSS, and JavaScript.

The application allows students to enter their academic details and marks, calculate their results, analyze subject-wise performance, calculate CGPA, save result history, and download their result report.

---

Features

- Student information input
- Subject-wise marks entry
- Input validation
- Automatic total marks calculation
- Percentage calculation
- Overall grade calculation
- Subject-wise grade calculation
- Grade point calculation
- CGPA calculation
- Subject performance analysis
- Best subject identification
- Weakest subject identification
- Overall performance indicator
- Result history using Local Storage
- Clear result history
- Dark mode
- Print result
- Download result report
- Responsive design for mobile devices

---

Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage

---

How It Works

1. Enter Student Details

The user enters:

- Student Name
- Roll Number
- Course
- Age

2. Enter Subject Marks

The application accepts marks for five subjects.

Each subject accepts marks between 0 and 100.

3. Calculate Result

After clicking Calculate Result, the application calculates:

- Total Marks
- Average
- Percentage
- Overall Grade
- CGPA
- Result Status
- Scholarship Eligibility

4. Subject Analysis

The application displays each subject's:

- Marks
- Grade
- Grade Point
- Performance

It also identifies the student's:

- Best Subject
- Subject Needing Most Improvement

5. Result History

Previous results are stored in the browser using Local Storage.

The history contains:

- Student Name
- Roll Number
- Percentage
- Grade
- CGPA
- Status
- Date

6. Download Result

The generated result can be downloaded as a text file.

7. Print Result

Students can print their generated result directly from the browser.

---

Grade System

Marks| Grade| Grade Point
90 - 100| A+| 10
80 - 89| A| 9
70 - 79| B| 8
60 - 69| C| 7
50 - 59| D| 6
40 - 49| Pass| 5
Below 40| F| 0

---

CGPA Calculation

The application calculates CGPA using the average of the grade points obtained in the five subjects.

CGPA = Total Grade Points / Number of Subjects

For example:

Subject 1 = 10
Subject 2 = 9
Subject 3 = 8
Subject 4 = 7
Subject 5 = 9

CGPA = (10 + 9 + 8 + 7 + 9) / 5

CGPA = 8.60

«Note: This is a simplified CGPA calculation based on the grade-point mapping used by this application. Official university CGPA calculations may use credit-weighted grade points.»

---

Project Structure

Student-Grade-Calculator/
│
├── index.html
├── script.js
└── README.md

---

Getting Started

Clone the Repository

git clone https://github.com/Anassk-ds/Student-Grade-Calculator.git

Open the Project

Navigate to the project folder:

cd Student-Grade-Calculator

Open:

index.html

in any modern web browser.

No backend or database setup is required.

---

Local Storage

The application uses the browser's Local Storage to maintain:

- Current student details
- Current result
- Previous result history

This allows the result history to remain available even after refreshing the page.

---

Validation

The application validates:

- Empty student information
- Invalid age
- Missing marks
- Marks below 0
- Marks above 100
- Invalid numeric input

Invalid information is rejected before the result is calculated.

---

Responsive Design

The application is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile devices

The layout automatically adjusts according to the screen size.

---

Future Improvements

Possible future improvements include:

- Login and authentication
- Multiple student profiles
- PDF result generation
- Excel export
- Subject name customization
- Credit-based CGPA calculation
- Student dashboard
- Graphical performance charts
- Backend database integration
- Cloud data storage
- Admin dashboard

---

Project Goal

The main goal of this project is to create a simple web-based academic result management tool while practicing:

- HTML structure
- CSS styling
- JavaScript programming
- DOM manipulation
- Form validation
- Local Storage
- Array methods
- Conditional logic
- Dynamic HTML generation
- Responsive web design

---

Author

Shaik Anas

B.Tech - Data Science

Chalapathi Institute of Technology

---

License

This project is created for educational and learning purposes.
