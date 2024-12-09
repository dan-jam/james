const script = window.location.pathname.split('/').pop(); 
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    const hrefFile = link.pathname.split('/').pop(); 
    if (hrefFile === script) {
        link.classList.add('active'); 
    }
});
