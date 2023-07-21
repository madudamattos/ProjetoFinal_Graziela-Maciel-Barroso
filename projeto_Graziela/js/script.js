// pop up para os links 
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupLinks = document.querySelectorAll('.popup-link');

function showPopup(description) {
  popupContent.innerText = description;
  popup.classList.add('active');
}

function hidePopup() {
  popup.classList.remove('active');
}

popupLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    const description = link.getAttribute('data-description');
    showPopup(description);
  });

  link.addEventListener('mouseout', () => {
    hidePopup();
  });
});

// galeria

const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const closeBtn = document.getElementById('close-btn');
const galleryItems = document.querySelectorAll('.item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    overlayImg.src = imgSrc;
    overlay.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});