const formRef = document.querySelector(".number2__form");
const succesSpanRef = document.querySelector(".number2__spans");
const failSpanRef = document.querySelector(".number2__spanf");
const succesInputRef = document.querySelector("#succes");
const failInputRef = document.querySelector("#fail");

formRef.addEventListener("submit", (event)=>{
    event.preventDefault()
    const action = Number(event.currentTarget.elements[0].value);
    const randomNumber = Math.round(Math.random() * (10 - 1) + 1);
    if(action != "" && !Number.isNaN(action)){
        if (action === randomNumber) {
            succesSpanRef.textContent = randomNumber;
            succesInputRef.display = inline;
            failInputRef.display = none;
        } else {
            failSpanRef.textContent = randomNumber;
            failInputRef.display = inline;
            succesInputRef.display = none;
        }
    }
})