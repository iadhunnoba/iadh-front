# 📘 Documentación General del Sistema IADH

**Inteligencia Artificial para el Diagnóstico Humano (IADH)**
Sistema compuesto por un **Frontend en Vue.js** y un **Backend en Node.js**, diseñado para la simulación, monitoreo y gestión de prácticas de RCP con integración en tiempo real.

---

# 🧩 1. Arquitectura General

El sistema está dividido en dos grandes componentes:

## 🔹 Frontend

- Aplicación SPA desarrollada en **Vue.js 2**.
- Enfocada en visualización en tiempo real, interacción del usuario y simulación médica.

## 🔹 Backend

- API REST construida con **Node.js + Express + TypeORM**.
- Maneja autenticación, usuarios y sesiones de RCP.

---

# 🎨 2. Frontend - IADH Front

## 📌 Descripción

Interfaz de usuario que permite:

- Visualizar parámetros médicos en tiempo real.
- Simular escenarios clínicos.
- Gestionar usuarios (estudiantes).
- Interactuar mediante un chatbot asistente.

---

## 📦 Dependencias Principales

### 🔹 Core

- Vue `^2.6.14`
- Vuex `^3.4.0`
- Vue Router `^3.2.0`
- Bootstrap Vue `^2.21.2`

### 📊 Visualización y Gráficos

- ApexCharts `^3.27.2`
- Vue-ApexCharts `^1.6.1`
- Smoothie `^1.36.1`

### 🔗 Comunicación y Datos

- Axios `^1.5.1`
- MQTT `^4.3.7`
- InfluxDB Client `^0.4.0`

### 🧰 Otros

- FullCalendar `^5.9.0`
- SweetAlert2 `^5.0.2`
- Feather Icons `^4.28.0`

---

## 🚀 Comandos de Ejecución

| Comando                         | Descripción                  |
| ------------------------------- | ---------------------------- |
| `npm install`                   | Instala dependencias         |
| `npm run serve` / `npm run dev` | Inicia entorno de desarrollo |
| `npm run build`                 | Build de producción          |
| `npm run lint`                  | Corrección de estilo         |
| `npm run test:unit`             | Tests unitarios              |

---

## ⚙️ Funcionalidades Principales

### 🫀 1. Simulador de Parámetros RCP

Archivo: `apex_chart.vue`

**Características:**

- Monitoreo en tiempo real:
  - Frecuencia Cardíaca (FC)
  - Saturación de Oxígeno (SpO2)
  - Tensión Arterial (TA)

- Integración MQTT con sensores (ESP32)
- Simulación de arritmias:
  - Ritmo sinusal
  - Bradicardia / Taquicardia
  - Fibrilación ventricular
  - Asistolia

- Cronómetro de sesiones RCP (default: 3 minutos)
- Generación de reportes gráficos
- Alertas visuales ante valores críticos

---

### 🤖 2. ChatBot de Asistencia

Archivo: `ChatBot.vue`

**Características:**

- Interfaz flotante accesible globalmente
- Respuestas automáticas predefinidas
- Animaciones de apertura/cierre

---

### 👥 3. Gestión de Estudiantes

Archivo: `alt_pagination.vue`

**Características:**

- Tabla dinámica con:
  - Búsqueda en tiempo real
  - Paginación configurable
  - Ordenamiento por columnas

- Integración con API (Axios)
- Fallback a datos mock
- Eliminación de registros con confirmación

---

# 🧠 3. Backend - IADH API

## 📌 Descripción

API REST encargada de:

- Autenticación segura con JWT
- Gestión de usuarios
- Registro y seguimiento de sesiones de RCP

---

## ⚙️ Requisitos Previos

- Node.js ≥ 16
- MySQL
- npm

---

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Base de Datos

Archivo:

```
src/data-source.ts
```

### 3. Configurar JWT

Archivo:

```
src/config/config.ts
```

---

## 🚀 Comandos de Ejecución

| Comando           | Descripción                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Ejecuta servidor en desarrollo |
| `npm run tsc`     | Compila TypeScript             |
| `npm run typeorm` | CLI de TypeORM                 |

---

## 📦 Dependencias

### 🔹 Producción

- express `^4.17.2`
- typeorm `0.3.17`
- mysql2 `^3.14.3`
- jsonwebtoken `^9.0.1`
- bcryptjs `^2.4.3`
- class-validator `^0.14.0`
- helmet `^7.0.0`
- cors `^2.8.5`
- reflect-metadata `^0.1.13`

### 🔹 Desarrollo

- typescript `^5.1.6`
- ts-node-dev `^2.0.0`

---

# 🔐 4. Funcionalidades del Backend

## 🔑 1. Autenticación (`/auth`)

- `POST /auth/login`
  - Retorna JWT

- `POST /auth/change-password`
  - Requiere token válido

---

## 👤 2. Gestión de Usuarios (`/users`)

**Solo Admin**

- `GET /users`
- `GET /users/students`
- `GET /users/:id`
- `POST /users`
- `PATCH /users/:id`
- `DELETE /users/:id`

---

## 🫀 3. Sesiones de RCP

Ruta:

```
/students/:id/rcp-sessions
```

- `POST /start`
- `POST /:sessionId/end`
- `GET /`

**Acceso:** admin y user

---

# 🗃️ 5. Modelos de Datos

## 👤 User

- `id`
- `username` (email único)
- `name`
- `surname`
- `license` (opcional)
- `studentIdNumber` (opcional)
- `role` (admin | user)
- `password` (hash)

---

## 🫀 RcpSession

- `id`
- `student` (relación con User)
- `startedAt`
- `endedAt`
- `duration` (segundos)
- `observation`

---

# 🔄 6. Integración Frontend - Backend

## Flujo General

1. Usuario inicia sesión → obtiene JWT
2. Frontend almacena token
3. Axios envía token en cada request
4. Backend valida autenticación
5. Se consumen endpoints protegidos

---

## Comunicación en Tiempo Real

- MQTT → Sensores / ESP32 → Frontend
- Backend → Persistencia de datos (MySQL)
- InfluxDB → Series temporales (Frontend)

---

# 📊 7. Características Clave del Sistema

✔ Simulación médica en tiempo real
✔ Integración con hardware (sensores)
✔ Arquitectura desacoplada (API + SPA)
✔ Autenticación segura con JWT
✔ Visualización avanzada de datos
✔ Escalabilidad para entorno educativo o clínico

---

# 📅 8. Información Final

**Fecha de documentación:** 1 de abril de 2026
**Versión del sistema:** 1.0

---
