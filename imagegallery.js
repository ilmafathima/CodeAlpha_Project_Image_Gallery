let currentIndex = 0;
let images = [];

function openTab(tabName) {
  const grids = document.querySelectorAll('.photo-grid');
  const links = document.querySelectorAll('.tab-link');

  grids.forEach(grid => {
    grid.classList.remove('active');
  });

  links.forEach(link => {
    link.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

function openModal(imgElement) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  modal.style.display = "flex";
  modalImg.src = imgElement.src;

  const allImages = document.querySelectorAll('.photo-grid img');
  images = Array.from(allImages).map(img => img.src);
  currentIndex = images.indexOf(imgElement.src);
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById('modal-img').src = images[currentIndex];
}
