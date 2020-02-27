/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Nathan Wheeler",
				Photo: "Nathan.png",
				Quote: "El mundo es como un libro, y los que no viajan, solo leen una página",
				Age: 25,
				Occupation: "Estudiante de historia",
				Family: "Soltero",
				Location: "Triana , Sevilla",
				Character: "Le apasiona viajar y aprender otras costumbres",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Conocer a gente nueva ", "Aprender las constumbres autoctonas", "Aprender idiomas","Viajar de manera low cost"],
				Frustrations: ["Le encanta viajar, pero no soporta conocer nuevos lugares solo", "Necesita una forma de alojamiento más barata", "Solo habla inglés"],
				Bio: "Es un estudiante de historia de Dallas(EEUU). Vino a Sevilla para empezar una nueva aventura desde el sur de España. LLeva 3 dias en Sevilla. Aqui no conoce a nadie y se encuentra alojado en un hostal ",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: " Ha termiando el grado y ha decidido comenzar un año sabático para viajar,aunque no dispone de mucho dinero. Necesitaba un cambio de aires en su vida y conocer otras personas",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Maria González",
				Photo: "Maria.png",
				Quote: "Me encanta conocer gente nueva",
				Age: 45,
				Occupation: "Funcionaria en la administración",
				Family: "Casada y sin hijos.",
				Location: "Sevilla",
				Character: "Estrovertida, inquita y le gusta experimentar.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Salir de la rutina.", "Vivir nuevas experiencias.", "Cambiar su manera de ver la vida.", "Compartir experiencias con su pareja."],
				Frustrations: ["Vivir en una rutina constante.", "Quiere a su pareja, pero se encuentran solos.", "No puede viajar, pero le encantaría conocer la forma de vida en otros paises.", "Solo se relaciona con su marido."],
				Bio: "Maria es una funcionaria para la administración pública que lleva casada 15 años con Juan , su marido. No tiene hijos.Es original de Madrid y apenas a viajado, ya que su situación económica y su trabajo no lo permiten. Maria apenas tiene amigos porque se mudó a Sevilla hace un año y la única persona con la que se relaciona en Sevilla es su marido. Vive en una casa en el centro de Sevilla",
				Tech: [
					{ Name: "TIC/Internet", Value:  3},
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])