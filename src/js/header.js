import svg from '../img/symbol-defs.svg';

const toggleRef = document.querySelector('.header__chekbox');
const svgIcon = document.querySelector('.header__chek svg use');

const containerRef = document.querySelectorAll('.container');
const allTextRef = document.querySelectorAll('h2');
const mainText = document.querySelector('h1');
const linkRef = document.querySelectorAll('a');
const pTextRef = document.querySelectorAll('p');
const spanText = document.querySelectorAll('span');
const header = document.querySelector('.header');
const btnRef = document.querySelectorAll('.btn');
const btnOne = document.querySelectorAll('.team__btnone');
const btnTwo = document.querySelectorAll('.team__btntwo');
const lineRef = document.querySelectorAll('hr');
const allSvgRef = document.querySelectorAll('svg:not(.header__chek svg):not(.header__chekbox svg)');

toggleRef.addEventListener('click', e => {
  const isDark = document.body.classList.toggle('dark');

  e.currentTarget.classList.toggle('active');

  document.body.style.backgroundColor = isDark ? '#444' : '#fff';
  header.style.backgroundColor = isDark ? '#444' : '#fff';

  const color = isDark ? '#fff' : '#000';
  const lineColor = isDark ? '#fff' : '#000';
    const svgColor = isDark ? '#fff' : '#000';

  lineRef.forEach(el => (el.style.backgroundColor = lineColor));
    allSvgRef.forEach(el => {
    el.style.stroke = svgColor;
    el.style.fill = isDark ? 'transparent' : 'transparent'; 
  });


  allTextRef.forEach(el => (el.style.color = color));
  if (mainText) mainText.style.color = color;
  linkRef.forEach(el => (el.style.color = color));
  pTextRef.forEach(el => (el.style.color = color));
  spanText.forEach(el => (el.style.color = color));
  btnOne.forEach(el => (el.style.color = color));
  btnTwo.forEach(el => (el.style.color = color));

  containerRef.forEach(el => {
    el.style.backgroundColor = isDark ? '#444' : '#fff';
  });

  svgIcon.setAttribute('href', isDark ? `${svg}#icon-moon` : `${svg}#icon-sun`);
});
