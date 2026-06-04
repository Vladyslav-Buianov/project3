const btnaddRef = document.querySelector('#btnadd')
const btnmultiplyRef = document.querySelector('#btnmultiply')
const btnsubstractref = document.querySelector('#btnsubstract')
const btndivideRef = document.querySelector('#btndivide')

const firstnumberRef = document.querySelector('#firstnumber')
const secondnumberRef = document.querySelector('#secondnumber')

const resultRef = document.querySelector('#result')


function getNumbers() {
    return {
        num1: Number(firstnumberRef.value),
        num2: Number(secondnumberRef.value)
    };
}

btnaddRef.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    resultRef.textContent = `Результат: ${num1 + num2}`;
});

btnsubstractref.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    resultRef.textContent = `Результат: ${num1 - num2}`;
});

btnmultiplyRef.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    resultRef.textContent = `Результат: ${num1 * num2}`;
});

btndivideRef.addEventListener('click', () => {
    const { num1, num2 } = getNumbers();
    if (num2 === 0) {
        resultRef.textContent = 'Помилка: ділення на нуль!';
        return;
    }
    resultRef.textContent = `Результат: ${num1 / num2}`;
});
