/* Hamburger Menu */

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


/* Dark / Light Mode */

const themeToggle = document.getElementById("theme-toggle");

/* Load Saved Theme */

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    document.body.classList.remove(
        "bg-gradient-to-br",
        "from-slate-900",
        "via-purple-900",
        "to-slate-900",
        "text-white"
    );

    document.body.classList.add("bg-white", "text-black");

    themeToggle.innerHTML = "☀️";

} else {

    themeToggle.innerHTML = "🌙";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        document.body.classList.remove(
            "bg-gradient-to-br",
            "from-slate-900",
            "via-purple-900",
            "to-slate-900",
            "text-white"
        );

        document.body.classList.add(
            "bg-white",
            "text-black"
        );

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        document.body.classList.remove(
            "bg-white",
            "text-black"
        );

        document.body.classList.add(
            "bg-gradient-to-br",
            "from-slate-900",
            "via-purple-900",
            "to-slate-900",
            "text-white"
        );

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme", "dark");
    }

});


/* Project Modal */

const modal = document.getElementById("modal");

document.querySelectorAll(".openModal")
.forEach(btn => {

    btn.addEventListener("click", () => {

        modal.classList.remove("hidden");

    });

});

document.getElementById("closeModal")
.addEventListener("click", () => {

    modal.classList.add("hidden");

});

/* Close Modal When Clicking Outside */

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.add("hidden");

    }

});


/* Contact Form Validation */

const form = document.getElementById("contact-form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {

        errorMsg.textContent =
            "Please enter a valid email address.";

        successMsg.textContent = "";

        return;
    }

    errorMsg.textContent = "";

    successMsg.textContent =
        "Message sent successfully! ✅";

    form.reset();

});


/* Back To Top Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.remove("hidden");

    } else {

        topBtn.classList.add("hidden");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* Typing Animation */

const text =
    "Frontend Developer | Java Enthusiast | Problem Solver";

const typingText =
    document.getElementById("typing-text");

let index = 0;

function typeEffect() {

    if (index < text.length) {

        typingText.textContent +=
            text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}

typeEffect();


/* Fade In Animation */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document
.querySelectorAll(".fade-section")
.forEach(section => {

    observer.observe(section);

});