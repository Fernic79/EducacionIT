
// Datos de los productos (Esto simula una base de datos)
const baseDeDatosMandalas = {
    'serenidad': {
        titulo: "Serenidad Eterna",
        precio: "$3.00",
        descripcion: "Este mandala digital fomenta un estado de calma profunda y enfoque mental.",
        imagen: "../img/M35.png",
        color: "Azules y Dorados"
    },
    'fuego': {
        titulo: "Fuego Interior",
        precio: "$3.00",
        descripcion: "Una pieza vibrante diseñada para activar la energía vital y la creatividad.",
        imagen: "../img/M24.png",
        color: "Rojos y Naranjas"
    },
    'cosmos': {
        titulo: "Equilibrio Cósmico",
        precio: "$3.00",
        descripcion: "Representa la conexión entre el individuo y el orden del universo.",
        imagen: "../img/M01.png",
        color: "Violetas y Negros"
    }
};
//Lee el producto seleccionado y modifica las imagenes y textos
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el ID de la URL (ej: ?id=fuego)
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');

    // 2. Buscar los datos del producto
    const producto = baseDeDatosMandalas[productoId];

    if (producto) {
        // 3. Inyectar los datos en el HTML
        document.querySelector('.product-info h1').textContent = producto.titulo;
        document.querySelector('.price').textContent = producto.precio;
        document.querySelector('.product-description p').textContent = producto.description;
        document.getElementById('current-image').src = producto.imagen;
        
        // Actualizar el breadcrumb
        document.querySelector('.breadcrumb').innerHTML = 
            `<a href="index.html">Galería</a> / ${producto.titulo}`;
    } else {
        // Si el producto no existe, redirigir a la galería
        console.error("Producto no encontrado");
        // window.location.href = 'index.html'; 
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica de la Galería de Miniaturas ---
    const mainImage = document.getElementById('current-image');
    const thumbnails = document.querySelectorAll('.thumbnail-list img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Cambiar la fuente de la imagen principal
            mainImage.style.opacity = '0'; // Efecto de desvanecimiento
            
            setTimeout(() => {
                mainImage.src = this.src;
                mainImage.style.opacity = '1';
            }, 200);

            // Actualizar la clase activa
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- 2. Lógica del Selector de Cantidad ---
    const quantityContainer = document.querySelector('.quantity-selector');
    const minusBtn = quantityContainer.querySelector('button:first-child');
    const plusBtn = quantityContainer.querySelector('button:last-child');
    const quantityDisplay = quantityContainer.querySelector('span');

    let currentQty = 1;

    minusBtn.addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            quantityDisplay.textContent = currentQty;
        }
    });

    plusBtn.addEventListener('click', () => {
        currentQty++;
        quantityDisplay.textContent = currentQty;
    });

    // --- 3. Feedback al Añadir al Carrito ---
    const addToCartBtn = document.querySelector('.btn-add');
    addToCartBtn.addEventListener('click', () => {
        const productName = document.querySelector('.product-info h1').textContent;
        
        addToCartBtn.textContent = "¡Añadido!";
        addToCartBtn.style.backgroundColor = "#4B5E40"; // Cambia al verde musgo
        
        console.log(`Añadido al carrito: ${currentQty}x ${productName}`);

        setTimeout(() => {
            addToCartBtn.textContent = "Añadir al Carrito";
            addToCartBtn.style.backgroundColor = "var(--color-accent)";
        }, 2000);
    });
});