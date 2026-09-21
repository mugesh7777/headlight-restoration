/* =========================
MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

```
navMenu.classList.toggle("active");
```

});

/* =========================
CLOSE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

```
link.addEventListener("click", function () {

    navMenu.classList.remove("active");

});
```

});

/* =========================
BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

```
event.preventDefault();

const name =
    document.getElementById("name").value.trim();

const phone =
    document.getElementById("phone").value.trim();

const vehicle =
    document.getElementById("vehicle").value.trim();

const service =
    document.getElementById("service").value;

const message =
    document.getElementById("message").value.trim();


if (!name || !phone || !vehicle || !service) {

    document.getElementById("formMessage").textContent =
        "Please fill in all required fields.";

    document.getElementById("formMessage").style.color =
        "#ff5252";

    return;
}


/*
    CHANGE THIS NUMBER.

    Example:
    India +91 98765 43210

    Use:
    919876543210
*/

const whatsappNumber = "919876543210";


const text =
    "Hello GlowRestore!%0A%0A" +

    "I want to book a headlight restoration service.%0A%0A" +

    "Name: " + encodeURIComponent(name) + "%0A" +

    "Phone: " + encodeURIComponent(phone) + "%0A" +

    "Vehicle: " + encodeURIComponent(vehicle) + "%0A" +

    "Service: " + encodeURIComponent(service) + "%0A" +

    "Message: " + encodeURIComponent(message);


const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    text;


document.getElementById("formMessage").textContent =
    "Opening WhatsApp...";

document.getElementById("formMessage").style.color =
    "#ffc107";


setTimeout(function () {

    window.open(whatsappURL, "_blank");

}, 500);
```

});
