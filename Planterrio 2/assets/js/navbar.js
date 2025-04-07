document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const closeBtn = document.querySelector(".close-btn");
    const dropdownParents = document.querySelectorAll(".dropdown-parent");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        hamburgerMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
    });

    document.addEventListener("click", (event) => {
        if (!hamburgerMenu.contains(event.target) && !hamburger.contains(event.target)) {
            hamburgerMenu.classList.remove("active");
        }
    });

    dropdownParents.forEach(parent => {
        parent.addEventListener("click", (event) => {
            event.stopPropagation();
            dropdownParents.forEach(p => {
                if (p !== parent) {
                    p.classList.remove("active");
                }
            });
            parent.classList.toggle("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            dropdownParents.forEach(parent => {
                parent.classList.remove("active");
            });
        }
    });
});