// Add click event listeners to all "Learn More" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.learn-more');
    const demoButtons = document.querySelectorAll('.demo-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const productName = card.querySelector('h3').textContent;
            alert(`Thank you for your interest in ${productName}! A representative will contact you soon.`);
        });
    });

    // Add click event listeners to demo buttons
    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const toolCard = button.closest('.tool-card');
            const toolName = toolCard.querySelector('h3').textContent;
            alert(`Thank you for requesting a demo of ${toolName}! Our team will contact you shortly to schedule a demonstration.`);
        });
    });

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card, .tool-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}); 