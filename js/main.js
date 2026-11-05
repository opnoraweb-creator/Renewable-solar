/* =========================================
   SOLAR SYSTEM - MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // ---------- MOBILE NAVIGATION ----------

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll(".main-nav a");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        // Close menu after clicking a navigation link

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });

        // Close menu when clicking outside

        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                mainNav.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    // ---------- AUTOMATIC CURRENT YEAR ----------

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    // ---------- HEADER SCROLL EFFECT ----------

    const header = document.getElementById("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    // ---------- ACTIVE NAVIGATION LINK ----------

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const sectionId = entry.target.id;

                        navLinks.forEach(function (link) {

                            const isActive =
                                link.getAttribute("href") === "#" + sectionId;

                            link.classList.toggle(
                                "active-link",
                                isActive
                            );

                        });

                    }

                });

            },

            {
                rootMargin: "-25% 0px -65% 0px"
            }

        );

        sections.forEach(function (section) {

            observer.observe(section);

        });

    }


    // ---------- EXTERNAL IMAGE ERROR HANDLING ----------

    const images = document.querySelectorAll("img");

    images.forEach(function (img) {

        img.addEventListener("error", function () {

            img.classList.add("image-error");

        });

    });


    // ---------- CONSOLE INFORMATION ----------

    console.log(
        "Solar System Renewable Energy Website Initialized."
    );

});