const formRef = document.querySelector(".number2__form");
const textRef = document.querySelector(".number2__text");
const spanRef = document.querySelector(".number2__span");

formRef.addEventListener("submit", (event)=>{
    event.preventDefault()
    const action = Number(event.currentTarget.elements[0].value);
    const randomNumber = Math.round(Math.random() * (10 - 1) + 1);
    if(!Number.isNaN(action) && Number(action) < 10 && Number(action) > 0){
        if (action === randomNumber) {
            textRef.textContent = `Вітаю, ви вгадали число! (${spanRef.textContent = randomNumber})`;
            textRef.style.color = "#039900";
        } else {
            textRef.textContent = `Ви програли, комп’ютер загадав (${spanRef.textContent = randomNumber})`;
            textRef.style.color = "#990000";
        }
    }
})