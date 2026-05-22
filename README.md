# 📘 Gestión de Contactos - Frontend Web

Aplicación Web moderna para la gestión de contactos utilizando una arquitectura basada en consumo de APIs REST.

El sistema permite:

- 📋 Mostrar contactos en una tabla dinámica
- ➕ Agregar registros
- ✏️ Actualizar registros
- 🗑️ Eliminar registros
- 🔍 Consumir APIs REST públicas
- 💎 Interfaz moderna Glassmorphism
- 📱 Diseño responsive
- ⚡ Uso de JavaScript Modular + OOP
- 🎨 Bootstrap 5 + Bootstrap Icons
- 🌐 Deploy en Github Pages

---

# 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 5
- Bootstrap Icons
- Glassmorphism UI
- Github Pages
- API REST
- Programación Orientada a Objetos (OOP)
- Módulos JavaScript

---

# 📂 Estructura del Proyecto

```bash
frontend-contactos/
│
├── index.html
├── README.md
├── favicon.ico
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── img/
│   │   └── favicon.ico
│   │
│   └── js/
│       ├── app.js
│       │
│       ├── api/
│       │   └── ContactoAPI.js
│       │
│       ├── classes/
│       │   └── ContactoUI.js
│       │
│       └── modules/
│           └── helpers.js

```
---

# 🌐 API REST utilizada

La aplicación consume las siguientes APIs públicas:

GET
https://cristianoliver.com/backend-contactos/index.php?accion=contactos-completos
POST
https://cristianoliver.com/backend-contactos/index.php?accion=agregar-contacto
PUT
https://cristianoliver.com/backend-contactos/index.php?accion=actualizar-contacto
DELETE
https://cristianoliver.com/backend-contactos/index.php?accion=eliminar-contacto

---

# ⚙️ Funcionalidades
- ✅ Mostrar contactos

- La aplicación obtiene todos los contactos desde la API REST y los muestra en una tabla responsive.

---

# ➕ Agregar contactos

- Se utiliza un botón que abre una ventana modal para registrar nuevos contactos.

---

# ✏️ Actualizar contactos

- Cada registro tiene un ícono para editar información utilizando una ventana modal.

---

# 🗑️ Eliminar contactos

- Cada registro tiene un botón de eliminación con confirmación previa.

---

# 💎 Diseño Glassmorphism

- La interfaz utiliza:

- Transparencias
- Blur effects
- Sombras modernas
- Gradientes
- Responsive Design

---

# 🧠 Programación Orientada a Objetos

- El proyecto implementa:

- Clase API
- ContactoAPI

- Encargada de consumir las APIs REST.

- Clase UI
- ContactoUI

- Encargada de renderizar los elementos visuales.

- Helpers
- helpers.js

Funciones auxiliares reutilizables.

---

# 📦 Instalación local

- 1️⃣ Clonar repositorio
- git clone https://github.com/TU-USUARIO/frontend-contactos.git
- 2️⃣ Abrir proyecto

- Abrir con:

- VS Code
- Live Server
- 3️⃣ Ejecutar

- Abrir:

- index.html

---

# 🌍 Deploy en Github Pages
- Activar Github Pages

- Ir a:

- Settings
- → Pages
- → Deploy from branch
- → main
- → root
- → Save
- 🔗 URL del proyecto
- https://TU-USUARIO.github.io/frontend-contactos/

---

# 📸 Características visuales

- ✅ Navbar moderna
- ✅ Footer profesional
- ✅ Tabla responsive
- ✅ Modales Bootstrap
- ✅ Glassmorphism Premium
- ✅ Diseño adaptable
- ✅ Bootstrap Icons
- ✅ Interfaz elegante

---

# 👨‍💻 Datos del Programador
- Nombre
- Cristian Oliver Cortez
- Carrera
- Ingeniería en Sistemas Computacionales

---

# 📄 Licencia

- Proyecto académico desarrollado con fines educativos.