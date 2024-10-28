const links = document.querySelectorAll('.navbar a');
links.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if(targetSection){
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
