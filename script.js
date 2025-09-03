// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(targetTab) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        const activeContent = document.getElementById(targetTab);
        
        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const activeButton = document.querySelector('.tab-button.active');
        const currentIndex = Array.from(tabButtons).indexOf(activeButton);
        
        let newIndex = currentIndex;
        
        // Arrow key navigation
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            newIndex = currentIndex - 1;
        } else if (e.key === 'ArrowRight' && currentIndex < tabButtons.length - 1) {
            newIndex = currentIndex + 1;
        }
        
        // Number key navigation (1-6 for projects 0-5)
        if (e.key >= '1' && e.key <= '6') {
            newIndex = parseInt(e.key) - 1;
        }
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < tabButtons.length) {
            const targetTab = tabButtons[newIndex].getAttribute('data-tab');
            switchTab(targetTab);
        }
    });

    // Smooth scrolling for better UX
    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Scroll to top when switching tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(smoothScrollToTop, 100);
        });
    });
});
