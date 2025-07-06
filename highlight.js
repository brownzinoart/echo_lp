// Highlight animation observer for all .highlight elements
window.addEventListener('DOMContentLoaded', function() {
    const highlightElements = document.querySelectorAll('.highlight');
    console.log('Found highlight elements:', highlightElements.length);
    
    if (highlightElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    console.log('Highlight animation triggered for:', entry.target.textContent);
                }
            });
        }, { threshold: 0.5 });
        
        highlightElements.forEach(element => {
            observer.observe(element);
            console.log('Observing highlight element:', element.textContent);
        });
    } else {
        console.log('No .highlight elements found');
    }
}); 