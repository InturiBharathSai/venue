let slideIndex = 0;
let slideInterval;

// Function to show slides and start auto slideshow
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and mark the corresponding dot as active
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    // Automatically change slides every 4 seconds
    slideInterval = setTimeout(showSlides, 4000);
}

// Function to change slide manually
function plusSlides(n) {
    clearTimeout(slideInterval); // Stop auto slide change
    slideIndex += n - 1;
    showSlides(); // Show new slide
}

// Function to go to a specific slide
function currentSlide(n) {
    clearTimeout(slideInterval); // Stop auto slide change
    slideIndex = n - 1;
    showSlides(); // Show specific slide
}

// Initialize slideshow on page load
showSlides();

function sendEmail(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    var mailto_link = `mailto:sales@gemmedpharma.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    
    window.location.href = mailto_link;
}