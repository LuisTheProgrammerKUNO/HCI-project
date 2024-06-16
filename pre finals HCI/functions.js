console.log("Script loaded and running!");

// Array of image URLs
const images = [
    'pictures/26ea11e5-eba7-4315-97fd-3a4ebc5d7b06.jpg', // Replace with your actual image paths
    'pictures/Screenshot (23).jpg',
    'pictures/ed62a6ba-5093-4e13-8260-0c41434d06d1.jpg'
];

// Variable to track the current index of the image
let currentIndex = 0;

// Function to change the background based on arrow click direction
function changeBackground(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    }
    
    const backgroundElement = document.querySelector('.background_home');
    backgroundElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Apply blur only to the first image
    if (currentIndex === 0) {
        backgroundElement.style.filter = 'blur(2px)';
        document.querySelector('.title-container').style.display = 'block'; // Show the text
    } else {
        backgroundElement.style.filter = 'none';
        document.querySelector('.title-container').style.display = 'none'; // Hide the text
    }
}

