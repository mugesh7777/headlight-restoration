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
