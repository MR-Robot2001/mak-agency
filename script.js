document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply reveal to headings and cards
    document.querySelectorAll('.lever-card, .philosophy .lead, .hero h1').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Intersection observer callback modification
    const customObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.lever-card, .philosophy .lead, .hero h1').forEach(el => {
        customObserver.observe(el);
    });

    // Form submission handling (Ultra-Reliable GET Protocol)
    const form = document.getElementById('inquiry-form');
    // IMPORTANT: Ensure this is your deployed Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJhJcsIrw5KwP3KDexFCJHtYBiVbso-8fPWXVLchulRVAos7slnEerwnCA9GsQh5Mz/exec';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'TRANSMITTING...';
        btn.disabled = true;

        const formData = new FormData(form);
        const params = new URLSearchParams(formData);
        
        // Final fallback: Use a GET request with query params
        // This bypasses almost all CORS and POST-related security blocks
        const finalUrl = `${SCRIPT_URL}?${params.toString()}`;
        
        fetch(finalUrl, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache'
        })
        .then(() => {
            btn.textContent = 'INQUIRY RECEIVED';
            btn.style.backgroundColor = '#C5A059';
            form.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 5000);
        })
        .catch(() => {
            // Absolute final fallback: Image-based tracking pixel
            const img = new Image();
            img.src = finalUrl;
            
            btn.textContent = 'INQUIRY RECEIVED';
            btn.style.backgroundColor = '#C5A059';
            form.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 5000);
        });
    });
});
