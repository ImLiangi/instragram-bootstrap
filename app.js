// Botones
const gridBtn = document.getElementById('gridBtn');
const singleBtn = document.getElementById('singleBtn');

// Vistas
const gridView = document.getElementById('gridView');
const singleView = document.getElementById('singleView');

// GRID VIEW
gridBtn.addEventListener('click', () => {
  gridView.classList.remove('d-none');
  singleView.classList.add('d-none');

  gridBtn.classList.add('active');
  singleBtn.classList.remove('active');
});

// SINGLE VIEW
singleBtn.addEventListener('click', () => {
  singleView.classList.remove('d-none');
  gridView.classList.add('d-none');

  singleBtn.classList.add('active');
  gridBtn.classList.remove('active');
});
