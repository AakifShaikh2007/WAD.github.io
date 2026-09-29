/* =========================================
   ALPHABET SOLUTION
   JAVASCRIPT
========================================= */

document.documentElement.classList.add("js");


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("open");

            if (nav.classList.contains("open")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }

        });


        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                menuBtn.innerHTML = "☰";

            });

        });

    }


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );


    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================
       COUNTER ANIMATION
    ===================================== */

    const counters =
        document.querySelectorAll("[data-count]");


    const counterObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter = entry.target;

                    const target =
                        parseInt(
                            counter.getAttribute("data-count")
                        );


                    let current = 0;

                    const duration = 1300;

                    const step =
                        Math.max(
                            1,
                            Math.ceil(
                                target / (duration / 20)
                            )
                        );


                    const timer =
                        setInterval(function () {

                            current += step;


                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }


                            counter.textContent =
                                current + "+";

                        }, 20);


                    observer.unobserve(counter);

                });

            },

            {
                threshold: 0.5
            }

        );


    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });


    /* =====================================
       PRODUCT FILTER
    ===================================== */

    const filterButtons =
        document.querySelectorAll(".filter");

    const products =
        document.querySelectorAll(".product");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            products.forEach(function (product) {

                if (
                    filter === "all" ||
                    product.classList.contains(filter)
                ) {

                    product.style.display = "block";

                    setTimeout(function () {

                        product.style.opacity = "1";
                        product.style.transform =
                            "translateY(0)";

                    }, 20);

                } else {

                    product.style.opacity = "0";
                    product.style.transform =
                        "translateY(15px)";

                    setTimeout(function () {

                        product.style.display = "none";

                    }, 250);

                }

            });

        });

    });


    /* =====================================
       CONTACT FORM
    ===================================== */

    const form =
        document.getElementById("contactForm");


    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const phone =
                    document.getElementById("phone").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const service =
                    document.getElementById("service").value;

                const message =
                    document.getElementById("message").value.trim();


                const formMessage =
                    document.getElementById("formMessage");


                if (!name || !phone) {

                    formMessage.textContent =
                        "Please enter your name and phone number.";

                    return;

                }


                /*
                    CHANGE THIS NUMBER
                    TO YOUR REAL WHATSAPP NUMBER.

                    Example:
                    India +91 98765 43210
                    becomes:
                    919876543210
                */

                const whatsappNumber =
                    "919876543210";


                const whatsappText =
                    "Hello Alphabet Solution,%0A%0A" +

                    "Name: " +
                    encodeURIComponent(name) +

                    "%0APhone: " +
                    encodeURIComponent(phone) +

                    "%0AEmail: " +
                    encodeURIComponent(email) +

                    "%0AService: " +
                    encodeURIComponent(service) +

                    "%0AMessage: " +
                    encodeURIComponent(message);


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    whatsappText;


                formMessage.textContent =
                    "Opening WhatsApp...";


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }


    /* =====================================
       CURSOR GLOW
    ===================================== */

    const cursorGlow =
        document.querySelector(".cursor-glow");


    if (cursorGlow) {

        document.addEventListener(
            "mousemove",
            function (event) {

                cursorGlow.style.left =
                    event.clientX + "px";

                cursorGlow.style.top =
                    event.clientY + "px";

            }
        );

    }


});