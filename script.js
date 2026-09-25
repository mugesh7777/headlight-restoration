/* ========================================
   HERO MOUSE TRACKING (PARALLAX EFFECT)
======================================== */
const heroSection = document.getElementById("home");
const heroPhoto = document.getElementById("heroPhoto");

if (heroSection && heroPhoto) {
    heroSection.addEventListener("mousemove", (e) => {
        if (window.innerWidth > 900) {
            const mouseX = e.clientX / window.innerWidth;
            const movePercentage = (mouseX - 0.5) * -10; 
            heroPhoto.style.transform = `scale(1.15) translateX(${movePercentage}%)`;
        }
    });

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
            formMessage.style.color = "#ffc21a";
            formMessage.textContent = "Please complete all required fields.";
            return;
        }

        // YOUR WHATSAPP NUMBER
        const whatsappNumber = "917092877898";

        const whatsappText = 
            "Hello W Headlight Restoration!\n\n" +
            "I would like to book a service.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Vehicle: " + vehicle + "\n" +
            "Service: " + service + "\n" +
            "Message: " + (message || "No additional message");

        const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);

        // Open WhatsApp in a new tab to send the details
        window.open(whatsappURL, "_blank");

        // Show success message to the client on the website
        formMessage.style.color = "#4CAF50"; // Green color for success
        formMessage.textContent = "Booking successfully submitted!";

        // Reset the form fields after submission
        bookingForm.reset();
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = "";
        }, 5000);
    });
}
