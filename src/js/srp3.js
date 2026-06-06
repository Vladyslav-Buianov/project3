const btnRef = document.querySelectorAll('.srp3__btn');
const spanRef = document.querySelectorAll('.srp3__span');
const messageRef = document.querySelector('.srp3__message');
const compRef = document.querySelector('.srp3__comp');


let computerScore = 0;
let userScore = 0;

const choices = ['камінь', 'ножиці', 'папір'];

const buttons = [
    { text: '✊', value: 'камінь' },
    { text: '✂️', value: 'ножиці' },
    { text: '📄', value: 'папір' }
];

btnRef.forEach((button, index) => {
    button.textContent = buttons[index].text;
    
    button.addEventListener('click', () => {
        play(buttons[index].value);
    });
});

function play(userChoice) {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    compRef.textContent = `Комп'ютер: ${computerChoice}`;
    // Перевірка результату раунду
    if (userChoice === computerChoice) {
        messageRef.textContent = "Нічия!";
        messageRef.style.color = "gray";
    } else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        messageRef.textContent = "Ви виграли!";
        messageRef.style.color = "green";
        userScore++;
    } else {
        messageRef.textContent = "Ви програли!";
        messageRef.style.color = "red";
        computerScore++;
    }

    

    spanRef[0].textContent = computerScore;
    spanRef[1].textContent = userScore;
}