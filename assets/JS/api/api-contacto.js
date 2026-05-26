export default class ContactoAPI{

    static API =
    "https://cristianoliver.com/backend-contactos/index.php";

    static async obtener(){

        const response = await fetch(
            `${this.API}?accion=contactos-completos`
        );

        return await response.json();
    }

    static async agregar(data){

        const response = await fetch(
            `${this.API}?accion=agregar-contacto`,
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)
            }
        );

        return await response.json();
    }

    static async actualizar(data){

        const response = await fetch(
            `${this.API}?accion=actualizar-contacto`,
            {
                method:"PUT",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)
            }
        );

        return await response.json();
    }

    static async eliminar(id){

        const response = await fetch(
            `${this.API}?accion=eliminar-contacto`,
            {
                method:"DELETE",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    id_contacto:id
                })
            }
        );

        return await response.json();
    }

}
