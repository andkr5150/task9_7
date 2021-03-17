const promptMessage = document.querySelector("#plink");

promptMessage.addEventListener('click', (event)=> {
    event.preventDefault();
    promptMessage.textContent = prompt("Введите текст ссылки");
})

