function showQuestion() {
    document.getElementById("question").innerText =
        "CPUの役割は？";

    document.getElementById("choices").innerHTML =
        `
        <button>① 記憶装置</button><br><br>
        <button onclick="correct()">② 演算処理</button><br><br>
        <button>③ 通信装置</button><br><br>
        <button>④ 出力装置</button>
        `;
}

function correct() {
    alert("正解！");
}
