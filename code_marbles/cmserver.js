const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sample questions and answers
const questions = [
    { id: 1, question: 'What is the output of 2 + 2 in Python?', answers: ['3', '4'], correct: '4' },
    { id: 2, question: 'Which of the following is a valid Python variable name?', answers: ['2variable', '_variable'], correct: '_variable' },
    { id: 3, question: 'Which data structure uses LIFO (Last In, First Out) principle?', answers: ['Queue', 'Stack'], correct: 'Stack' },
    { id: 4, question: 'What is the time complexity of accessing an element in an array?', answers: ['O(1)', 'O(n)'], correct: 'O(1)' },
    { id: 5, question: 'Which keyword is used to create a class in Python?', answers: ['function', 'class'], correct: 'class' },
    { id: 6, question: 'What is the output of print("Hello, World!") in Python?', answers: ['Hello, World!', 'hello world'], correct: 'Hello, World!' },
    { id: 7, question: 'Which of the following is a loop structure in Python?', answers: ['for', 'function'], correct: 'for' },
    { id: 8, question: 'What does HTML stand for?', answers: ['Hyperlinks and Text Markup Language', 'HyperText Markup Language'], correct: 'HyperText Markup Language' },
    { id: 9, question: 'Which of the following is a Python built-in function?', answers: ['len()', 'array()'], correct: 'len()' },
    { id: 10, question: 'Which programming language is known as the language of the web?', answers: ['Python', 'JavaScript'], correct: 'JavaScript' },
    { id: 11, question: 'What is the result of 10 % 3 in Python?', answers: ['1', '3'], correct: '1' },
    { id: 12, question: 'Which method can be used to find the length of a string in Python?', answers: ['length()', 'len()'], correct: 'len()' },
    { id: 13, question: 'What does CSS stand for?', answers: ['Cascading Style Sheets', 'Creative Style Sheets'], correct: 'Cascading Style Sheets' },
    { id: 14, question: 'Which HTML tag is used to create a hyperlink?', answers: ['<a>', '<link>'], correct: '<a>' },
    { id: 15, question: 'Which of the following is used to iterate over a sequence in Python?', answers: ['for', 'if'], correct: 'for' },
    { id: 16, question: 'Which Python function is used to read user input?', answers: ['input()', 'read()'], correct: 'input()' },
    { id: 17, question: 'What is the default port number for HTTP?', answers: ['80', '443'], correct: '80' },
    { id: 18, question: 'Which of the following is a valid Python list?', answers: ['[1, 2, 3]', '{1, 2, 3}'], correct: '[1, 2, 3]' },
    { id: 19, question: 'Which operator is used for string concatenation in Python?', answers: ['+', '&'], correct: '+' },
    { id: 20, question: 'Which keyword is used to define a function in Python?', answers: ['function', 'def'], correct: 'def' },
];

// Shuffle the questions array to randomize
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Serve shuffled questions to the client
let shuffledQuestions = shuffleQuestions(questions);

app.get('/questions/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= shuffledQuestions.length) {
        return res.status(404).send({ error: 'No more questions available' });
    }
    res.send(shuffledQuestions[index]);
});

app.post('/bet', (req, res) => {
    const { questionId, selectedAnswer } = req.body;
    const question = shuffledQuestions.find(q => q.id === questionId);

    if (!question) {
        return res.status(404).send({ message: 'Question not found' });
    }

    const result = (selectedAnswer === question.correct) ? 'correct' : 'wrong';
    res.send({ result, message: ` ` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
