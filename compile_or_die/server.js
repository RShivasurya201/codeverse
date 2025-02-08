const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (JavaScript, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Sample Questions
const questions = [
    { question: "What is the correct syntax to output 'Hello World' in C++?", options: ["cout << 'Hello World';", "print('Hello World')"], correct: 0 },
    { question: "What keyword is used to declare a class in Python?", options: ["function", "class"], correct: 1 },
    { question: "Which of the following is a loop in C++?", options: ["for", "loop"] , correct: 0 },
    { question: "What is the file extension for a Python file?", options: [".js", ".py"], correct: 1 },
    { question: "Which language is used for web apps?", options: ["Java", "HTML"], correct: 1 }
];

// Endpoint to serve questions
app.get('/questions', (req, res) => {
    res.json(questions);
});

// Endpoint to check the answer
app.post('/check-answer', (req, res) => {
    const { questionIndex, selectedOption } = req.body;
    
    const qi = parseInt(questionIndex);
    console.log(questionIndex);
    const ans = parseInt(selectedOption);
    const question = questions[qi];


    if (question && question.correct === ans) {
        res.json({ correct: true });
    } else {
        res.json({ correct: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
