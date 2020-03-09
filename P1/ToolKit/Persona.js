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
				Location: "Dallas, EEUU",
				Character: "Curioso y aventurero",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Conocer a gente nueva ", "Ver al Real Madrid", "Aprender idiomas","Viajar de manera low cost"],
				Frustrations: ["Le encanta viajar, pero no soporta conocer nuevos lugares solo", "Necesita una forma de alojamiento barata", "Solo habla inglés"],
				Bio: "Es un estudiante de historia de la universidad de Dallas(EEUU). Nació en Texas donde vivió hasta los 18 años. Ha terminado el grado este año. Nathan es huérfano, perdió a sus padres en un accidente de tráfico cuando tenía 10 años y a partir de ahí comenzó a vivir con su abuela, la cual falleció hace 4 meses. La herencia que le dejaron sus padres le permitió estudiar en la universidad. Le encanta la música, es un excelente guitarrista. Además es un apasionado del fútbol en especial es fan del Real Madrid. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: " Ha termiando el grado y ha decidido comenzar un año sabático para viajar, ya que la muerte de su abuela supuso un gran golpe para él y necesita un respiro en su vida ,aunque no dispone de mucho dinero porque lo gastó en sus estudios.",  
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
				Occupation: "Funcionaria en la secretaria de la universidad",
				Family: "Casada y sin hijos.",
				Location: "Sevilla",
				Character: "Estrovertida, inquieta y le gusta experimentar.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Salir de la rutina.", "Vivir nuevas experiencias.", "Cambiar su manera de ver la vida.", "Aprender idiomas.", ],
				Frustrations: ["Vivir en una rutina constante.", "Quiere a su pareja, pero se encuentran solos.", "No puede viajar, pero le encantaría conocer la forma de vida en otros paises.", "Solo se relaciona con su marido.","No le gusta su trabajo"],
				Bio: "Maria es una funcionaria para la secretraria pública de la universidad de Sevilla. Estudió la carrera de relaciones laborales y se preparó las oposiciones para fincionaria.Lleva casada 15 años con Juan , su marido. No tiene hijos.Es original de Madrid y se mudó a Sevilla hace dos años.Su familia vive en Madrid y su marido viaja habitualmente por negocios.Le apasiona leer y cocinar. Asiste a clases de cocina y ha ganado en varias ocasiones el concurso de tortilla española. Tiene un grupo de amigos con los que queda una vez al mes en un bar de la zona ",
				Tech: [
					{ Name: "TIC/Internet", Value:  3},
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Maria se encuentra en una situación de monotonía y necesita vivir nuevas experiencias que le den chispa tanto a su vida como a la de su marido. Actualmente se está preparando para el B2 en Inglés porque se lo exigen en el trabajo" ,
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