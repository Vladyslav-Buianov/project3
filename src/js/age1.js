const form = document.querySelector(".age__form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    // console.log(event.currentTarget.elements[0].value);
    const action = Number(event.currentTarget.elements[0].value)
    if(!Number.isNaN(action)){
        if (action % 4 === 0){
            console.log("Високосний");
            
        }else{
            console.log("Не висо");
            
        }
        
    }
})