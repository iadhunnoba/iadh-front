# Documentación de Endpoints - IADH Backend

Esta documentación detalla todos los endpoints disponibles en la API, organizados por módulos.

**Base URL:** `http://localhost:3000` (o la URL de producción correspondiente)

---

## 🔐 Autenticación (`/auth`)

### 1. Iniciar Sesión (Login)
*   **Endpoint:** `POST /auth/login`
*   **Descripción:** Autentica a un usuario y devuelve un token JWT.
*   **Body (JSON):**
    ```json
    {
      "username": "usuario@ejemplo.com",
      "password": "mi_password_segura"
    }
    ```
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "message": "Ok",
      "userInfo": {
        "id": "uuid",
        "username": "usuario@ejemplo.com",
        "role": "admin | profesor | estudiante",
        "name": "Nombre",
        "surname": "Apellido"
      },
      "token": "JWT_TOKEN_HERE"
    }
    ```

### 2. Cambiar Contraseña
*   **Endpoint:** `POST /auth/change-password`
*   **Autenticación:** Requiere JWT (`auth` header).
*   **Body (JSON):**
    ```json
    {
      "oldPassword": "password_actual",
      "newPassword": "nuevo_password"
    }
    ```
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "message": "Password changed!"
    }
    ```

---

## 👥 Usuarios (`/users`)
*Requieren autenticación JWT y rol `admin` o `profesor`.*

### 1. Obtener todos los usuarios
*   **Endpoint:** `GET /users`
*   **Respuesta Exitosa (200 OK):** Array de objetos `User`.

### 2. Obtener lista de estudiantes (con paginación y filtros)
*   **Endpoint:** `GET /users/students`
*   **Query Parameters (Opcionales):**
    *   `page`: Número de página (default: 1)
    *   `limit`: Elementos por página (default: 10)
    *   `search`: Búsqueda general (nombre, apellido, username, ID)
    *   `name`: Filtrar por nombre
    *   `surname`: Filtrar por apellido
    *   `email`: Filtrar por correo (username)
    *   `studentIdNumber`: Filtrar por carnet de estudiante
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "data": [...],
      "pagination": {
        "total": 100,
        "page": 1,
        "limit": 10,
        "totalPages": 10,
        "hasNextPage": true,
        "hasPreviousPage": false
      }
    }
    ```

### 3. Obtener usuario por ID
*   **Endpoint:** `GET /users/:id`
*   **Respuesta Exitosa (200 OK):** Objeto `User`.

### 4. Crear nuevo usuario
*   **Endpoint:** `POST /users`
*   **Body (JSON):**
    ```json
    {
      "username": "nuevo_usuario@ejemplo.com",
      "password": "password123",
      "role": "estudiante", 
      "name": "Nombre",
      "surname": "Apellido",
      "license": "Opcional",
      "studentIdNumber": "Opcional",
      "subject": "Opcional",
      "section": "Opcional"
    }
    ```

### 5. Editar usuario
*   **Endpoint:** `PATCH /users/:id`
*   **Body (JSON):** Los campos a actualizar (username, role, name, surname, license, studentIdNumber).

### 6. Eliminar usuario
*   **Endpoint:** `DELETE /users/:id`
*   **Respuesta Exitosa (201 Created):** `{"message": "User deleted"}`

---

## 🫀 Sesiones RCP (`/`)
*Accesible por `admin`, `profesor` y `estudiante`.*

### 1. Iniciar sesión RCP
*   **Endpoint:** `POST /students/:id/rcp-sessions/start`
*   **Descripción:** Registra el inicio de una sesión práctica para un estudiante.
*   **Respuesta Exitosa (201 Created):**
    ```json
    {
      "message": "RCP session started",
      "session": {
        "id": 1,
        "studentId": "uuid",
        "startedAt": "2024-03-20T10:00:00.000Z"
      }
    }
    ```

### 2. Finalizar sesión RCP
*   **Endpoint:** `POST /students/:id/rcp-sessions/:sessionId/end`
*   **Descripción:** Registra los resultados finales y cierra la sesión.
*   **Body (JSON):**
    ```json
    {
      "avgPulmonaryPressure": 85.5,
      "avgVentilation": 90.0,
      "avgCorrectPosition": 95.0,
      "observation": "Muy buen desempeño"
    }
    ```
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "message": "RCP session ended",
      "session": {
        "id": 1,
        "studentId": "uuid",
        "startedAt": "...",
        "endedAt": "...",
        "duration": "00:05:30",
        "avgPulmonaryPressure": 85.5,
        ...
      }
    }
    ```

### 3. Obtener historial de sesiones de un estudiante
*   **Endpoint:** `GET /students/:id/rcp-sessions`
*   **Query Parameters (Opcionales):**
    *   `page`, `limit` (Paginación)
    *   `startDate`: Formato ISO (ej. 2024-01-01)
    *   `endDate`: Formato ISO
    *   `isCompleted`: `true` o `false`
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "data": [...],
      "pagination": { ... }
    }
    ```

---

## 🛠️ Notas Adicionales
*   **Headers:** Todas las rutas protegidas requieren el header `auth` con el token JWT:
    `auth: <TOKEN_RECIBIDO_EN_LOGIN>`
*   **Roles:**
    *   `admin`: Acceso total.
    *   `profesor`: Acceso a gestión de usuarios y sesiones.
    *   `estudiante`: Acceso solo a sus propias sesiones RCP.
