/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const vehicle = document.getElementById("vehicle").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();


    if (name === "" || phone === "" || vehicle === "" || service === "") {

        formMessage.textContent =
            "Please fill in all required fields.";

        formMessage.style.color = "#ff6b6b";

        return;
    }


    /*
       CHANGE THIS NUMBER TO YOUR BUSINESS
       WHATSAPP NUMBER.

       Country code:
       India = 91

       Example:
       919876543210
    */

    const whatsappNumber = "919876543210";


    const whatsappMessage =
        `Hello GlowRestore!%0A%0A` +
        `I would like to book a headlight restoration service.%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Vehicle: ${vehicle}%0A` +
        `Service: ${service}%0A` +
        `Message: ${message}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    formMessage.textContent =
        "Opening WhatsApp...";

    formMessage.style.color = "#f5b942";


    setTimeout(function () {

        window.open(whatsappURL, "_blank");

    }, 700);


});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .gallery-card, .process-step, .about-content, .booking-form"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    element.classList.add("animate");

    observer.observe(element);

});
