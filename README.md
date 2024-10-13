# Proyecto: **Alrededor de los EE.UU. - React Refactor**

## Descripción del Proyecto

Este proyecto es una refactorización de "Alrededor de los EE.UU.", un sitio web interactivo que permite a los usuarios gestionar tarjetas de imágenes (añadir, eliminar y dar "me gusta"), así como interactuar con ventanas emergentes. El objetivo de esta refactorización es transferir la funcionalidad existente a **React**, modernizando la base de código y adoptando un enfoque declarativo.

## Funcionalidades Principales

- **Gestión de Tarjetas**: Seis tarjetas se cargan inicialmente. Los usuarios pueden añadir nuevas tarjetas con imágenes y descripciones personalizadas, eliminarlas o darles "me gusta".
- **Ventanas Emergentes**: Al hacer clic en una tarjeta, se abre una ventana emergente que muestra una imagen ampliada. Las ventanas emergentes también se utilizan para formularios de edición.
- **Formulario de Edición**: Los usuarios pueden editar su perfil y cambiar su avatar. La validación de formularios asegura la calidad de los datos antes de enviarlos.
- **Likes**: Los usuarios pueden marcar tarjetas con "me gusta", con funcionalidad en tiempo real que refleja el estado en la interfaz.
- **Responsive Design**: El sitio es completamente responsivo, optimizado para diferentes resoluciones de pantalla: 1280px, 880px y 320px.

## Tecnologías Utilizadas

- **React**: Refactorización del proyecto original para utilizar la biblioteca React.
- **JavaScript (ES6)**: Uso de módulos, promesas y técnicas avanzadas como desestructuración.
- **Context API**: Para compartir datos del usuario actual entre componentes.
- **API**: Interacción con una API externa para la gestión de datos del usuario y de las tarjetas (GET, POST, PATCH, DELETE).
- **CSS**: Aplicación de estilos avanzados con media queries y BEM.
- **React Hooks**: Uso de hooks como `useState` y `useEffect` para manejar el estado y efectos secundarios.
- **Webpack**: Para optimización del código y soporte de dependencias.

## Componentes Clave

- **App.js**: Componente raíz que gestiona el estado global del usuario y las tarjetas.
- **Header.js, Main.js, Footer.js**: Componentes presentacionales que estructuran la interfaz.
- **Card.js**: Muestra las tarjetas individuales con las funciones de "me gusta" y eliminar.
- **PopupWithForm.js**: Componente reutilizable para ventanas emergentes de formularios.
- **ImagePopup.js**: Ventana emergente para mostrar imágenes en tamaño completo.
- **EditProfilePopup.js, EditAvatarPopup.js, AddPlacePopup.js**: Formularios para editar el perfil, avatar y añadir nuevas tarjetas.

## Flujo de Trabajo con APIs

- **GET**: Al cargar la página, se obtiene la información del usuario y las tarjetas desde la API.
- **POST**: El formulario de "Añadir Tarjeta" envía una nueva tarjeta a la API.
- **PATCH**: La edición del perfil y del avatar actualiza los datos del usuario en la API.
- **DELETE**: Los usuarios pueden eliminar tarjetas, y estas se eliminan de la base de datos.

