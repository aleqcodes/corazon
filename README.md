# Juego del Día de los Enamorados ❤️

Este proyecto es un juego interactivo para celebrar el Día de los Enamorados (o cualquier ocasión especial con tu pareja). Consiste en una experiencia narrativa seguida de un pequeño juego donde la persona debe encontrar un corazón escondido para recibir un mensaje especial.

![Vista previa del juego](favicon.png)


👉 **DEMO ONLINE:** [https://aleq.me/corazon/](https://aleq.me/corazon/)

## 📋 Contenido

- [Descripción](#descripción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Personalización](#personalización)
  - [Cambiar textos](#cambiar-textos)
  - [Modificar estilos](#modificar-estilos)
  - [Ajustar la lógica del juego](#ajustar-la-lógica-del-juego)
  - [Cambiar sonidos](#cambiar-sonidos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)
- [Ideas para extender](#ideas-para-extender)

## 📝 Descripción

Este juego está diseñado para sorprender a tu pareja con un mensaje especial. Comienza con una serie de pantallas narrativas que establecen el contexto, seguidas de un juego simple donde la persona debe encontrar un corazón escondido entre varios cuadros. Al encontrarlo, aparece un mensaje personalizable (por defecto, una propuesta para compartir un camino juntos).

## ✨ Características

- **Modo historia**: Introduce el juego con una narrativa personalizable
- **Juego interactivo**: Cuadrícula donde se debe encontrar el corazón escondido
- **Mensaje sorpresa**: Al encontrar el corazón, aparece un mensaje especial
- **Efectos visuales**: Animaciones, corazones flotantes y transiciones suaves
- **Efectos sonoros**: Sonidos para las transiciones y al encontrar el corazón
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla
- **Botón "No" evasivo**: El botón de rechazo se mueve cuando el cursor se acerca

## 🔧 Requisitos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Un servidor web básico para pruebas locales (opcional)

## 📥 Instalación

1. **Descarga el código**
   ```bash
   git clone https://tu-repositorio/juego-enamorados.git
   # O simplemente descarga el ZIP y descomprímelo
   ```

2. **Estructura de archivos**
   Asegúrate de tener estos archivos:
   - `index.html`: Estructura del juego
   - `style.css`: Estilos visuales
   - `script.js`: Lógica del juego
   - `favicon.png`: Icono del sitio

3. **Prueba local**
   - Opción 1: Abre directamente `index.html` en tu navegador
   - Opción 2: Usa un servidor local (recomendado para probar todas las funcionalidades)
     ```bash
     # Con Python
     python -m http.server 8000
     # Con Node.js
     npx serve
     ```

## 🎨 Personalización

### Cambiar textos

1. **Título y mensajes de historia**
   Edita el archivo `index.html` para cambiar:
   - El título de la página (línea 5)
   - El nombre de la persona (línea 17)
   - Los textos de las pantallas de historia (líneas 18, 25, 32, 39)

2. **Mensaje principal**
   Para cambiar el mensaje que aparece al encontrar el corazón:
   - Edita la línea 49 en `index.html`

3. **Textos de los botones**
   - Botones de historia: líneas 19, 26, 33, 40 en `index.html`
   - Botones de respuesta: líneas 50-51 en `index.html`

4. **Mensajes de respuesta**
   Para cambiar lo que aparece cuando la persona acepta o intenta rechazar:
   - Edita las líneas 103 y 126 en `script.js`

### Modificar estilos

1. **Colores**
   En `style.css` puedes cambiar:
   - Fondo: línea 4 (gradiente)
   - Color de títulos: línea 10
   - Color de botones: líneas 44 y 159
   - Color de cuadros: línea 87

2. **Fuente**
   - Cambia la fuente en las líneas 7-9 de `index.html` (importación de Google Fonts)
   - Actualiza la referencia en la línea 2 de `style.css`

3. **Animaciones**
   - Animación de entrada: líneas 57-60 en `style.css`
   - Animación del popup: líneas 124-127 en `style.css`
   - Animación de corazones flotantes: líneas 183-186 en `style.css`

### Ajustar la lógica del juego

1. **Tamaño de la cuadrícula**
   - Cambia el valor de `gridSize` en la línea 58 de `script.js`
   - Ajusta también las columnas en CSS (línea 70 de `style.css`)

2. **Tiempo de aparición del mensaje**
   - Modifica el tiempo en milisegundos en la línea 93 de `script.js`

3. **Cantidad de corazones flotantes**
   - Cambia el número en el bucle de la línea 108 de `script.js`

4. **Comportamiento del botón "No"**
   - Ajusta la sensibilidad en las líneas 115-125 de `script.js`

### Cambiar sonidos

1. **Sonido al encontrar el corazón**
   - Cambia la URL en la línea 55 de `index.html`

2. **Sonido de transición entre pantallas**
   - Cambia la URL en la línea 57 de `index.html`

## 📁 Estructura del proyecto

```
/
├── index.html      # Estructura HTML y contenido textual
├── style.css       # Estilos visuales y animaciones
├── script.js       # Lógica del juego y comportamiento
└── favicon.png     # Icono del sitio
```

### Explicación de los archivos

- **index.html**: Contiene la estructura del juego, dividida en dos secciones principales:
  - Contenedor de historia (`story-container`): Con 4 pantallas narrativas
  - Contenedor del juego (`game-container`): Con la cuadrícula y el popup del mensaje

- **style.css**: Define todos los estilos visuales, organizados en secciones:
  - Estilos generales (cuerpo, títulos)
  - Estilos del modo historia (pantallas, botones)
  - Estilos del juego (cuadrícula, cuadros)
  - Estilos del popup y botones
  - Animaciones (corazones flotantes, transiciones)

- **script.js**: Maneja toda la lógica interactiva:
  - Navegación entre pantallas de historia
  - Inicialización del juego y creación de la cuadrícula
  - Lógica para encontrar el corazón
  - Comportamiento de los botones de respuesta
  - Efectos visuales adicionales (corazones flotantes)

## 🚀 Despliegue

Para compartir el juego con tu pareja:

1. **Opción sencilla: Servicios de hosting gratuito**
   - [GitHub Pages](https://pages.github.com/)
   - [Netlify](https://www.netlify.com/)
   - [Vercel](https://vercel.com/)

2. **Compartir localmente**
   - Envía los archivos por correo o mensaje
   - Comparte a través de Google Drive o similar
   - Usa una memoria USB

3. **Enviar como enlace**
   - Después de subirlo a un servicio de hosting, envía el enlace por mensaje
   - Considera acortar la URL con un servicio como [Bitly](https://bitly.com/)

## 💡 Ideas para extender

- **Más niveles**: Añade múltiples niveles con diferentes dificultades
- **Pistas**: Incluye un sistema de pistas si no encuentra el corazón
- **Cuenta regresiva**: Añade un temporizador para aumentar la emoción
- **Música de fondo**: Incluye una canción romántica de fondo
- **Modo oscuro**: Añade un interruptor para cambiar entre modo claro y oscuro
- **Más animaciones**: Mejora las transiciones y efectos visuales
- **Galería de fotos**: Incluye fotos de momentos especiales juntos
- **Versión para móviles**: Optimiza la experiencia para dispositivos táctiles

---

## 💖 ¡Personalízalo y sorprende a tu pareja!

Este proyecto está diseñado para ser fácilmente personalizable. Siéntete libre de modificarlo según tus necesidades y la personalidad de tu pareja. ¡Lo importante es el detalle y el cariño con el que lo compartas!

---

*Creado con amor para celebrar el Día de los Enamorados*
