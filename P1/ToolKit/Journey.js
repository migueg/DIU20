/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Nathan Wheeler",
                Photo: "Nathan.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere comenzar un año sabático por Europa",
                touch1: "agenda",
                feel1: "4",
                con1: "administrar el dinero y buscar gente que le ayude en el extrangero",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en couchsurfing un anfitrión en Sevilla",
                touch2: "ordenador",
                feel2: "2",
                con2: "Exceso de anfitriones, de los cuales no aparece ninguna opinión ni valoración de ningún tipo ",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca un grupo que recomiende anfitriones que además le ayuden a conocer Sevilla",
                touch3: "ordenador",
                feel3: "3",
                con3: "Gran cantidad de grupos, con poca actividad que no solucionan sus problemas",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Observa que hay anfitriones verificados por el portal",
                touch4: "ordenador",
                feel4: "4",
                con4: "Al estar verificados le aporta seguridad",
                ima4: "cartoon-PCSurprised.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias y se encuentran cerca de algún evento",
                touch5: "móvil (webapp)",
                feel5: "1",
                con5: "No puede enviarle un mensaje porque necesita completar mucha unformación de su perfil, algunas como la verificación tardan en obtenerse. Su experiencia tiene que esperar",
                ima5: "cartoon-KO.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue completar el perfil. Ahora toca esperar a que me constesten!",
                touch6: "ordenador",
                feel6: "2",
                con6: "No sabe con certeza si recibirá una respuesta y podra viajar lo necesita saber cuanto antes para reservar el vuelo",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Maria González",
                Photo: "Maria.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Tras una conversación con una estudiante de erasmus que realizo una gestión en la secretaría le atrae la idea de ser anfitriona en couchsurfing ",
                touch1: "boca a boca",
                feel1: "4",
                con1: "No quiere gente que utilize el portal para aprovecharse de su hospitalidad ",
                ima1: "cartoon-speaking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Registrarse en couch surfing",
                touch2: "Ordenador(webapp)",
                feel2: "2",
                con2: "No tiene facebook y necesita aportar mucha información debido a no tener esta red social. Además tiene que pagar para verificar su cuenta",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "No recibe ninguna solicitud de ningún viajero, ya que es nueva en el portal , asi que decide buscar un viajero",
                touch3: "Ordenador (webapp)",
                feel3: "2",
                con3: "Ella busca una chica que este en edad universitaria , pero no puede aplicar criterios en la busqueda , asi que tiene que buscar entre multitud de perfiles",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra un perfil que encaja con su prototipo de usuario",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "El perfil se encuentra verificado , pero no posee ni valoraciones ni recomendaciones",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Le envia un mensaje al viajero aceptando su oferta ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Han pasado ya varios dias y no obtiene contestación, asi que se la manda a otro viajero mas",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Recibe la contestación de ambos y se decanta por un viajero",
                touch6: "Ordenador (buzón web)",
                feel6: "4",
                con6: "Ahora tiene que esperar otra última confirmación por parte del viajero a través de la plataforma",
                ima6: "cartoon-PCSurprised.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



