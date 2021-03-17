
const consoleLog = document.querySelector("#consoleLog");
consoleLog.addEventListener('click', () => {
    alert("Служит для вывода информации в консоль");
})

const alertMessage = document.querySelector("#alert");
alertMessage.addEventListener('click', () => {
    alert("alert - служит для отображение информации пользователям");
})

const promtMessage = document.querySelector("#prompt");
promtMessage.addEventListener('click', ()=>{
    prompt("Prompt - служит для отображение информации с диалоговым окном, Вы согласны?");
})