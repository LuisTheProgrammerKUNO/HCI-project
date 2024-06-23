console.log("Script loaded and running!");

// Array of image URLs
const images = [
    'pictures/26ea11e5-eba7-4315-97fd-3a4ebc5d7b06.jpg', 
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

function redirectToHome(event) {
    event.preventDefault(); // Prevent the form from submitting
    window.location.href = "home_page.html"; // Redirect to the home page
}

function redirectTo(url) {
    window.location.href = url;
}



// functions.js

function showAmmoDescription(item) {
    const descriptionContainer = document.getElementById('description_ammo');
    const ammoImage = document.getElementById('ammoImage');
    const ammoDescription = document.getElementById('ammoDescription');
    
    let descriptionContent;
    let imageUrl;

    switch(item) {
        case 'ammo1':
            descriptionContent = "Details about Ammo 1.";
            imageUrl = "pictures/448363055_1300293187596570_1545715654887943954_n.jpg"; // Replace with actual image path
            break;
        case 'ammo2':
            descriptionContent = "Details about Ammo 2.";
            imageUrl = "path/to/ammo2_image.jpg";
            break;
        case 'ammo3':
            descriptionContent = "Details about Ammo 3.";
            imageUrl = "path/to/ammo3_image.jpg";
            break;
        case 'ammo4':
            descriptionContent = "Details about Ammo 4.";
            imageUrl = "path/to/ammo4_image.jpg";
            break;
        case 'ammo5':
            descriptionContent = "Details about Ammo 5.";
            imageUrl = "path/to/ammo5_image.jpg";
            break;
        case 'ammo6':
            descriptionContent = "Details about Ammo 6.";
            imageUrl = "path/to/ammo6_image.jpg";
            break;
        default:
            descriptionContent = "Select an item on the left to see the description here.";
            imageUrl = "";
    }

    ammoDescription.innerHTML = descriptionContent;

    if (imageUrl) {
        ammoImage.src = imageUrl;
        ammoImage.style.display = "block";
    } else {
        ammoImage.style.display = "none";
    }
}



function showMedsDescription(item) {
    const descriptionContainer = document.getElementById('description_meds');
    const medsImage = document.getElementById('medsImage');
    const medsDescription = document.getElementById('medsDescription');
    
    let descriptionContent;
    let imageUrl;

    switch(item) {
        case 'meds1':
            descriptionContent = "Details about Meds 1.";
            imageUrl = "pictures/448723723_350978601123768_2029159058522980214_n.jpg"; // Replace with actual image path
            break;
        case 'meds2':
            descriptionContent = "Details about Meds 2.";
            imageUrl = "path/to/meds2_image.jpg";
            break;
        case 'meds3':
            descriptionContent = "Details about Meds 3.";
            imageUrl = "path/to/meds3_image.jpg";
            break;
        case 'meds4':
            descriptionContent = "Details about Meds 4.";
            imageUrl = "path/to/meds4_image.jpg";
            break;
        case 'meds5':
            descriptionContent = "Details about Meds 5.";
            imageUrl = "path/to/meds5_image.jpg";
            break;
        case 'meds6':
            descriptionContent = "Details about Meds 6.";
            imageUrl = "path/to/meds6_image.jpg";
            break;
        default:
            descriptionContent = "Select an item on the left to see the description here.";
            imageUrl = "";
    }

    medsDescription.innerHTML = descriptionContent;

    if (imageUrl) {
        medsImage.src = imageUrl;
        medsImage.style.display = "block";
    } else {
        medsImage.style.display = "none";
    }
}