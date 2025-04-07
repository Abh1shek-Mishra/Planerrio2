 
    // --- Our Process Section Hover Effects ---

    // Select all elements with the class 'process-box'
    const boxes = document.querySelectorAll(".process-box"); // Targets all elements with the class 'process-box'

    // Add hover effect to each box
    boxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)"; // Slightly enlarge the box
            this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Add shadow effect
        });

        box.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)"; // Restore original size
            this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; // Restore original shadow
        });
    });
