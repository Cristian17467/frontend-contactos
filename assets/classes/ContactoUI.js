export default class ContactoUI {

    static renderizar(contactos) {

        // 1. Agregamos esto para espiar qué datos reales llegan del backend
        console.log("Datos de la base de datos:", contactos);

        const tabla = document.getElementById("tablaContactos");

        tabla.innerHTML = "";

        contactos.forEach(contacto => {

            tabla.innerHTML += `
            <tr>
                <td>${contacto.id_contacto}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.apellido}</td>
                <td>${contacto.fecha_nacimiento}</td>
                
                <td>${contacto.nombre_categoria}</td> 

                <td>
                    <i
                        class="bi bi-pencil-square text-warning action-btn editar"
                        data-id="${contacto.id_contacto}"
                        data-nombre="${contacto.nombre}"
                        data-apellido="${contacto.apellido}"
                        data-fecha="${contacto.fecha_nacimiento}">
                    </i>

                    <i
                        class="bi bi-trash-fill text-danger action-btn eliminar"
                        data-id="${contacto.id_contacto}">
                    </i>
                </td>
            </tr>
            `;
        });

    }

}