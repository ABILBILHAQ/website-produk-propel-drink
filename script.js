// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
document.querySelector('.nav-links').classList.toggle('active');
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');
let currentTestimonial = 0;

function showTestimonial(index) {
testimonials.forEach(testimonial => testimonial.classList.remove('active'));
dots.forEach(dot => dot.classList.remove('active'));

testimonials[index].classList.add('active');
dots[index].classList.add('active');
currentTestimonial = index;
}

// Auto slide testimonials
setInterval(() => {
currentTestimonial = (currentTestimonial + 1) % testimonials.length;
showTestimonial(currentTestimonial);
}, 5000);

// Dot click events
dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
showTestimonial(index);
});
});

// Add to Cart Animation
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
button.addEventListener('click', function() {
this.innerHTML = '<i class="fas fa-check"></i>';
this.style.backgroundColor = 'var(--success)';

setTimeout(() => {
    this.innerHTML = '<i class="fas fa-plus"></i>';
    this.style.backgroundColor = 'var(--primary)';
}, 1500);
});
});
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});