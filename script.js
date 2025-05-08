// 1. Event Handling 🎈

// Button click
document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
});

// Hover effects
document.getElementById('hoverElement').addEventListener('mouseover', () => {
    document.getElementById('hoverElement').style.backgroundColor = 'lightblue';
});
document.getElementById('hoverElement').addEventListener('mouseout', () => {
    document.getElementById('hoverElement').style.backgroundColor = '';
});

// Keypress detection
document.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Double-click action
document.getElementById('secretAction').addEventListener('dblclick', () => {
    alert('Secret double-click action triggered!');
});

// 2. Interactive Elements 🎮

// Button that changes text or color
document.getElementById('changeButton').addEventListener('click', () => {
    const button = document.getElementById('changeButton');
    button.textContent = 'Welcome to our Webbsite!';
    button.style.backgroundColor = 'green';
});

// Image gallery/slideshow
let currentImageIndex = 0;
const images = ['/12.jpg', '/11.jpg', '/13.jpg', '/13.jpg']; // Ensure these paths match the actual image locations
document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
});

// Tabs or accordion-style content
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
        document.getElementById(tab.dataset.target).style.display = 'block';
    });
});

// Bonus: Add animation using JS
document.getElementById('animateButton').addEventListener('click', () => {
    const box = document.getElementById('animatedBox');
    const animationImage = document.getElementById('animationImage');
    box.style.transition = 'transform 0.5s';
    box.style.transform = 'translateX(100px)';
    animationImage.style.display = 'block'; // Show the image when animation is triggered
});

// 3. Form Validation 📋✅

// Required field checks
document.getElementById('form').addEventListener('submit', (event) => {
    const nameField = document.getElementById('name');
    if (!nameField.value) {
        alert('Name is required!');
        event.preventDefault();
    }
});

// Email format validation
document.getElementById('email').addEventListener('input', () => {
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        emailField.style.borderColor = 'red';
    } else {
        emailField.style.borderColor = '';
    }
});

// Password rules
document.getElementById('password').addEventListener('input', () => {
    const passwordField = document.getElementById('password');
    if (passwordField.value.length < 8) {
        passwordField.style.borderColor = 'red';
    } else {
        passwordField.style.borderColor = '';
    }
});

// Bonus: Real-time feedback while typing
document.getElementById('feedbackInput').addEventListener('input', () => {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `You typed: ${document.getElementById('feedbackInput').value}`;
});

