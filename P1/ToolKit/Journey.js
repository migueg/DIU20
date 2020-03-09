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
                con2: "Los anfitriones no están ordenados por ningún criterio y tiene que ir uno por uno ",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca un grupo que recomiende anfitriones que además le ayuden a conocer Sevilla",
                touch3: "ordenador",
                feel3: "3",
                con3: "No lo encuentra asi que decide crealo, tiene que completar el perfil",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se da cuenta de que puede invertarse los datos y no pasa nada",
                touch4: "ordenador",
                feel4: "2",
                con4: "No se fia de la veracidad de los perfiles",
                ima4: "cartoon-PCSurprised.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "No dispone de un area que le guie paso a paso para completar su perfil",
                touch5: "móvil (webapp)",
                feel5: "1",
                con5: "No puede crear el grupo",
                ima5: "cartoon-KO.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Opta por enviar un mensaje a un anfitrión aunque no tiene mucha confianza",
                touch6: "ordenador",
                feel6: "2",
                con6: "Está confuso y perdido",
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
                
                /*** PASO #2: REGISTRO ***/ 
                goal2: "Registrarse en couch surfing",
                touch2: "Ordenador(webapp)",
                feel2: "2",
                con2: "No tiene facebook y necesita aportar mucha información debido a no tener esta red social. Además tiene que pagar para verificar su cuenta",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "No recibe ninguna solicitud de ningún viajero, ya que es nueva en el portal , asi que decide buscar un viajero",
                touch3: "Ordenador (webapp)",
                feel3: "2",
                con3: "No encuentra una zona en el menú para los usuarios que quieren ser anfitriones ",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se da cuenta de que hay un buscador que te permite buscar viajeros",
                touch4: "Ordenador (webapp)",
                feel4: "2",
                con4: "Ella quiere una chica con una serie de requisitos, pero no puede aplicar filtros en la búsqueda",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se da cuenta de que despues de hacer la primera búsqueda se peuden hacer algunos filtros, Asi que busca ",
                touch5: "Odenador (webapp)",
                feel5: "3",
                con5: "A primera vista no encuentra información sobre el viajero",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONTACTA ***/ 
                
                goal6: "Va a contactar con el viajero",
                touch6: "Ordenador (buzón web)",
                feel6: "4",
                con6: "Consigue mandar el mensaje, pero previamente ha tenido que hacer muchos pasos",
                ima6: "cartoon-PCSurprised.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



