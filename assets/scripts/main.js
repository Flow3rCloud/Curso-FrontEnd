//Obtener los elementos de la clase .close
let links = document.querySelectorAll('.close');

//Recorrerlos y agregar un evento click
links.forEach(function(link) {
    link.addEventListener('click', function(evento) {
        evento.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove('animate__animated', 'animate__fadeInDown');
        content.classList.add('animate__animated', 'animate__fadeOutUp');
        
        setTimeout(function() {
            location.href = '../index.html';
        }, 600);
        return false;
    })
});
