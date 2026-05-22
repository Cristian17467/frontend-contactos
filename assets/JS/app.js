import ContactoAPI from "./api/contactoAPI.js";
import ContactoUI from "../classes/ContactoUI.js";
import { confirmar } from "../modules/helpers.js";

const modalEditar =
new bootstrap.Modal(
    document.getElementById("modalEditar")
);

const modalAgregar =
new bootstrap.Modal(
    document.getElementById("modalAgregar")
);

document.addEventListener(
    "DOMContentLoaded",
    cargarContactos
);

async function cargarContactos(){

    const response =
    await ContactoAPI.obtener();

    ContactoUI.renderizar(response.data);

}

/* AGREGAR */

document.getElementById("btnGuardar")
.addEventListener("click",async()=>{

    await ContactoAPI.agregar({

        nombre:
        document.getElementById("nombre").value,

        apellido:
        document.getElementById("apellido").value,

        fecha_nacimiento:
        document.getElementById("fecha").value,

        id_categoria:
        document.getElementById("categoria").value

    });

    modalAgregar.hide();

    cargarContactos();

});

/* TABLA */

document.getElementById("tablaContactos")
.addEventListener("click",async(e)=>{

    /* ELIMINAR */

    if(e.target.classList.contains("eliminar")){

        const id =
        e.target.dataset.id;

        const ok =
        confirmar("¿Eliminar contacto?");

        if(ok){

            await ContactoAPI.eliminar(id);

            cargarContactos();

        }

    }

    /* EDITAR */

    if(e.target.classList.contains("editar")){

        document.getElementById("editId").value =
        e.target.dataset.id;

        document.getElementById("editNombre").value =
        e.target.dataset.nombre;

        document.getElementById("editApellido").value =
        e.target.dataset.apellido;

        document.getElementById("editFecha").value =
        e.target.dataset.fecha;

        modalEditar.show();

    }

});

/* ACTUALIZAR */

document.getElementById("btnActualizar")
.addEventListener("click",async()=>{

    await ContactoAPI.actualizar({

        id_contacto:
        document.getElementById("editId").value,

        nombre:
        document.getElementById("editNombre").value,

        apellido:
        document.getElementById("editApellido").value,

        fecha_nacimiento:
        document.getElementById("editFecha").value,

        id_categoria:1

    });

    modalEditar.hide();

    cargarContactos();

});