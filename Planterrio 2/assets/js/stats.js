
    // --- Stats Section Counter Animation ---

    // Select all elements that contain numbers to be animated
    const counters = document.querySelectorAll('.stat-number'); // Targets all elements with the class 'stat-number'
    let started = false; // Flag to prevent repeated animations

    // Function to start counting animation
    const startCount = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target'); // Get target number from data attribute
            const increment = target / 200; // Calculate small increments

            // Function to increment the number
            const updateCount = () => {
                const current = +counter.innerText; // Get current displayed number

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment); // Increase number smoothly
                    requestAnimationFrame(updateCount); // Continue animation
                } else {
                    counter.innerText = target + "+"; // Display final value with "+"
                }
            };

            updateCount(); // Start updating number
        });
    };

    // Observer to check when the stats section comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) { // If stats section is visible and animation hasn't started
                startCount(); // Start counting animation
                started = true; // Mark animation as started
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(document.querySelector('#stats')); // Observe the stats section
