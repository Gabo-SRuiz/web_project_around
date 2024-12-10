# Tripleten web_project_around

Proyecto del sprint 7 web_project_around para TripleTen. En este proyecto se crea una pagina web tipo red social en la que se publican fotos de lugares en los Estados Unidos Americanos cuenta con un encabezado, una seccion perfil, una seccion "pictures" para las fotos y un footer. Se utilizaron las siguientes herramientas aprendidas a lo largo del sprint aparte de lo ya utilizado en proyectos anteriores:

    - Html
    - Css
    - Javascript

Lo especial de este proyecto es la implementacion de javascript, de la cual se utilizaron:

    - Variables
    - Funciones
    - Comandos

Las variables son utilizadas para referirnos a elementos en html y que javascript las pueda reconocer y modificar o darle funciones.

Los comandos son todas las herramientas que nos ayudan para darle a las variables ciertas instrucciones y estas actuen de cierta manera cuando el usuario interactue con ellas; por ejemplo: .classList, .addEventListener, .trim, etc. Estos pueden ir dentro de funciones.

Las funciones son conjuntos de comandos que se utilizan para darle funciones a las variables u objetos y estas se utilizan cuando se las llama.

//////////////////////////////////////////////////////////////////////////////////

Proyecto del sprint 8 de TripleTen

Seguimos trabajando con el mismo repositorio y la misma pagina que el proyecto aneterior. Ahora las herramientas implementadas y los metodos utilizados fueron exclusivos de javaScript sin contar lo que ya se sabia de html. Se añadio lo siguiente:

    - Nuevo formulario para añadir tarjetas con la imagen y el titulo personalizados.

    - Tarjetas iniciales sacadas de un array proporcionado por el mismo sprint.

    - Boton de "me gusta"

    - Boton de basura (para eliminar las tarjetas).

    -Nuevo popup con la imagen y el titulo de la tarjeta.

Las tarjetas fueron eliminadas de html inicial y se incluyeron en base al array con el metodo para clonar un <template> "cloneNode".

Las tarjetas que se añadian mediante el formulario utilice el mismo <template> que el utilizado para las tarjetas iniciales.

El boton me gusta fue implementado cambiandole una clase con "classList.toggle"

Utilizando ".remove()" para deshacernos de las tarjetas.

El popup fue implementado sustituyendo en la funcion los valores de las tarjetas para darsela al mismo.

Enlace del proyecto:
https://gabo-sruiz.github.io/web_project_around/