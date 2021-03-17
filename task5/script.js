const setText = document.querySelector("#setText");
const duplicateField = document.querySelector("#duplicateField");

setText.addEventListener('input', (event)=>{
    duplicateField.textContent = event.target.value;
});

const button = document.querySelector("#button");

button.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(setText.value);
    setText.value = "";
    duplicateField.value = "";
});
