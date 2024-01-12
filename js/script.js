// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Nueva función para aplicar efecto de ampliación
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            openModal(image.src);
        });
    });

    // Añadir evento de clic al modal para cerrarlo
    const modal = document.getElementById('modal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Añadir evento de clic al botón de cierre del modal
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
});
