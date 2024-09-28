# Proyecto Parcial: Aplicación Web en React

## Descripción

Este proyecto es una aplicación web desarrollada en React que simula un sistema de login y una página principal con tarjetas de imágenes representativas de actividades deportivas (ciclismo, natación y correr). Utiliza `react-intl` para la internacionalización (i18n) y Bootstrap para el diseño de la interfaz de usuario.

## Componentes y Tecnologías Usadas

### Ambiente de Desarrollo
- **React**: Framework para el desarrollo de la interfaz de usuario.
- **React Router**: Para el manejo de rutas dentro de la aplicación.
- **React Intl**: Internacionalización, permite traducir el contenido de la aplicación según el idioma del usuario.
- **Bootstrap**: Framework CSS para diseño y estilos de componentes visuales.
- **Fetch API**: Para obtener datos de una API simulada (`Mockaroo`).
- **React Bootstrap**: Implementación de Bootstrap en React.
- **React Modal**: Para mostrar imágenes en una ventana modal.

### Estructura de Componentes
- **Login**: Página de inicio de sesión con validación de contraseña y funcionalidad para internacionalización.
- **Index**: Página principal que muestra tarjetas con imágenes de deportes.

## Paso a Paso para la Ejecución del Proyecto

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/JorgeB-py/plantilla-parcial1.git
2. **Instalar las dependencias**
   npm install
3. **Iniciar el servidor de desarrollo**
   npm start
   Esto abrirá la aplicación en tu navegador predeterminado en http://localhost:3000

## Consideraciones

# Reporte de Decisiones

Durante el desarrollo del proyecto, se tomaron las siguientes decisiones clave:

1. Elección de react-intl: Se eligió react-intl para manejar la internacionalización, lo que permite un fácil cambio de idiomas en la aplicación. Esto proporciona una experiencia de usuario más inclusiva y accesible.

2. Uso de Bootstrap y React Bootstrap: Se implementó Bootstrap y React Bootstrap para una rápida construcción de la interfaz de usuario. Estos frameworks permiten un diseño responsivo y componentes predefinidos que facilitan la creación de una UI atractiva y funcional.

3. Integración de Fetch API: Se utilizó Fetch API para obtener datos de una API externa, permitiendo una mayor flexibilidad en la obtención de información dinámica. Esto permite la integración con servicios de datos en tiempo real o predefinidos.

4. Estructura de Componentes: La aplicación fue estructurada en componentes funcionales, aprovechando los hooks de React para manejar el estado y los efectos secundarios, lo que mejora la claridad y la mantenibilidad del código.
