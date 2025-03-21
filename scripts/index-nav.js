document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".index-nav a");
    const sections = document.querySelectorAll("section");

    function changeActiveLink() {
        let currentSection = sections[0]; // Default to the first section

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            // Force "Overview" to be active when near the top of the page
            if (window.scrollY < 50) {
                currentSection = sections[0];
            }
            // Otherwise, detect which section is currently active
            else if (sectionTop <= window.innerHeight / 5 && sectionTop + sectionHeight > window.innerHeight / 5) {
                currentSection = section;
            }
        });

        // Remove "active" class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        // Add "active" to the corresponding navigation link
        const activeLink = document.querySelector(`.index-nav a[href="#${currentSection.id}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Run function on scroll
    window.addEventListener("scroll", changeActiveLink);
    changeActiveLink(); // Run once on page load
});
