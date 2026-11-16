//botón Scroll up
const botonArriba = document.querySelector(".scroll-up");

// //permite visibilidad del botón Scroll-up
function mostrarBotonArriba() {
    if (window.scrollY < 400) {
        botonArriba.hidden = true; //oculta el boton
    } else {
        botonArriba.hidden = false; // muestra el botón
    }
}

//ejecutando la funcion al cargar la página
mostrarBotonArriba();

//interceptar el evento scroll de la ventana
//para determinar si el botón se muestra u oculta
window.addEventListener("scroll", mostrarBotonArriba);

// 4. Reutilizar un visor para las 12 fotos de Testimonios.
// const visor = document.querySelector('#visor-fotos');
// if (visor) {
//     const botonesFoto = document.querySelectorAll('.abrir-foto');
//     const imagenGrande = document.querySelector('#visor-imagen');
//     const tituloVisor = document.querySelector('#visor-titulo');
//     for (const boton of botonesFoto) {
//         boton.addEventListener('click', function () {
//             const foto = boton.querySelector('img');
//             const tarjeta = boton.closest('.clientes-item');
//             const nombre = tarjeta.querySelector('h3').textContent;
//             // Copiamos la foto elegida antes de abrir el mismodiálogo.
//             imagenGrande.src = foto.src;
//             tituloVisor.textContent = nombre;
//             visor.showModal();
//         });
//     }
// }


//botón Hamburguesa
const botonMenu = document.querySelector(".nav-menu-toggle");

const menu = document.querySelector(".nav-menu");

//interceptar el evento click del botón Hamburguesa
botonMenu.addEventListener("click", function(){
    menu.classList.toggle("active")
});