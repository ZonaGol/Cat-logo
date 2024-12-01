function mostrarGaleria(camisetaId, imagenes) {
    console.log('Evento mostrarGaleria capturado:', camisetaId, imagenes);
    // Limpiar cualquier contenido anterior
    const imagenesGaleria = document.getElementById('imagenes-galeria');
    imagenesGaleria.innerHTML = ''; // Limpiar el contenido previo

    // Mostrar todas las imágenes disponibles en la galería
    imagenes.forEach((imagen, index) => {
        let img = new Image();
        img.src = imagen; // La ruta ya debe estar completa
        img.alt = `Imagen ${index + 1} de ${camisetaId}`;
        img.classList.add('miniatura'); // Añadir una clase para las miniaturas
        img.onclick = function () {
            mostrarImagenGrande(imagen); // Mostrar la imagen seleccionada más grande
        };
        imagenesGaleria.appendChild(img);
    });

    // Mostrar el modal
    const modal = document.getElementById('galeria-modal');
    modal.style.display = 'flex';
}

// Filtrar camisetas según el texto del buscador
function filtrarCamisetas() {
    const buscador = document.getElementById('buscador').value.toLowerCase();
    const camisetas = document.querySelectorAll('.camiseta');

    camisetas.forEach(camiseta => {
        const nombre = camiseta.querySelector('h2').textContent.toLowerCase();
        if (nombre.includes(buscador)) {
            camiseta.style.display = ''; // Mostrar si coincide
        } else {
            camiseta.style.display = 'none'; // Ocultar si no coincide
        }
    });
}

function cerrarGaleria() {
    // Ocultar el modal
    const modal = document.getElementById('galeria-modal');
    modal.style.display = 'none';

    // Eliminar cualquier imagen secundaria ampliada
    const imagenGrande = document.getElementById('imagen-grande');
    if (imagenGrande) {
        imagenGrande.remove(); // Eliminar la imagen ampliada
    }
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const imagenGrande = document.getElementById('imagen-grande');
        if (imagenGrande) {
            imagenGrande.remove(); // Eliminar la imagen ampliada
        }
    }
});

