const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());

// Array of questions and answers
const questions = [
    { question: "Which of the following are programming languages?", options: ["HTML", "Python", "JavaScript", "CSS"], correct: [1, 2] },
    { question: "Which data structures are used in the following array declaration: int arr[10];?", options: ["Array", "Stack", "Queue", "LinkedList"], correct: [0] },
    { question: "Which of these are looping structures in Python?", options: ["for", "while", "do-while", "if"], correct: [0, 1] },
    { question: "Which of these are valid ways to declare a variable in JavaScript?", options: ["let", "var", "int", "const"], correct: [0, 1, 3] },
    { question: "Which of these methods can be used to find the length of an array in JavaScript?", options: [".size()", ".length()", ".count()", ".len()"], correct: [1] },
    { question: "Which of these keywords are used for error handling in Python?", options: ["try", "catch", "except", "finally"], correct: [0, 2, 3] },
    { question: "Which of these are valid primitive data types in Java?", options: ["int", "string", "boolean", "float"], correct: [0, 2, 3] },
    { question: "Which of these are types of SQL joins?", options: ["INNER", "LEFT", "CROSS", "EXTERIOR"], correct: [0, 1, 2] },
    { question: "Which of these are valid CSS properties?", options: ["margin", "padding", "align", "border"], correct: [0, 1, 3] },
    { question: "Which of the following are valid ways to write comments in C++?", options: ["// Comment", "/* Comment */", "# Comment", "( Comment *)"], correct: [0, 1] },
    { question: "Which of these are built-in data types in C?", options: ["int", "struct", "char", "float"], correct: [0, 2, 3] },
    { question: "Which of the following are valid logical operators in Java?", options: ["&&", "||", "!", "^^"], correct: [0, 1, 2] },
    { question: "Which of these functions can be used to read input in Python?", options: ["input()", "scan()", "cin()", "read()"], correct: [0] },
    { question: "Which of the following are valid attributes of the <input> tag in HTML?", options: ["type", "name", "placeholder", "action"], correct: [0, 1, 2] },
    { question: "Which of the following are valid ways to declare a function in JavaScript?", options: ["function myFunc()", "let myFunc = function()", "def myFunc()", "const myFunc = () =>"], correct: [0, 1, 3] },
    { question: "Which of these are valid escape sequences in C?", options: ["\\n", "\\t", "\\r", "\\s"], correct: [0, 1, 2] },
    { question: "Which of the following are valid ways to create an object in JavaScript?", options: ["const obj = {}", "const obj = new Object()", "const obj = Object.create()", "const obj = new()"], correct: [0, 1, 2] },
    { question: "Which of these are valid selectors in CSS?", options: [".class", "#id", "element", "*selector"], correct: [0, 1, 2] },
    { question: "Which of the following are valid Python data types?", options: ["list", "tuple", "int", "record"], correct: [0, 1, 2] },
    { question: "Which of these are valid ways to initialize a list in Python?", options: ["[]", "list()", "{}","tuple()"], correct: [0, 1] }
];

let currentQuestionIndex = 0;

app.get('/questions', (req, res) => {
    const question = questions[currentQuestionIndex];
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    res.json(question);
});

app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
