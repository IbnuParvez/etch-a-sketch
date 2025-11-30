const container = document.querySelector('.container');
const gridSize = 16;

function createGrid(n){
  for(let i = 0; i < n*n; i++) {
      let gridItem=document.createElement('div');
      gridItem.classList.add('div');
      container.appendChild(gridItem);
  }
}

createGrid(gridSize);