// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuBtn.querySelector('i');
    const navItems = document.querySelectorAll('.nav-links li');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle menu icon
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
            
            // Animate menu items with delay
            navItems.forEach((item, index) => {
                if (navLinks.classList.contains('active')) {
                    item.style.transitionDelay = `${index * 0.1}s`;
                } else {
                    item.style.transitionDelay = '0s';
                }
            });
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                
                // Reset transition delays
                navItems.forEach(item => {
                    item.style.transitionDelay = '0s';
                });
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                
                // Reset transition delays
                navItems.forEach(item => {
                    item.style.transitionDelay = '0s';
                });
            }
        });

        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                
                // Reset transition delays
                navItems.forEach(item => {
                    item.style.transitionDelay = '0s';
                });
            }
        });
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Service Section Animations
    if (document.querySelector('.service-section')) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2
        });

        document.querySelectorAll('.service-section').forEach(section => {
            observer.observe(section);
        });
    }

    // Initialize AOS if it exists
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
});

// Website Visit Counter functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize visit count from localStorage or set to 0 if not exists
    let visitCount = parseInt(localStorage.getItem('totalVisits')) || 0;
    const visitCounter = document.querySelector('.website-visits');

    // Function to animate counter
    const animateCounter = (counter, target) => {
        let current = parseInt(counter.innerText);
        const increment = Math.ceil(target / 20); // Faster animation

        const updateCount = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                counter.innerText = current;
                requestAnimationFrame(updateCount);
            }
        };
        updateCount();
    };

    // Increment visit count only once per session
    if (!sessionStorage.getItem('visitedThisSession')) {
        visitCount++;
        localStorage.setItem('totalVisits', visitCount);
        sessionStorage.setItem('visitedThisSession', 'true');
    }

    // Update counter display
    if (visitCounter) {
        visitCounter.setAttribute('data-target', visitCount);
        animateCounter(visitCounter, visitCount);
    }
}); 