const image = document.getElementById('image');
const button = document.getElementById('changeImageBtn');


const images = ['car1.jpg', 'car2.jpg', 'car3.jpg'];
let currentIndex = 0;

button.addEventListener('click', () => {
    
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});