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

//////////////////////////////////////////////////////////////////////////////////

Proyecto 9 de TripleTen

En este proyecto se continuo trabajando con el mismo respositorio y pagina web de los anteriores 2 sprints. En este caso se incluyeron las validaciones de los formularios entre otros pequeños detalles como son:
    
    - Cerrar los popups con la tecla "Escape"
    - Cerrar los popups haciendo click en el area que no es parte del popup (overlay)

Para la validacion de los formularios utilizamos como base un objeto el cual contenia en los valores de sus claves las clases de las etiquetas correspondientes a los formularios; seguido de ello se crearon funciones que engloban la funcionalidad del validador , convirtiendo en arrays los nodos de lista de formularios y inputs; validando el contenido del input con los atributos en html y asignando clases de css para los estilos en el error y en los botones deshabilitados.

//////////////////////////////////////////////////////////////////////////////////

SPRINT 10: Introduccion a la programacion orientada a objetos 
Proyecto 10

En este proyecto se implementaron clases a nuestra pagina "Around":
    1. Card.js
    2. FormValidator.js

Card
Se creo esta clase para todo lo relacionado a la creacion y elementos de las tarjetas o "cards" de nuestra pagina: El template, los botones, imagenes, titulo, etc. Con ayuda de el "elemento" this.

FormValidator
Esta clase va relacionada a la funcion de las validaciones de formularios.

Ambos cuentan con elementos privados y publicos y cada funcion o metodo hace una cosa.

Tambien se creo el archivo utils.js el cual contiene los controladores de eventos, las constantes y las funciones para abrir y cerrar popups.

//////////////////////////////////////////////////////////////////////////////////

Proyecto 11
TripleTen

En este proyecto se distribuyeron los archivos de script en carpetas:
    - components: Para todas las clases que se utilizan.
    - utils: para los archivos constants.js y utils.js
        1. constants.js: se almacenan todas las variables o constantes.
        2. utils.js: se almacenan todas las funciones separadas de las clases.
    - Por ultimo de agrego index.js en el directorio pages.

Se crearon 5 nuevas clases las cuales son: 
    - Section
    - Popup
    - PopupWithImage
    - PopupWhitForm
    - UserInfo

Cada una consta de sus propios metodos y tienen una vinculacion debil para no depender de otras clases entre si.

Section: se encarga de renderizar las tarjetas y ubicarlas en el html.

Popup: Es una clase padre que sirve de guia para las clases "PopupWithImage" y "PopupWithForm".

PopupWithImage: Clase hija de "Popup" que funciona para darle funcion al popup en donde se encuentra la imagen y titulo de las tarjetas; cuenta con herencia y polimorfismo.

PopupWithForm: Al igual que la anterior clase se encarga de darle funcionamiento a los popups que tienen formularios; cuenta con herencia y polimorfismo

UserInfo: Esta clase se encarga de recoger los datos de usuario que sean ingresados en el formulario y a su vez los coloca en la pagina..

Todas las instancias de clases se crearon en el archivo index.js de manera correcta.

Enlace del proyecto:
https://gabo-sruiz.github.io/web_project_around/