/** Asignacion de variables */

const carrito = document.getElementById('carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let arregloCarrito = [];

/** APARTADO DE METODOS */
cargarEventos();

function cargarEventos(){
    /**
     * agregar un curso
     * eliminar un curso
     * vaciar el carrito de cursos
     */

    //Indicamos que en la seccion de los cursos va realizar lo que tengamos en el metodo agregarCurso()
    listaCursos.addEventListener('click', agregarCurso);

}

//metodo para agregar cursos
function agregarCurso(event){
    //Evitando que el hipervinculo no redireccione
    event.preventDefault();

    //Validar si la clase 'agregar-carrito' existe, si la clase existe que me mande los elementos del curso
    //classList.contains
    if(event.target.classList.contains('agregar-carrito')){
        //true
        //si la clase 'agregar-carrito' existe, delvoveme los elementos del contenedor
        const cursoSeleccionado = event.target.parentElement.parentElement;
        //console.log(cursoSeleccionado);
        leerCurso(cursoSeleccionado);
    }

    //si la clase no existe me devuelve false
}

//metodo para convertir el curso en objeto y enviarlo a un arreglo
function leerCurso(curso){
    console.log(curso);

    const objetoCurso = {
        //asignando atributo y valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        cantidad: 1,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    console.log(objetoCurso);
}




