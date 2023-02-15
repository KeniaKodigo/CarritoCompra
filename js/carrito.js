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

    //Indicamos en la seccion de la tabla que va estar de escucha al boton eliminar un curso (X)
    carrito.addEventListener('click', eliminarCurso);

    //Reseteando el arreglo para vaciar el carrito
    vaciarCarrito.addEventListener('click', () => {
        arregloCarrito = [];
        limpiarTabla();
    });

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
    //console.log(curso);

    const objetoCurso = {
        //asignando atributo y valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        cantidad: 1,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    console.log(objetoCurso);

    /** haciendo una copia del objeto para mandarlo a un arreglo 
     * spread => (...) => Operado con el cual generamos copias de un arreglo
    */
    

    /**
     * Validando si el curso ya existe en el arreglo, actualizar la cantidad del curso y no crear una nueva posicion
     * 
     * some() => metodo de arreglo, en base a una condicion me devuelve true si uno de los elementos cumple la condicion
     */

    const existe_curso = arregloCarrito.some(curso => curso.id === objetoCurso.id); //true or false
    if(existe_curso){
        //code..
        const curso_actualizado = arregloCarrito.map(curso => {
            if(curso.id === objetoCurso.id){
                curso.cantidad += 1;
                return curso;
            }
            return curso;
        });
        
        //iterando el arreglo haciendo una copia del curso que actualizamos del arreglo
        arregloCarrito = [...curso_actualizado];

    }else{
        arregloCarrito = [...arregloCarrito, objetoCurso];
        
    }

    //console.log(arregloCarrito);
    dibujarTabla();
}

/** metodo para iterar el arregloCarrito e imprimirlo en la tabla html */
function dibujarTabla(){
    limpiarTabla();

    arregloCarrito.map(curso => {
        //creando un elemento de html (<tr>)

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src=${curso.imagen} width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        //agregando el elemento fila al html
        contenedorCarrito.appendChild(fila);
    })
}

//metodo para eliminar iteraciones repetidas de los cursos que hay en el arreglo
function limpiarTabla(){
    //eliminando hijos del html
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

//metodo para eliminar un curso en base a su ID
function eliminarCurso(event){
    if(event.target.classList.contains('borrar-curso')){
        const cursoId = event.target.getAttribute('data-id'); //5 //guardando los id de los cursos seleccionado en la tabla
        console.log(cursoId);
        /**
         * filter => filtra elementos de un arreglo para generar uno nuevo
         */

        arregloCarrito = arregloCarrito.filter(curso => curso.id != cursoId);
        dibujarTabla();
        console.log(arregloCarrito);
    }
}



