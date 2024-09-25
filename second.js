// Get modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Open modal when an image is clicked
const images = document.querySelectorAll('.gallery-img');
images.forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Close the modal
closeBtn.onclick = function () {
    modal.style.display = 'none';
};

// Close the modal when clicking outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
