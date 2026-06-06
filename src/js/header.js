import sun from '../img/symbol-defs.svg#icon-sun'
import moon from '../img/symbol-defs.svg#icon-moon'

const toggleRef = document.querySelector('.header__chekbox');
const svgIcon = document.querySelector('.header__chek svg use');

const containerRef = document.querySelectorAll('.container');
const allTextRef = document.querySelectorAll('h2');
const mainText = document.querySelector('h1');
const linkRef = document.querySelectorAll('a');
const pTextRef = document.querySelectorAll('p');
const spanText = document.querySelectorAll('span');
const header = document.querySelector('.header');
const btnRef = document.querySelectorAll('btn');
const lineRef = document.querySelector('hr');



toggleRef.addEventListener('click', (e) => {
  const isDark = document.body.classList.toggle('dark');

  // toggle animation switch
  e.currentTarget.classList.toggle('active');

  // background
  document.body.style.backgroundColor = isDark ? '#444' : '#fff';
  header.style.backgroundColor = isDark ? '#444' : '#fff';

  // text colors
  const color = isDark ? '#fff' : '#000';

  allTextRef.forEach(el => el.style.color = color);
  if (mainText) mainText.style.color = color;
  linkRef.forEach(el => el.style.color = color);
  pTextRef.forEach(el => el.style.color = color);
  spanText.forEach(el => el.style.color = color);

  // containers
  containerRef.forEach(el => {
    el.style.backgroundColor = isDark ? '#444' : '#fff';
  });

  // icon swap
  svgIcon.setAttribute(
    'href',
    isDark
      ? './img/symbol-defs.svg#icon-moon'
      : './img/symbol-defs.svg#icon-sun'
  );
});