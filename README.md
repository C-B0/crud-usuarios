# CRUD de Usuarios – Node.js + Express + SQL Server

Proyecto backend CRUD (Create, Read, Update, Delete) desarrollado con **Node.js**, **Express** y **SQL Server**, enfocado en buenas prácticas de conexión a base de datos, uso de consultas parametrizadas y arquitectura por capas.

Este proyecto está pensado como **proyecto de portafolio / CV** para demostrar fundamentos sólidos de backend.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* SQL Server 2022
* mssql (driver para SQL Server)
* dotenv

---

## 📁 Estructura del proyecto

```
backend/
 ├── config/
 │   └── db.js
 ├── controllers/
 │   └── userController.js
 ├── routes/
 │   └── userRoutes.js
 ├── server.js
.env.example
package.json
```

---

## ⚙️ Configuración del proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/C-B0/crud-usuarios.git
cd crud-usuarios
```

---

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

### 3️⃣ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```env
DB_USER=sa
DB_PASSWORD=admin
DB_SERVER=localhost
DB_NAME=crud_usuarios
PORT=3000
```

---

### 4️⃣ Base de datos

Crear la base de datos y la tabla ejecutando el siguiente script en **SQL Server Management Studio**:

```sql
CREATE DATABASE crud_usuarios;
GO

USE crud_usuarios;
GO

CREATE TABLE users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

---

### 5️⃣ Ejecutar el proyecto

```bash
npm start
```

El servidor se ejecutará en:

```
http://localhost:3000
```

---

## 📌 Endpoints disponibles

### 🔹 Obtener usuarios

```
GET /api/users
```

---

### 🔹 Crear usuario

```
POST /api/users
```

Body (JSON):

```json
{
  "name": "Juan Perez",
  "email": "juan@test.com"
}
```

---

### 🔹 Actualizar usuario

```
PUT /api/users/:id
```

Body (JSON):

```json
{
  "name": "Juan Perez",
  "email": "juan.perez@test.com"
}
```

---

### 🔹 Eliminar usuario

```
DELETE /api/users/:id
```

---

## ✅ Buenas prácticas aplicadas

* Arquitectura por capas (routes / controllers / config)
* Uso de variables de entorno
* Consultas SQL parametrizadas (prevención de SQL Injection)
* Manejo básico de errores HTTP (400, 404, 500)

---

## 📌 Autor

**Sebastian Velasquez**
Egresado de Desarrollo de Software – ISIL

GitHub: [https://github.com/C-B0](https://github.com/C-B0)

---

## 📝 Notas

Este proyecto es parte de mi portafolio personal y está enfocado en demostrar conocimientos fundamentales de backend con Node.js y bases de datos relacionales.
