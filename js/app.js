$(document).ready(function() {
  setTimeout(function() {
     $(".splash-screen").fadeOut(1500);
 },3000);

 setTimeout(function() {
      $(".main-section").fadeIn(1500);
  },3000);


});

// Funcionalidad libreria de banderitas
/*$("#demo").intlTelInput();
*/

//Funcionalidad view2
var $phoneInput = $(".phone-input");


function loadPage () {
 $phoneInput.keyup(validatePhone);
}

//Función para habilitar el botón de Next cuando se escriba el número.
function validatePhone () {
	var $containerAddPhone = $("#next");

	if($(this).val().trim().length > 0) {
		$containerAddPhone.removeAttr("disabled");
	} else {
		$containerAddPhone.attr("disabled", true);
	}
}

//Función para generar un número random que tendría que aparecer en un alert.

function getRandomArbitrary(min, max) {
 	return  Math.floor(Math.random() * (max - min)) + min;

/* 		alert("LAB-" + randomNumber);
 	}*/
 	 

}



$(document).ready(loadPage);
