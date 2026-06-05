const number1Ref = document.querySelector('#number1')
const number2Ref = document.querySelector('#number2')
const number3Ref = document.querySelector('#number3')
const maxRef = document.querySelector('.maxnum__span')


function findMaxNumber() {
    const num1 = Number(number1Ref.value);
    const num2 = Number(number2Ref.value);
    const num3 = Number(number3Ref.value);

    const max = Math.max(num1, num2, num3);

    maxRef.textContent = max;
}

number1Ref.addEventListener('input', findMaxNumber);
number2Ref.addEventListener('input', findMaxNumber);
number3Ref.addEventListener('input', findMaxNumber);
