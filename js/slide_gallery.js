const mainImage = document.querySelector('.main-image img');
const otherImages = document.querySelectorAll('.other-image img');

otherImages.forEach(image => {
    image.addEventListener('click', () => {
        mainImage.src = image.src;
        mainImage.alt = image.alt;
    });
});

