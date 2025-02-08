const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let questions = [
    {
        "error code": "int main() { cout << 'Hello, World!' return 0; }",
        "correct code": "int main() { std::cout << 'Hello, World!'; return 0; }"
    },
    {
        "error code": "for (int i = 0; i < 10 i++) { std::cout << i; }",
        "correct code": "for (int i = 0; i < 10; i++) { std::cout << i; }"
    }
    // {
    //     "error code": "if (a = 5) { std::cout << 'A is 5'; }",
    //     "correct code": "if (a == 5) { std::cout << 'A is 5'; }"
    // },
    // {
    //     "error code": "std::vector<int> v; v.push_back(10; v.push_back(20);",
    //     "correct code": "std::vector<int> v; v.push_back(10); v.push_back(20);"
    // },
    // {
    //     "error code": "int main() { std::cout << 'Value: ' << x << std::endl; return 0; }",
    //     "correct code": "int main() { int x = 10; std::cout << 'Value: ' << x << std::endl; return 0; }"
    // },
    // {
    //     "error code": "std::string str = \"Hello; std::cout << str;",
    //     "correct code": "std::string str = \"Hello\"; std::cout << str;"
    // },
    // {
    //     "error code": "void foo() { std::cout << 'Foo'; }",
    //     "correct code": "void foo() { std::cout << 'Foo'; }"
    // },
    // {
    //     "error code": "std::map<int, std::string> myMap; myMap[1] = 'Value1; myMap[2] = 'Value2';",
    //     "correct code": "std::map<int, std::string> myMap; myMap[1] = 'Value1'; myMap[2] = 'Value2';"
    // },
    // {
    //     "error code": "int add(int a, int b) { return a + b; }",
    //     "correct code": "int add(int a, int b) { return a + b; }"
    // },
    // {
    //     "error code": "while (true) { std::cout << 'Looping' std::cout << 'End Loop'; }",
    //     "correct code": "while (true) { std::cout << 'Looping'; std::cout << 'End Loop'; }"
    // }
];
// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'syntax.html'));
});

// API to check the user's answer
app.post('/check-answer', (req, res) => {
    const { questionIndex, userAnswer } = req.body;
    const correctAnswer = questions[questionIndex]["correct code"];

    if (userAnswer.trim() === correctAnswer.trim()) {
        res.json({ isCorrect: true });
    } else {
        res.json({ isCorrect: false });
    }
});

// API to get the questions
app.get('/questions', (req, res) => {
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
