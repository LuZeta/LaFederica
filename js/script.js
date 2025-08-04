document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('dynamic-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalImage = modal.querySelector('.modal-image');
    const modalDescription = modal.querySelector('.modal-description');
    const closeBtn = modal.querySelector('.close-btn');
  
    // Abrir modal con contenido de la card
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalImage.src = card.dataset.img;
        modalImage.alt = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modal.classList.add('show');
      });
    });
  
    // Cerrar modal al hacer click en la cruz
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
    // Cerrar modal al hacer click fuera del contenido
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });

  console.log("script cargado");
 document.getElementById('toggleGallery').addEventListener('click', function () {
  const gallery = document.getElementById('gallery');
  gallery.classList.toggle('hidden');

  // Cambiar el texto del botón
  if (gallery.classList.contains('hidden')) {
    this.textContent = 'Ver galería';
  } else {
    this.textContent = 'Ocultar galería';
  }
});

//botń formulario
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton-formulario");
  const form = document.getElementById("form-google");

  boton.addEventListener("click", function () {
    form.classList.toggle("mostrar");

    if (form.classList.contains("mostrar")) {
      boton.textContent = "Cerrar formulario";
    } else {
      boton.textContent = "Quiero saber más";
    }
  });
});

