const container = document.querySelector('.container');
console.log('Container found:', container);

function createGrid(n){
  console.log('Creating grid with size', n);
  container.innerHTML = ''; // Clear existing grid
  for(let i = 0; i < n*n; i++) {
      const div=document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
  }
  console.log('Grid created, total divs:', container.children.length);
}

createGrid(16);

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('mouseenter', () => { item.style.backgroundColor = 'black'; });
});

const size = document.querySelector('.size')
size.addEventListener('click', () => {
  let inputStr = prompt("What is your size?");
  let input = Math.floor(parseInt(inputStr));
  if (input > 0 && input <= 100) { // reasonable limit
    createGrid(input);
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('mouseenter', () => { item.style.backgroundColor = 'black'; });
    });
    console.log('Event listeners added to new grid items');
  } else {
    console.log('Invalid input, grid not created');
  }
});