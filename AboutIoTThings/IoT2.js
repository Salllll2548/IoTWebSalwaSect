document.addEventListener('DOMContentLoaded', function() {

    const toggleHeader = document.querySelector('.careerH');
    const contentSection = document.querySelector('.career');

    
    toggleHeader.addEventListener('click', function() {
    
        contentSection.classList.toggle('show');
        
        toggleHeader.classList.toggle('active');
    });
});