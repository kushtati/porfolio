// ============================================
// Navigation Menu Mobile
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu mobile
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animation hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            
            // Ajouter classe scrolled et ombre au scroll
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }
            
            // Cacher/afficher navbar au scroll (optionnel)
            if (currentScroll > lastScroll && currentScroll > 500) {
                // Scroll vers le bas - cacher navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scroll vers le haut - afficher navbar
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
});

// ============================================
// Active Link on Scroll
// ============================================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Smooth Scroll
// ============================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll Reveal Animation - Version avec inverse
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajouter la classe active quand l'élément entre dans la vue
            entry.target.classList.add('active');
        } else {
            // Retirer la classe active quand l'élément sort de la vue (scroll inverse)
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Ajouter les classes d'animation aux éléments
document.addEventListener('DOMContentLoaded', () => {
    // Cartes de compétences
    document.querySelectorAll('.skill-category').forEach((el, index) => {
        el.classList.add('scroll-animate');
        el.style.transitionDelay = `${index * 0.1}s`;
        scrollObserver.observe(el);
    });
    
    // Cartes de projets
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('scroll-zoom');
        el.style.transitionDelay = `${index * 0.15}s`;
        scrollObserver.observe(el);
    });
    
    // Section À propos - image à gauche, texte à droite
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    if (aboutImage) {
        aboutImage.classList.add('scroll-slide-left');
        scrollObserver.observe(aboutImage);
    }
    if (aboutText) {
        aboutText.classList.add('scroll-slide-right');
        scrollObserver.observe(aboutText);
    }
    
    // Section Contact
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    if (contactInfo) {
        contactInfo.classList.add('scroll-slide-left');
        scrollObserver.observe(contactInfo);
    }
    if (contactForm) {
        contactForm.classList.add('scroll-slide-right');
        scrollObserver.observe(contactForm);
    }
    
    // Éléments de la liste de compétences
    document.querySelectorAll('.skill-item').forEach((el, index) => {
        el.classList.add('scroll-animate');
        el.style.transitionDelay = `${index * 0.05}s`;
        scrollObserver.observe(el);
    });
    
    // Titres de section
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('scroll-animate');
        scrollObserver.observe(el);
    });
    
    // Info items dans about
    document.querySelectorAll('.info-item').forEach((el, index) => {
        el.classList.add('scroll-animate');
        el.style.transitionDelay = `${index * 0.1}s`;
        scrollObserver.observe(el);
    });
});

// Observer les éléments à animer (ancienne méthode - commentée)
/*
const animatedElements = document.querySelectorAll(
    '.skill-category, .project-card, .about-content, .contact-content'
);
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
*/

// ============================================
// Skills Progress Animation
// ============================================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 200);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ============================================
// Form Handling
// ============================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('Veuillez entrer une adresse email valide', 'error');
        return;
    }
    
    // Envoyer via Formspree
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showNotification('Message envoyé avec succès! Je vous répondrai bientôt.', 'success');
            contactForm.reset();
        } else {
            showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
        }
    } catch (error) {
        showNotification('Erreur de connexion. Veuillez réessayer.', 'error');
    }
});

// ============================================
// Notification Toast
// ============================================
function showNotification(message, type = 'success') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles inline pour la notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        fontWeight: '500',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        zIndex: '9999',
        animation: 'slideInRight 0.4s ease',
        maxWidth: '300px'
    });
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Retirer après 4 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 4000);
}

// Ajouter les animations CSS pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// ============================================
// Typing Effect pour le Hero
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Démarrer l'effet après un court délai
    setTimeout(typeWriter, 500);
}

// ============================================
// Cursor Effect (optionnel)
// ============================================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
Object.assign(cursor.style, {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid var(--primary-color)',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: '9999',
    transition: 'transform 0.2s ease',
    display: 'none' // Désactivé par défaut, activez en retirant cette ligne
});

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Agrandir le curseur au survol des liens
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// ============================================
// Lazy Loading Images
// ============================================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// Console Message
// ============================================
console.log('%c👋 Bienvenue sur mon portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%c✨ Développé avec passion', 'font-size: 14px; color: #8b5cf6;');
