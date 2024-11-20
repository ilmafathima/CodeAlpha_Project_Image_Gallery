let currentTab = 'all'; 
let currentIndex = -1; 
let currentImages = []; 

function openTab(tabName) {
  const tabs = document.querySelectorAll('.photo-grid');
  tabs.forEach(tab => tab.classList.remove('active'));

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) selectedTab.classList.add('active');

  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => link.classList.remove('active'));

  const activeTabButton = document.querySelector(`.tab-link[onclick="openTab('${tabName}')"]`);
  if (activeTabButton) activeTabButton.classList.add('active');

  currentTab = tabName;
  currentImages = Array.from(selectedTab.querySelectorAll('img'));
  currentIndex = -1;


  closeModal();
}

function openModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  modal.style.display = 'flex';
  modalImg.src = img.src;

  currentImages = Array.from(document.querySelector(`#${currentTab}`).querySelectorAll('img'));
  currentIndex = currentImages.indexOf(img);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function changeSlide(direction) {
  if (!currentImages.length) return;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = currentImages.length - 1;
  } else if (currentIndex >= currentImages.length) {
    currentIndex = 0;
  }

  const modalImg = document.getElementById('modal-img');
  modalImg.src = currentImages[currentIndex].src;
}


window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
});
