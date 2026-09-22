/* ========================================
   HERO MOUSE TRACKING (PARALLAX EFFECT)
======================================== */
const heroSection = document.getElementById("home");
const heroPhoto = document.getElementById("heroPhoto");

if (heroSection && heroPhoto) {
    heroSection.addEventListener("mousemove", (e) => {
        // Only run the interactive effect on screens larger than mobile devices
        if (window.innerWidth > 900) {
            // Find where the mouse is horizontally as a decimal between 0 and 1
            const mouseX = e.clientX / window.innerWidth;
            
            // Map the decimal so the center of the screen is 0
            // Moving mouse left gives a negative value, moving right gives a positive value
            // We multiply by -10 to limit the movement to 5% left or right, inverting it so it feels natural
            const movePercentage = (mouseX - 0.5) * -10; 
            
            // Apply the transform to pan the image dynamically
            heroPhoto.style.transform = `scale(1.15) translateX(${movePercentage}%)`;
        }
    });

    // Reset the image to perfectly centered when the mouse leaves the hero section
    heroSection.addEventListener("mouseleave", () => {
        if (window.innerWidth > 900) {
            heroPhoto.style.transform = `scale(1.15) translateX(0%)`;
        }
    });
}

/* ========================================
   MOBILE MENU
======================================== */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("open");
    });

    document.querySelectorAll("#mainNav a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("open");
        });
    });
}

/* ========================================
   WHATSAPP BOOKING FORM
======================================== */
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const vehicle = document.getElementById("vehicle").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !phone || !vehicle || !service) {
            formMessage.textContent = "Please complete all required fields.";
            return;
        }

        /*
            =================================
            CHANGE THIS NUMBER
            =================================
            Example:
            India: 919876543210
        */
        const whatsappNumber = "919876543210";

        const whatsappText = 
            "Hello W Headlight Restoration!\n\n" +
            "I would like to book a service.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Vehicle: " + vehicle + "\n" +
            "Service: " + service + "\n" +
            "Message: " + (message || "No additional message");

        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);

        formMessage.textContent = "Opening WhatsApp...";
        window.open(whatsappURL, "_blank");
    });
}
