
$(function(){
			  
				var geo = navigator.geolocation;

				// console.log(geo);
				var opciones= {}

				function geo_error(){

					console.log("hhhhm... this is akward... no puedo saber donde estas");

				}

				function geo_exito(posicion)
				{
					var lat= posicion.coords.latitude;
					var lon= posicion.coords.longitude;
					var mapa= new Image();

					mapa.src= "link del mapa"+lat+lon;
					$('#geo').append(mapa);

					//guardar variables en forma global
					 window.lat= lat; 
					window.lon = lon;
					obtenerGeoInformation(lat, lon);
					

				}


				geo.getCurrentPosition(geo_exito, geo_error, opciones); 
		});
