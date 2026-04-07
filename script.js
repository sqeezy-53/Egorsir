const questions = [
  { q: "Почему Егор такой сырный?", answer: "ест много сыра" },
  { q: "Сколько пожирает Егор в день сыра?", answer: "много" },
  { q: "Как зовут сыр?", answer: "егор" },
];

let current = 0;

function openDialog() {
    current = 0;
    showQuestion();
    document.getElementById('answerInput').style.display = 'block';
    document.getElementById('myDialog').show();
}

function showQuestion() {
    document.getElementById('questionText').textContent = questions[current].q;
    document.getElementById('answerInput').value = '';
    document.getElementById('resultText').textContent = '';
}

function checkAnswer() {
    const input = document.getElementById('answerInput').value.toLowerCase().trim();
    const correct = questions[current].answer.toLowerCase();
    const result = document.getElementById('resultText');

    if (input === correct) {
        result.textContent = '✅ Правильно!';
        result.style.color = 'green';
        setTimeout(() => {
            current++;
            if (current < questions.length) {
                showQuestion();
            } else {
                document.getElementById('questionText').textContent = '🎉 Ты ответил на все вопросы!';
                document.getElementById('answerInput').style.display = 'none';
                result.textContent = '';
            }
        }, 1000);
    } else {
        result.textContent = '❌ Неправильно, попробуй ещё!';
        result.style.color = 'red';
    }
}

function closeDialog() {
    document.getElementById('myDialog').close();
    document.getElementById('answerInput').style.display = 'block';
}