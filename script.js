
document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }, 1500);

    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initSkillsAnimation();
    initSmoothScrolling();
});


function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

  
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (scrollPos >= top && scrollPos <= bottom) {
                
                navLinks.forEach(link => link.classList.remove('active'));
               
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });
}


function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const titles = ['Web Developer', 'Frontend Developer', 'Fullstack Developer', 'UI/UX Enthusiast'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    typeWriter();
}


function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}


function initSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillCard = entry.target;
                const skillLevel = parseInt(skillCard.getAttribute('data-skill'));
                const progressCircle = skillCard.querySelector('.progress-ring-progress');
                
                if (progressCircle) {
                    const circumference = 2 * Math.PI * 52; 
                    const strokeDasharray = (skillLevel / 100) * circumference;
                    
                    setTimeout(() => {
                        progressCircle.style.strokeDasharray = `${strokeDasharray} ${circumference}`;
                    }, 500);
                }
            }
        });
    }, {
        threshold: 0.5
    });

    skillCards.forEach(card => {
        skillsObserver.observe(card);
    });
}


function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1));
        });
    });


    const footerLinks = document.querySelectorAll('.footer-nav a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                scrollToSection(targetId.substring(1));
            }
        });
    });
}


function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function downloadResume() {
   
    const link = document.createElement('a');
    link.href = '#'; 
    link.download = 'Vijay_Resume.pdf';
    
   
    alert('Resume download would start here. Please add your actual resume file to the project and update the file path in the downloadResume function.');
    
    
}


window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});


window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
            alert(`Learn more about ${serviceTitle} service. This would typically open a detailed page or modal.`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.skill-card, .service-card, .project-card, .education-item, .stat');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        fadeObserver.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightText = document.querySelector('.footer-copyright p');
    if (copyrightText) {
        copyrightText.textContent = `© ${currentYear} Vijay. All rights reserved.`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .service-btn, .cta-btn, .scroll-to-top');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
          
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});


const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn, .service-btn, .cta-btn, .scroll-to-top {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);