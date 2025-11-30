const container = document.querySelector('.container');
console.log('Container found:', container);

function createGrid(n){
  console.log('Creating grid with size', n);
  container.innerHTML = ''; // Clear existing grid
  for(let i = 0; i < n * n; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${100 / n}%`;
    gridItem.style.height = `${100 / n}%`;
    container.appendChild(gridItem);
  }
  console.log('Grid created, total divs:', container.children.length);
}

function addHoverListeners() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => { item.style.backgroundColor = 'black'; });
  });
}

createGrid(16);
addHoverListeners();

const size = document.querySelector('.size')
size.addEventListener('click', () => {
  let inputStr = prompt("What is your size?");
  let input = Math.floor(parseInt(inputStr));
  if (input > 0 && input <= 100) { // reasonable limit
    createGrid(input);
    addHoverListeners();
    console.log('Event listeners added to new grid items');
  } else {
    console.log('Invalid input, grid not created');
  }
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.backgroundColor = 'transparent';
  });
});