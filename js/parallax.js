document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    document.querySelectorAll('.speed1').forEach(element => {
        element.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
    
    document.querySelectorAll('.speed2').forEach(element => {
        element.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
    
    document.querySelectorAll('.speed4').forEach(element => {
        element.style.transform = `translateY(${scrollY * 0.4}px)`;
    });
    
    document.querySelectorAll('.speed6').forEach(element => {
        element.style.transform = `translateY(${scrollY * 0.6}px)`;
    });
    
});