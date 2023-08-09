document.addEventListener('DOMContentLoaded', function() {

    const divboton = document.getElementById('div-btn');
    const boton = document.getElementById('btn')

    divboton.addEventListener('click', function() {
        alert('Hola! Soy el Div');
        
    });

    boton.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('Hola!');
    });

});
