(() => {
  const listRef = document.querySelector('.team__list');
  const btnPrev = document.querySelector('.team__btnone');
  const btnNext = document.querySelector('.team__btntwo');
  const paginationRef = document.querySelector('.team__pagination');

  if (!listRef || !btnPrev || !btnNext || !paginationRef) return;

  const items = listRef.querySelectorAll('.team__item');
  let currentIndex = 0;

  listRef.tabIndex = 0;

  items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot--active');

    dot.addEventListener('click', () => scrollToSlide(index));
    paginationRef.appendChild(dot);
  });

  const dots = paginationRef.querySelectorAll('.dot');

  const updateDots = index => {
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('dot__active');
      } else {
        dot.classList.remove('dot__active');
      }
    });
  };

  const scrollToSlide = index => {
    const slideWidth = listRef.clientWidth;
    listRef.scrollLeft = index * slideWidth;
    currentIndex = index;
    updateDots(index);
  };

  btnNext.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      scrollToSlide(currentIndex + 1);
    } else {
      scrollToSlide(0);
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    } else {
      scrollToSlide(items.length - 1);
    }
  });


})();
