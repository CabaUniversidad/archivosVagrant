document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Here you would typically send the data to a server
            // For demonstration, we'll just log it and show an alert
            console.log({
                nombre,
                email,
                telefono,
                mensaje
            });
            
            alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
            contactForm.reset();
        });
    }
    
    // Category Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // Function to filter products
    function filterProducts() {
        const selectedCategory = document.querySelector('.tab-btn.active').dataset.category;
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        productCards.forEach(card => {
            const category = card.dataset.category;
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productDesc = card.querySelector('p').textContent.toLowerCase();
            
            // Check if the product matches the selected category and search term
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            const matchesSearch = productName.includes(searchTerm) || productDesc.includes(searchTerm);
            
            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Tab buttons click event
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update the category filter dropdown to match
                if (categoryFilter) {
                    categoryFilter.value = this.dataset.category;
                }
                
                // Filter products
                filterProducts();
            });
        });
    }
    
    // Category filter change event
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            
            // Update the tab buttons to match
            tabBtns.forEach(btn => {
                if (btn.dataset.category === selectedCategory) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Filter products
            filterProducts();
        });
    }
    
    // Search functionality
    if (searchBtn) {
        searchBtn.addEventListener('click', filterProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                filterProducts();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });
});