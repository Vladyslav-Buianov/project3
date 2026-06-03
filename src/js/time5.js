const formRef = document.querySelector(".time5__form");
const textRef = document.querySelector(".time5__text");

formRef.addEventListener("submit", (event)=>{
    event.preventDefault()
    const action = Number(event.currentTarget.elements[0].value);
    if(!Number.isNaN(action)){
        if (Number(action) % 60 === 0 && Number(action) % 1440 !== 0 && Number(action) % 10080 !== 0 && Number(action) % 525960 !== 0) {
            textRef.textContent = `${Number(action) / 60} год. ${Number.parseInt(Number(action) / 60)}:${Number(action) % 60}`
        } else if(Number(action) % 1440 === 0 && Number(action) % 10080 !== 0 && Number(action) % 525960 !== 0){
            textRef.textContent = `${Number(action) / 1440} дн. ${Number.parseInt(Number(action) / 60)}:${Number(action) % 60}`
        } else if (Number(action) % 10080 === 0 && Number(action) % 525960 !== 0) {
            textRef.textContent = `${Number(action) / 10080} тиж. ${Number.parseInt(Number(action) / 60)}:${Number(action) % 60}`
        } else if (Number(action) % 525960 === 0) {
            textRef.textContent = `${Number(action) / 525960} р. ${Number.parseInt(Number(action) / 60)}:${Number(action) % 60}`
        }else {
            textRef.textContent = `${Number.parseInt(Number(action) / 60)}:${Number(action) % 60}`
        }
    }
})