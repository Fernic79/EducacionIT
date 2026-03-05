
document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destination = this.href;
        
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            window.location.href = destination;
        }, 500);
    });
});