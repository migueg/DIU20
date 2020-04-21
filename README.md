# DIU20
Prácticas Diseño Interfaces de Usuario 2019-20 (Economía Colaborativa) 

Grupo: DIU2.TeTic  Curso: 2019/20 

Proyecto: App de compartir alojamiento (FREE SOFA)

Descripción:En esta práctica estudiaremos un caso de plataforma de economía colaborativa y realizaremos una propuesta para su diseño Web/movil. Utilizaremos herramientas y entregables descritos en el siguiente CheckList (https://github.com/mgea/UX-DIU-Checklist). En particular se pretende diseñar FREE SOFA. Está aplicación será una plataforma de economía colaborativa en lo referente a compartir alojamiento.

Logotipo: ![Método UX](P3/logo.PNG)

Miembros
 * :bust_in_silhouette:   Miguel García Tenorio     :octocat:[migueg](https://github.com/migueg/DIU20)     


----- 

Qué es economia colaborativa: Martínez-Polo, J. (2019). **El fenómeno del consumo colaborativo: del intercambio de bienes y servicios a la economía de las plataformas**, *Sphera Publica, 1*(19), 24-46. http://sphera.ucam.edu/index.php/sphera-01/article/view/363/14141434

>> ¿ Cómo puedo viajar sin tener que pagarme un hotel ?

Esta fue a pregunta que llevo al desarrollo del proyecto y me incentivó a aplicar los objetivos de economía colaborativa.

Qué es economia colaborativa: Martínez-Polo, J. (2019). **El fenómeno del consumo colaborativo: del intercambio de bienes y servicios a la economía de las plataformas**, *Sphera Publica, 1*(19), 24-46. http://sphera.ucam.edu/index.php/sphera-01/article/view/363/14141434

# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----
En primer lugar investigué y analize, emperesas que llevan a cabo esta propuesta y ofrecen la posibilidad de alojarse en otros lugares de manera mas barata.

Para el servicio de compartir alojamiento, evalué las web de Badi, de CouchSurfing y de ComparteTuPiso. Todas ellas ofreían una manera alternativa de alojarse de manera mucho mas barato o incluso gratis a cambio de experiencias. Todas ellas tenían en común:

+ Existen mensajes entre usuarios.
+ Existen solicitudes de alojomientos
+ Hay dos roles: viajeros y anfitriones.
+ Existe un buscador de alojamiento por localidad.
+ Están vinculadas a las redes sociales.

Tras obtener los puntos comunes se escogió Couchsurfing para su estudio de usabilidad, ya que ha sido la que proporciona una funcionalidad más completa de las evaluadas y se acerca algo mas a lo que estabamos buscando, una aplicación que permita a los viajeros alojarse de manera gratuita pero que tambien entre en contacto con las personas, es decir, que se parezca a una red social.


![Método UX](img/Persona.png) 1.b Persona
-----
A continuación creamos dos personas para identificar las metas y los puntos débiles  de nuestro usuario objetivo.Al elegir estas dos perosnas no centraremos en como interaccionarian con Couchsurfing. 

 Mi primera persona elegida es Nathan. Esta persona, es un joven, que ha acabado su carrera y va a comenzar un año sabático. Representa el perfil de un usuario que adopta el rol de viajero o huesped.
 ![Nathan](P1/Nathan.PNG)

Persona segunda persona es María. Esta persona , es una funcionaria, que tiene pocos amigos y su rutina se esta volviendo en su condena. Maria encaja perfectamente con el segundo rol, que es el de huesped.
![Maria](P1/Maria.PNG)

Pude identificar que estas una serie de objetivos comunes:
+ Los usuarios deseaban aprender idiomas y necesitaban encontrar gente que hablase el suyo
+ Estan abiertos a conocer y a socalizar con nuevas personas
+ Los usuarios quieren vivir nuevas experiencias

También identifiqué los puntos débiles:
+ Puede haber problemas de comunicación entre usuarios
+ No todos tienen dinero para gastar.

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

A continuación creamos una exeperiencias de usuario para cada una de nuestras personas en couchsourfing ya que representan los dos típicos caso cómunes de experiencias que puede haber. La experiencia de un usuario jovén con un dominio en las tecnologías, pero que también puede ser novato en el método. En segundo lugar se ha elegido la experiencia de una persona de mediana edad con poca soltura con las nuevas tecnologías y que desconoce por completo el método.

![MariaEx](P1/ExperienciaMaria.PNG)

![NathanEx](P1/ExperienciaNathan.PNG)


![Método UX](img/usabilityReview.png) 1.d Usability Review
----
Una vez vistas las experiencias que podían tener nuestros usuarios, hice un resumen de usabilidad, en la que evalue CouchSourfing , y obtuve los principales problemas que tenía en el diseño.
 - Valoración final: 63
 - Comentario: Esta valor es dado ya que la interfaz es sencilla y las funcionalidades están a simple vista, pero presenta problemas 
que pueden ensuciar la experiencia en el diseño  como  la falta de información verificada, no existía una diferenciación de los roles de usario o la ausencia de filtros para las búsquedas


## Paso 2. UX Design  
 Tras esta etapa de indagación, comence a buscar cual sería el problema real al que se enfrentaban los usuarios y como podía abordar este problema en el desarrollo de la app.
 
 Como consecuencia se me ocurrió el siguiente problema:
>>Las personas que buscaban un alojamiento de manera gratuita o muy barato necesitaban una manera de conectar con los usuarios de manera >>eficaz y comprobar que ese usuario era de fiar, es decir, el principal problema era la desconfianza de los usuarios.


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid
----
***¿Cómo podía  solicionar esto?

Para enocontrar una solución y poder reflejar en el diseño de FREE SOFA realice un FeedBack Capture Grid de CouchSourfing ya que era la plataforma que mas se ajustaba a lo que estaba buscando. 
El diagrama propuesto refleja los aspectos más destacados de couchsurfing, presentando los problemas, las dudas a partir de las experiencias de María y Nathan, los aspectos positivos que tienen la app y una serie de nuevas ideas aportadas.

![diagrma](P2/Feedbackgrid.PNG)

De acuerdo con estos datos se planteó como pruepuesta de valor FREE SOFA, un módelo de aplicación para la experiencia de compartir alojamiento. Esta app contará con funcionalidad que puede requerir está experiencia, tal como , la búsqueda por filtros, notificaciones, mensajeria, perfiles de usuario etc. Con mi propuesta quería reflejar un app que combinaba esa experiencia de comparti alojamiento de manera gratuita o  con muy coste con una red social que conectacse a los usarios con posibilidad de interacción entre ellos, para darle un punto de vista , veraz, social y de cercanía con el usuario.

![Método UX](img/Sitemap.png) 2.b Tasks & Sitemap 
-----
Una vez que ya tuve claro como iba a ser mi aplicación y que puentos fuertes tendría, comencé a realizar el diseño de esta. En primer lugar realice  el sitemap de la app y la matrix de tareas de usuario que contiene la lista de tareas que puede realizar un usuario ordenadas de mayor a menor de acuerdo con la frecuencia de uso que hacen los usuarios de estas tareas. Tendremos dos grupos de usuarios el de los anfitriones y el de los viajeros.

![matrix](P2/UserTaskmatrix.PNG)

![map](P2/sitemap%20-%20copia.PNG)

![Método UX](img/labelling.png) 2.c Labelling 
----
Ya tenía estructurada mi aplicación por lo que definí que es lo que haría cada uno de los elementos de la jerarquía de la aplicación mediante un labelling

|   |   |
|---|---|
|**Inicio sesion** |Es la primera vista del usuario cuando se descarga la app, en la que podrá registrase o loguearse. Una vez logeado ya no accederá mas a esta vista, no ser que cierre sesión. |
|**Sobre nosotros** | Contiene información sobre los desarrolladores y sobre el sitio como empresa y organización |
|**Contáctanos**| Aqui se podra enviar un formulario con alguna duda o información que vaya dirigidos al personal de la empresa |
| **Home page**                  | Página principal del sitio. Ofrecerá una vista persobnalizada con información que pueda interesar al usuario, de acuerdo con sus preferencias  |
|**Experiencias certificadas**| Se muestran experiencias y vivencias de otros usuarios expertos en el metodo a traves de videos, fotos y comentarios. |
|**Ayuda**| Sección de ayuda técnica al usuario con apartado de FAQS y un foro de duda |
| **FAQS**                       | Aqui se consultan los fallos y duadas más comunes que se tienen entre los usuarios, divididas por categorias, a las cuales se responden mediante texto o con video tutoriales explicativos  |
| **Foro**                       | Este es un foro de dudas técnicas en el que el usuario publicará su duda particular para que pueda ser resuelta por otros usuarios o por trabajadores de la marca   |
| **Grupos**                     | Ofrece la posibilidad a los usuarios de crear grupos, unirse a ellos y buscarlos. La búsqueda se realizará por nombre de grupo y tendrán límite de usuarios. En estos grupos los usuarios podran intercambiar mensajes destinados a comunicar a estos. Habrá grupos oficiales controlados por la app   |
| **Amigos**                     |  Ofrece un listado de los amigos que tienes en la plataforma para poder acceder a ellos facilmente, además existirá un búscador para buscar dentro de esta sección por el nombre. Si el usuario tiene Facebook integrado con la app además de los amigos que tienen en la plataforma le aparecerá aquellos amigos que tiene en Facebook que tienen la app |
| **Búsqueda Avanzada**  | En esta sección se  ofrecen dos opciones , búsqueda de ofertas o búsqueda de perfil , las cuales nos redirigen a un tipo de búsqueda determinada  |
| **Busqueda perfil**  | Se realiza una búsqueda por nombre de usuario mediante un búscador con la posiblidad de aplicar filtros de sexo, edad, valoración , idiomas hablados y tipo de perfil (viajero o anfitrión) . El resultado de esta búsqueda será una lista de perfiles que cumplen los requisitos de la búsqueda. Además se podrá ordenar dicha lista |
| **Perfil**  |  Nos muestra el perfil  de un usuario. Aparte de consultar la información básica,índice de respuesta, se podrá ver las fotos que haya subido, asi como agragarlo a amigos , un boton para enviar mensajes , valorarlo. Si eres viajero podrás consultar el calendario con fechas ofertadas para solicitud, además de consultar información de su casa |
| **Búsqueda Mapa** | Nos ofrece una búsqueda  por localización. A aparte de los filtros de las búsqueda por perfil, se incluirán en el caso de los viajeros un rango de dinero a pagar por la estancia. El resultado se mostrará en un mapa físico de la localización en el que se muestran con marcadores de ubicación las ofertas disponibles. Si eres viajero solo se mostrán ofertas de anfitriones, si eres anfirtrión solo se mostrarán ofertas de viajeros  |
| **Oferta**  | Muestra el perfil del usuario que ha realizado la oferta , la localización de la oferta , la información básica de dicha oferta, el número de solicitudes realizada a la oferta, fecha de la oferta y un botón para enviar la solictud que nos muestra un formulario y un botón para compartir la oferta  |
| **Ofertas**   |  Formulario para publicar una oferta |
| **Mi perfil**  | Información básica del perfil de un usuario , con zona de galeria de fotos, opiniones, valoración general, disponibilidad. En el caso de los anfitriones tendrán una zona de su casa, asi como un calendario con fechas disponibles. Se podrán subir nuevas fotos, y editar la información del perfil. Ofrece dos apartados adicionales verificar perfil e Integrar Facebook . Además se indicará el tipo de usuario (anfitrión o viajero)   |
| **Notificaciones**  | Este es el centro de notificaciones del usuario, en el tendrá dos zonas, una zona general con notificaciones generales y una zona de solicitudes en el que recibe todas las solicitudes echas al usuario    |
|**Mensajes**   |  Buzón de mensajes de la app, apereceran los mensajes recibidos en forma de chat y se podrá enviar un mensaje a otro usuario. Abrá un buscador que permite buscar al remitente solo si en esta en nuestros amigos |
| **Verificar**  | Formulario que pedirá el dni del usuario, una dirección , un telefono móvil  |
| **Integrar facebook**  | Nos llevará al login de facebook y una vez hecho tendremos las funcionalidades de Facebook disponibles  |


![Método UX](img/Wireframes.png) 2.d Wireframes
-----
Ya que tenía mi idea de como iba estar estructurada la aplicación y que es lo que haría cada cosa, me centre en el diseño de los bocetos. Esro produjo resultados interesantes como puede ser la **búsqueda de ofertas** mediante un mapa, la posibilidad de **subir ofertas** mediante un formulario, una **sección de amigos** , una **zona de notificaciones** , un **chat de mensajes** . 

Con estos bocetos se acercaba la aplicación más a la idea de una red social que a la idea de una aplicación de ofertas de alojamiento, así que le diseño iba bien encaminido, había conseguido plasmar esa idea en los bocetos.

## Paso 3. TeTic UX-Case Strudy 


![Método UX](img/moodboard.png) 3.a ¿Como se cuenta un UX-Case Study?
-----
Antes de entrar en detalle con los guidelines, analice el UX-Case de MuseApp. En este análisis puede darme cuenta de la importancia que tiene el conocer bien a los usuarios a la hora de realizar un diseño y la importancia de que este se adapte al usuario y que no sea el usuario el que tenga que adaptarse a nuestro diseño. Asi que la fase de indagación es fundamental. 

Tras este aprendizaje me propuese a realizae un logotipo y un guideline centrado en el usuario.

![Método UX](img/landing-page.png)  3.b Logotipo 
----

![logo](P3/logo.PNG)

![Método UX](img/guidelines.png) 3.c Guidelines
----

El guideline que se propone sigue las pautas del guideline para IOS ya que se esta diseñando la app para este sistema. De mi guideline puedo destacar lo siguiente: 
+ Se utilizarán colores complementarios en la aplicación, que combinen con el logo
+ Todo botón de cancelar va siempre a la derecha
+ Se utilizan colores complementarios para diferenciar entre perfiles de viajeros y perfiles de anfitrión.
+ Tipología: SF y NY
+ Iconos sencillos y facilemente asociables.
+ El botón de ir hacia atrás a la izquierda
+ Se usan los iconos de apple para las distintas acciones

![Método UX](img/mockup.png)  3.d Video
----
![Video](https://youtu.be/YD0msLorQco)


## Paso 4. UX Check (Usability Testing) 


![Método UX](img/ABtesting.png) 4.a A/B Testing
----


>>> Comprobacion de asignaciones para A/B Testing. Asignaciones https://github.com/mgea/DIU19/blob/master/ABtesting.md

>>>> Práctica A: 


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Usuarios para evaluar prácticas 


| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | TestA/B
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| User1's name  | H / 18   | Estudiante  | Media       | Introvertido | Web.       | A 
| User2's name  | H / 18   | Estudiante  | Media       | Timido       | Web        | A 
| User3's name  | M / 35   | Abogado     | Baja        | Emocional    | móvil      | B 
| User4's name  | H / 18   | Estudiante  | Media       | Racional     | Web        | B 


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

>>> Usaremos el **Cuestionario SUS** para valorar la satisfacción de cada usuario con el diseño (A/B) realizado. Para ello usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx) para calcular resultados sigiendo las pautas para usar la escala SUS e interpretar los resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)

>>> Adjuntar captura de imagen con los resultados + Valoración personal 


![Método UX](img/usability-report.png) 4.c Usability Report
----

>> Añadir report de usabilidad para práctica B 



## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report
----

>>> Indica qué pretendes evaluar (de accesibilidad) y qué resultados has obtenido + Valoración personal

>>> Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 



## Conclusión / Valoración de las prácticas


>>> (90-150 caracteres) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  







