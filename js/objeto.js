
let arreglo_curso = [
    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "1"
    },
    {
        titulo: "CSS", //false
        cantidad: 1,
        id: "2"
    },
    {
        titulo: "JAVASCRIPT", //false
        cantidad: 1,
        id: "3"
    },
    {
        titulo: "VUE JS", //false
        cantidad: 1,
        id: "4"
    },
    {
        titulo: "CSS",
        cantidad: 1,
        id: "7"
    }
]

usuario_curso = {
    {
        titulo: "CSS",
        cantidad: 1,
        id: "3"
    }
}

arreglo_curso.some(curso => curso.id === usuario_curso.id); //true

const curso_actualizado = arregloCarrito.map(curso => {
    if(curso.id === objetoCurso.id){
        curso.cantidad += 1;
        return curso;
    }else{
        return curso;
    }
});

arregloCarrito = [
    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "1"
    },
    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "4"
    },
    {
        titulo: "JAVASCRIPT", //false
        cantidad: 2,
        id: "3"
    },
    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "5"
    },
    {
        titulo: "CSS",
        cantidad: 1,
        id: "7"
    }

]

//filtrado
arregloCarrito = [
    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "1"
    },
    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "4"
    },

]

arregloCarrito = [


    {
        titulo: "HTML", //false
        cantidad: 1,
        id: "1"
    },
    {
        titulo: "JAVASCRIPT", //false
        cantidad: 2,
        id: "3"
    },
    {
        titulo: "BOOTSTRAP", //false
        cantidad: 1,
        id: "3"
    },
    {
        titulo: "JAVASCRIPT", //false
        cantidad: 2,
        id: "3"
    },
    {
        titulo: "CSS",
        cantidad: 1,
        id: "7"
    }

  
]

