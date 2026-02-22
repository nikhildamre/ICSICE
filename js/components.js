// ICSICE Conference Website Components

// Mobile hamburger menu toggle function
function toggleMobileMenu() {
    const navigation = document.querySelector('.main-navigation');
    const hamburger = document.querySelector('.mobile-menu-toggle');
    
    // Toggle the mobile menu
    if (navigation.classList.contains('mobile-menu-open')) {
        navigation.classList.remove('mobile-menu-open');
        hamburger.classList.remove('active');
    } else {
        navigation.classList.add('mobile-menu-open');
        hamburger.classList.add('active');
    }
}

// Header HTML template
const headerHTML = `
<!-- Top Header Bar with College Info and Social Links -->
<div class="top-header-bar">
    <div class="container">
        <div class="top-header-content">
            <!-- College Logo and Name -->
            <div class="college-info">
                <img src="assets/clg logo.png" alt="Vasantdada Patil Pratishthan's College of Engineering & Visual Arts" 
                     class="college-logo">
            </div>
            <!-- Social Media Links -->
            <div class="social-links">
                <span>Follow Us:</span>
                <a href="https://www.facebook.com/Vasantdadapatilpratishthancollege" target="_blank" class="social-link"><i class="fa fa-facebook"></i></a>
                <a href="https://www.linkedin.com/company/vasantdada-patil-college/" target="_blank" class="social-link"><i class="fa fa-linkedin"></i></a>
                <a href="https://www.instagram.com/vasantdadapatilcollege/" target="_blank" class="social-link"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/@pvppcoemumbai3334" target="_blank" class="social-link"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    </div>
</div>

<!-- Main Navigation Bar -->
<div class="header-two">
    <div class="container">
        <div class="menu-two">
            <!-- Conference Logo -->
            <div class="logo-wrap">
                <div class="logo">
                    <h1 class="site-title">
                        <a href="index.html" title="ICSICE" rel="home">ICSICE-2026</a>
                    </h1>
                </div>
            </div>
            
            <!-- Navigation Menu -->
            <nav class="main-navigation" role="navigation" aria-label="Primary Menu">
                <div class="main-navbar">
                    <div class="menu-home-container">
                        <ul class="menu">
                            <li class="menu-item nav-item">
                                <a href="committee.html" class="nav-link navbar-box">COMMITTEE</a>
                            </li>
                            <li class="menu-item nav-item">
                                <a href="registration.html" class="nav-link navbar-box">REGISTRATION</a>
                            </li>
                            <li class="menu-item nav-item">
                                <a href="submission.html" class="nav-link navbar-box">SUBMISSION GUIDELINES</a>
                            </li>
                            <li class="menu-item nav-item">
                                <a href="registered-paper.html" class="nav-link navbar-box">REGISTERED PAPER</a>
                            </li>
                            <li class="menu-item nav-item">
                                <a href="scope.html" class="nav-link navbar-box">SCOPE OF PAPERS</a>
                            </li>
                            <li class="menu-item nav-item">
                                <a href="venue.html" class="nav-link navbar-box">CONFERENCE VENUE</a>
                            </li>
                            <li class="menu-item nav-item">
                                <a href="contact.html" class="nav-link navbar-box">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <!-- Mobile Hamburger Menu Button -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</div>
`;

// Footer HTML template
const footerHTML = `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <!-- Widget 1: Quick Links -->
            <div class="footer-widget">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="committee.html"><i class="fa fa-angle-right"></i>Committee</a></li>
                    <li><a href="submission.html"><i class="fa fa-angle-right"></i>Submission Guidelines</a></li>
                    <li><a href="registered-paper.html"><i class="fa fa-angle-right"></i>Registered Paper</a></li>
                    <li><a href="scope.html"><i class="fa fa-angle-right"></i>Scope of Papers</a></li>
                    <li><a href="venue.html"><i class="fa fa-angle-right"></i>Conference Venue</a></li>
                </ul>
            </div>
            
            <!-- Widget 2: Venue -->
            <div class="footer-widget">
                <h2>Venue</h2>
                <div class="venue-info">
                    <p style="margin-bottom: 5px;">
                        <strong><i class="fa fa-map-marker" style="color: #aedfffff; margin-right: 8px;"></i>Vasantdada Patil Educational Complex</strong>
                    </p>
                    <p style="margin-bottom: 15px; line-height: 1.6; color: #cccccc;">
                        Eastern Express Highway, Sion, Mumbai, Maharashtra 400022
                    </p>
                    <p style="margin-top: 15px;">
                        <strong style="color: #ffd700;"><i class="fa fa-desktop" style="color: #aedfffff; margin-right: 8px;"></i>Mode: Online / Offline</strong>
                    </p>
                </div>
            </div>
            
            <!-- Widget 3: Contacts -->
            <div class="footer-widget">
                <h2>Contact Us</h2>
                <div>
                    <p>
                        <strong style="display: block; margin-bottom: 5px;">Dr. Rais Mulla</strong>
                        <i class="fa fa-phone" style="transform: scaleX(-1);"></i>
                        <a href="tel:+918485863406">+91 84858 63406</a>
                    </p>
                    <p>
                        <strong style="display: block; margin-bottom: 5px;">Dr. Mahendra Pawar</strong>
                        <i class="fa fa-phone" style="transform: scaleX(-1);"></i>
                        <a href="tel:+919890838047">+91 98908 38047</a>
                    </p>
                    <p>
                        <strong style="display: block; margin-bottom: 5px;">Ms. Harshini</strong>
                        <i class="fa fa-phone" style="transform: scaleX(-1);"></i>
                        <a href="tel:+916374565412">+91 63745 65412</a>
                    </p>
                    <p style="margin-top: 15px;">
                        <strong style="display: block; margin-bottom: 8px;">Email Support</strong>
                        <i class="fa fa-envelope"></i>
                        <a href="mailto:icsice@pvppcoe.ac.in">icsice@pvppcoe.ac.in</a><br>
                        <i class="fa fa-envelope" style="margin-top: 5px; display: inline-block;"></i>
                        <a href="mailto:icsiceconference@gmail.com">icsiceconference@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Copyright Section -->
        <div class="copyright">
            <p>&copy; 2026 ICSICE Conference | Website by <strong style="color: #ffd700;">moment-capturers</strong></p>
        </div>
    </div>
</footer>
`;

// Main ICSICE object
const ICSICE = {
    // Initialize components
    init: function() {
        this.loadHeaderFooter();
        this.setupNavigation();
        this.setupAnimations();
        this.setupMobileMenu();
        this.setupActiveNavigation();
    },
    
    // Load header and footer
    loadHeaderFooter: function() {
        const headerElement = document.getElementById('header');
        const footerElement = document.getElementById('footer');
        
        if (headerElement) {
            headerElement.innerHTML = headerHTML;
        }
        
        if (footerElement) {
            footerElement.innerHTML = footerHTML;
        }
    },
    
    // Navigation setup
    setupNavigation: function() {
        // Smooth scrolling for anchor links
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
    },
    
    // Mobile menu setup
    setupMobileMenu: function() {
        // Close mobile menu when clicking on a navigation link
        const navLinks = document.querySelectorAll('.navbar-box');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const navigation = document.querySelector('.main-navigation');
                const hamburger = document.querySelector('.mobile-menu-toggle');
                if (navigation && hamburger) {
                    navigation.classList.remove('mobile-menu-open');
                    hamburger.classList.remove('active');
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navigation = document.querySelector('.main-navigation');
            const hamburger = document.querySelector('.mobile-menu-toggle');
            
            if (navigation && hamburger) {
                const isClickInsideNav = navigation.contains(event.target);
                const isClickOnHamburger = hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnHamburger && navigation.classList.contains('mobile-menu-open')) {
                    navigation.classList.remove('mobile-menu-open');
                    hamburger.classList.remove('active');
                }
            }
        });
    },
    
    // Active navigation highlighting
    setupActiveNavigation: function() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.navbar-box');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage || 
                (currentPage === '' && href === 'index.html') ||
                (currentPage === 'index.html' && href === 'index.html')) {
                item.classList.add('active');
            }
        });
    },
    
    // Animation setup
    setupAnimations: function() {
        // Fade in animations for content sections
        const sections = document.querySelectorAll('section, .content-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    },
    
    // Utility function to handle image loading errors
    handleImageError: function(img) {
        const fallback = img.nextElementSibling;
        if (fallback) {
            img.style.display = 'none';
            fallback.style.display = 'flex';
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    ICSICE.init();
    
    // Handle hamburger menu animation
    const hamburger = document.querySelector('.mobile-menu-toggle');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});