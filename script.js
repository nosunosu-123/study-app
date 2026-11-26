let questions = [];

fetch("questions.json")
    .then(response => response.json())
    .then(data => {
        questions = data;
    });

function showQuestion() {

    const randomIndex =
        Math.floor(Math.random() * questions.length);

    const q = questions[randomIndex];

    document.getElementById("question").innerText =
        q.question;

    let html = "";

    q.choices.forEach((choice, index) => {

        html += `
            <button onclick="checkAnswer(${index}, ${q.answer})">
                ${choice}
            </button>
            <br><br>
        `;
    });

    document.getElementById("choices").innerHTML = html;
}

function checkAnswer(selected, answer) {

    const result =
        selected === answer
        ? "〇 正解！"
        : "× 不正解";

    document.getElementById("result").innerText =
        result;

    showQuestion();
}

