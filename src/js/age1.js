// const form = document.querySelector(".age__form")
// form.addEventListener("submit", (event)=>{
//     event.preventDefault()
//     const action = Number(event.currentTarget.elements[0].value)
//     if(!Number.isNaN(action)){
//         if (action % 4 === 0){
//             console.log("Високосний");
            
//         }else{
//             console.log("Не високосний");
            
//         }
        
//     }
// })

const textRef = document.querySelector('.age__text');
const inputRef = document.querySelector('.age__input');
const buttonRef = document.querySelector('.age__button');

function checkAge(age) {
  textRef.classList.remove('agetrue', 'agefalse');

  if ((age % 400 === 0) || (age % 4 === 0 && age % 100 !== 0)) {
    textRef.textContent = 'Ви народилися у високосний рік!';
    textRef.classList.add('agetrue');
  } else {
    textRef.textContent = 'Ви народилися не у високосний рік!';
    textRef.classList.add('agefalse');
  }
}

buttonRef.addEventListener('click', event => {
  event.preventDefault();

  const age = Number(inputRef.value);

  if (!age) {
    textRef.textContent = 'Введіть коректний рік';
    return;
  }

  checkAge(age);
});