/* =========================================
   SOLAR SYSTEM - WHATSAPP ENQUIRY
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    // Company WhatsApp Number
    const companyWhatsApp = "919799006872";

    if (!enquiryForm) return;

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get customer details

        const name = document
            .getElementById("customerName")
            .value.trim();

        const phone = document
            .getElementById("customerPhone")
            .value.trim();

        const location = document
            .getElementById("customerLocation")
            .value.trim();

        const requirement = document
            .getElementById("solarType")
            .value;

        const message = document
            .getElementById("customerMessage")
            .value.trim();

        // Validation

        if (!name || !phone || !location || !requirement) {

            alert("Please fill all required fields.");

            return;

        }

        if (!/^[0-9]{10}$/.test(phone)) {

            alert("Please enter a valid 10 digit mobile number.");

            return;

        }

        // Create WhatsApp message

        const whatsappMessage = `
Namaste Solar System Renewable Energy Pvt. Ltd.

I want to enquire about Solar Services.

Customer Details:

Name: ${name}

Mobile: ${phone}

Location: ${location}

Requirement: ${requirement}

Message: ${message || "Not provided"}

I am interested in solar installation and would like to know more about a free site visit in my area.

Please contact me.

Thank You.
        `.trim();

        // Encode message

        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp URL

        const whatsappURL =
            `https://wa.me/${companyWhatsApp}?text=${encodedMessage}`;

        // Open WhatsApp

        const whatsappWindow = window.open(
            whatsappURL,
            "_blank"
        );

        // Popup fallback

        if (!whatsappWindow) {

            window.location.href = whatsappURL;

        }

    });

});