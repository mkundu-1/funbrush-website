document.addEventListener('DOMContentLoaded', () => {
    // Mouse parallax effect for background blobs
    document.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.gradient-blob');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.01;
            const x = (window.innerWidth - mouseX * speed) / 100;
            const y = (window.innerHeight - mouseY * speed) / 100;
            blob.style.transform = `translate(${x}px, ${y}px) scale(${1 + speed})`;
        });
    });

    // Reveal sections on scroll
    const revealSections = () => {
        const sections = document.querySelectorAll('.reveal-section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections();

    const quotes = [
        "Where Gaming Meets Mystery",
        "The Future of Play is Here",
        "Level Up Your Reality",
        "Game Different",
        "Beyond Traditional Gaming",
        "Play Smarter, Not Harder",
        "The Next Evolution of Gaming",
        "Where Innovation Meets Play"
    ];

    const typewriterElement = document.getElementById('typewriter');
    let currentQuoteIndex = 0;

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function typeWriter(text) {
        for (let i = 0; i < text.length; i++) {
            typewriterElement.textContent += text.charAt(i);
            await sleep(50); // Adjust typing speed here
        }
    }

    async function eraseText() {
        const text = typewriterElement.textContent;
        for (let i = text.length; i > 0; i--) {
            typewriterElement.textContent = text.substring(0, i - 1);
            await sleep(30); // Adjust erasing speed here
        }
    }

    async function cycleQuotes() {
        while (true) {
            await typeWriter(quotes[currentQuoteIndex]);
            await sleep(3000); // Time to read the quote
            await eraseText();
            await sleep(500); // Pause between quotes
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }
    }

    cycleQuotes();

    // Waitlist form handling
    const waitlistButton = document.querySelector('.pulse-button');
    const emailInput = document.querySelector('.mysterious-input');
    const successMessage = document.querySelector('.success-message');

    waitlistButton?.addEventListener('click', async () => {
        const email = emailInput.value;
        if (!email) return;

        waitlistButton.style.opacity = '0.5';
        waitlistButton.disabled = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        emailInput.value = '';
        successMessage.classList.remove('hidden');
        successMessage.classList.add('visible');
        
        setTimeout(() => {
            waitlistButton.style.opacity = '1';
            waitlistButton.disabled = false;
            successMessage.classList.remove('visible');
            setTimeout(() => successMessage.classList.add('hidden'), 300);
        }, 3000);
    });
}); 