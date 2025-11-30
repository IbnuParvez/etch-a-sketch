const container = document.querySelector('.container');
console.log('Container found:', container);
const gridSize = 16;

function createGrid(n){
  console.log('Creating grid with size', n);
  for(let i = 0; i < n*n; i++) {
      const div=document.createElement('div');
      div.classList.add('grid-item');
      container.appendChild(div);
  }
  console.log('Grid created, total divs:', container.children.length);
}

createGrid(gridSize);

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('mouseenter', () => { item.style.backgroundColor = 'black'; });
});