const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const listRef = document.querySelector('.science10__list');
const buttonsRef = document.querySelectorAll('.science10__btn');

buttonsRef.forEach(btn => {
  btn.addEventListener('click', e => {
    const action = e.currentTarget.dataset.action;
    switch (action) {
      case '19st':
        const peopleFromThe19 = scientists.filter(({born}) => born >= 1800 && born < 1900);
        createItems(peopleFromThe19);
        break;

      case 'Einstein':
        const einstein = scientists.filter(({born}) => born === 1879);
        createItems(einstein);
        break;

      case 'alphabet':
        const sortedScientists = scientists.toSorted((a, b) => a.name.localeCompare(b.name));
        createItems(sortedScientists);
        break;

      case 'cSurname':
        const cSurname = scientists.filter(({surname}) => surname.startsWith('C'));
        createItems(cSurname);
        break;

      case 'livedMost':
        const sortedByAgeScientists = scientists.toSorted((a, b) => {
          const ageA = a.dead - a.born;
          const ageB = b.dead - b.born;
          return ageA - ageB;
        });
        createItems(sortedByAgeScientists);
        break;

      case 'namesWithoutA':
        const namesWithoutA = scientists.filter(({name}) => !name.startsWith('A'));
        createItems(namesWithoutA);
        break;

      case 'scientistBornLast':
        const scientistSortedByBorn = scientists.toSorted((a, b)=> a.born - b.born);
        const scientistBornLast = scientistSortedByBorn[scientistSortedByBorn.length-1];
        createItems([scientistBornLast]);
        break;

      case 'youngest&oldest':
        const sortedAgeScientists = scientists.toSorted((a, b) => {
          const ageA = a.dead - a.born;
          const ageB = b.dead - b.born;
          return ageA - ageB;
        });
        const olderScientist = sortedAgeScientists[sortedAgeScientists.length - 1];
        const youngestScientist = sortedAgeScientists[0];
        createItems([olderScientist, youngestScientist]);
        break;

      case 'fistLetterSame':
        const sameFirstLetters = scientists.filter(({name, surname}) => name.startsWith(surname.charAt(0)));
        createItems(sameFirstLetters);
        break;

      default:
        break;
    }
  });
});

function createItems(arr) {
  const item = arr
    .map(({ name, surname, born, dead, id }) => {
      return `<li class="science10__item" id="${id}">
        <p>${name} ${surname}</p>
        <p>${born}-${dead}</p>
        </li>`;
    })
    .join('');
  listRef.innerHTML = item;
}

createItems(scientists);