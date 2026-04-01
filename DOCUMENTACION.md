# Documentación del Proyecto - IADH Front

Este proyecto es una interfaz de usuario desarrollada con **Vue.js 2** para el sistema IADH (Inteligencia Artificial para el Diagnóstico Humano), enfocada en la simulación y monitoreo de parámetros médicos en tiempo real.

## 📋 Dependencias Principales y Versiones

A continuación se detallan las librerías clave utilizadas en el proyecto:

### Core
- **Vue**: `^2.6.14`
- **Vuex**: `^3.4.0` (Gestión de estado)
- **Vue Router**: `^3.2.0` (Enrutamiento)
- **Bootstrap Vue**: `^2.21.2` (Componentes UI)

### Visualización y Gráficos
- **ApexCharts / Vue-ApexCharts**: `^3.27.2` / `^1.6.1` (Gráficos estadísticos y reportes)
- **Smoothie**: `^1.36.1` (Gráficos de ondas en tiempo real para ECG/Saturación)

### Comunicación y Datos
- **Axios**: `^1.5.1` (Peticiones HTTP)
- **MQTT**: `^4.3.7` (Comunicación en tiempo real con sensores/ESP32)
- **InfluxDB Client**: `^0.4.0` (Conexión con base de datos de series temporales)

### Otros
- **FullCalendar**: `^5.9.0` (Calendarios)
- **SweetAlert2**: `^5.0.2` (Alertas personalizadas)
- **Feather Icons**: `^4.28.0` (Iconografía)

---

## 🚀 Comandos de Ejecución

En el directorio del proyecto, puedes ejecutar:

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias del proyecto. |
| `npm run serve` o `npm run dev` | Inicia el servidor de desarrollo con recarga caliente. |
| `npm run build` | Compila la aplicación para producción en la carpeta `dist/`. |
| `npm run lint` | Ejecuta el linter para corregir problemas de estilo en el código. |
| `npm run test:unit` | Ejecuta las pruebas unitarias con Jest. |

---

## 🛠️ Funcionalidades Principales

Basado en los componentes clave del sistema:

### 1. Simulador de Parámetros RCP (`apex_chart.vue`)
Este es el núcleo de monitoreo en tiempo real del sistema.
- **Monitoreo en Tiempo Real**: Visualización de ondas de Frecuencia Cardíaca (FC), Saturación de Oxígeno (SpO2) y Tensión Arterial (TA) mediante gráficos dinámicos.
- **Conectividad MQTT**: Suscripción a tópicos para recibir datos de sensores (compresiones, presión pulmonar, flujo de aire) desde dispositivos externos.
- **Control de Arritmias**: Interfaz para activar diferentes estados fisiológicos en el simulador:
    - Ritmo Sinusal Normal.
    - Bradicardia y Taquicardia Sinusal.
    - Fibrilación y Taquicardia Ventricular.
    - Asistolia y Supradesnivel del segmento ST.
- **Cronómetro de Maniobra**: Temporizador para sesiones de RCP (3 minutos por defecto) con registro de tiempos de inicio y fin.
- **Reportes**: Generación de gráficos de promedio para presión pulmonar, ventilación y posición de la maniobra.
- **Alertas Visuales**: Indicadores de advertencia (parpadeo en rojo) cuando los valores salen de los rangos normales.

### 2. ChatBot de Asistencia (`ChatBot.vue`)
- **Interfaz Flotante**: Un asistente accesible desde cualquier parte de la pantalla.
- **Simulación de Respuesta**: Sistema de mensajería interactivo que responde de forma automática con mensajes predefinidos.
- **Animaciones**: Transiciones suaves para abrir y cerrar la ventana del chat.

### 3. Gestión de Estudiantes (`alt_pagination.vue`)
- **Tabla Dinámica**: Visualización de listados de usuarios (estudiantes) con soporte para grandes volúmenes de datos.
- **Funciones de Tabla**:
    - **Búsqueda en tiempo real**: Filtrado de filas según el texto ingresado.
    - **Paginación Avanzada**: Control de tamaño de página (5, 10, 20, 50 resultados) y navegación entre páginas.
    - **Ordenamiento**: Capacidad de ordenar por diferentes columnas.
- **Integración con API**: Obtención de datos reales mediante Axios con un sistema de "fallback" a datos locales (mock) en caso de error de conexión.
- **Acciones**: Funcionalidad para eliminar registros con confirmación previa.
