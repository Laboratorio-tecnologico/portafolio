// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón y el body
    const button = document.querySelector('.card-footer button');
    const body = document.body;
    const card = document.querySelector('.card');

    // Agregar un evento al botón para cambiar el modo
    button.addEventListener('click', function() {
        // Cambiar la clase 'night-mode' para activar el modo nocturno
        body.classList.toggle('night-mode');

        // Añadir una animación a la tarjeta
        card.classList.add('animate');

        // Después de la animación, quitar la clase 'animate' para la siguiente interacción
        setTimeout(() => {
            card.classList.remove('animate');
        }, 500);  // El tiempo de la animación (500 ms)
    });
});


