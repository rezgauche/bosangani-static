(function () {
    document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.slide-in');
        
        function checkSlideIn() {
            const triggerBottom = window.innerHeight / 1.38;
            
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                
                if (cardTop < triggerBottom) {
                    card.classList.add('visible');
                }
            });
        }
        
        // Trigger checkSlideIn on page load and scroll
        window.addEventListener('scroll', checkSlideIn);
        checkSlideIn(); // Trigger once on page load
    });
})();
    