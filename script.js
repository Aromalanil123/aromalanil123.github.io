// Wait for the DOM to fully load before executing scripts
document.addEventListener("DOMContentLoaded", () => {

    /* ====================================================
       Navigation Bar Scroll Effect
       ==================================================== */
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /* ====================================================
       Mobile Menu Toggle
       ==================================================== */
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    // Toggle menu
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Icon change (bars to times)
        const icon = menuIcon.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuIcon.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    /* ====================================================
       Scroll Reveal Animation
       ==================================================== */
    // Helper function to handle intersection observer
    const revealElements = document.querySelectorAll(".reveal");

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    };

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it comes into view
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    /* ====================================================
       Active Nav Link on Scroll
       ==================================================== */
    const sections = document.querySelectorAll("section.section");
    
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Add a small offset so it triggers smoothly
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
    });

});
