import ContactoAPI from "./api/api-contacto.js";
import ContactoUI from "../classes/ContactoUI.js";

// Inicializamos todos los Modales de Bootstrap
const modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));
const modalAgregar = new bootstrap.Modal(document.getElementById("modalAgregar"));
const modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));
const modalExito = new bootstrap.Modal(document.getElementById("modalExito"));

document.addEventListener("DOMContentLoaded", cargarContactos);

async function cargarContactos() {
    const response = await ContactoAPI.obtener();
    ContactoUI.renderizar(response.data);
}

// NUEVA FUNCIÓN: Muestra la palomita verde y la cierra solita
function mostrarExito(mensaje) {
    document.getElementById("exitoMensaje").innerText = mensaje;
    modalExito.show();
    setTimeout(() => {
        modalExito.hide();
    }, 2000); // Se oculta automáticamente después de 2 segundos
}

/* 1. AGREGAR */
document.getElementById("btnGuardar").addEventListener("click", async () => {
    await ContactoAPI.agregar({
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        telefono: document.getElementById("telefono").value, 
        email: document.getElementById("email").value,       
        fecha_nacimiento: document.getElementById("fecha").value,
        id_categoria: document.getElementById("categoria").value
    });

    modalAgregar.hide();
    cargarContactos();
    
    // Limpiamos los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("categoria").value = "";

    mostrarExito("¡Contacto agregado!");
});

/* 2. ACCIONES DE LA TABLA (Eliminar / Editar) */
document.getElementById("tablaContactos").addEventListener("click", (e) => {
    
    /* CLICK EN ELIMINAR */
    if (e.target.classList.contains("eliminar")) {
        // En lugar de confirm(), abrimos el nuevo Modal con estilo
        const id = e.target.dataset.id;
        document.getElementById("deleteId").value = id;
        modalEliminar.show();
    }

    /* CLICK EN EDITAR */
    if (e.target.classList.contains("editar")) {
        // Llenamos los inputs del Modal de Edición
        document.getElementById("editId").value = e.target.dataset.id;
        document.getElementById("editNombre").value = e.target.dataset.nombre;
        document.getElementById("editApellido").value = e.target.dataset.apellido;
        
        // Evitamos que diga "null" o "undefined" si no tenían datos
        document.getElementById("editTelefono").value = (e.target.dataset.telefono === 'null' || e.target.dataset.telefono === 'undefined') ? '' : e.target.dataset.telefono;
        document.getElementById("editEmail").value = (e.target.dataset.email === 'null' || e.target.dataset.email === 'undefined') ? '' : e.target.dataset.email;
        
        document.getElementById("editFecha").value = e.target.dataset.fecha;

        modalEditar.show();
    }
});

/* 3. CONFIRMAR ELIMINAR (Nuevo Botón) */
document.getElementById("btnConfirmarEliminar").addEventListener("click", async () => {
    const id = document.getElementById("deleteId").value;
    await ContactoAPI.eliminar(id);
    modalEliminar.hide();
    cargarContactos();
    mostrarExito("¡Contacto eliminado!");
});

/* 4. ACTUALIZAR */
document.getElementById("btnActualizar").addEventListener("click", async () => {
    await ContactoAPI.actualizar({
        id_contacto: document.getElementById("editId").value,
        nombre: document.getElementById("editNombre").value,
        apellido: document.getElementById("editApellido").value,
        telefono: document.getElementById("editTelefono").value,
        email: document.getElementById("editEmail").value, 
        fecha_nacimiento: document.getElementById("editFecha").value,
        id_categoria: document.getElementById("editCategoria").value || 1
    });

    modalEditar.hide();
    cargarContactos();
    mostrarExito("¡Contacto actualizado!");
});