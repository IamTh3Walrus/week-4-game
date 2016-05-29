$(document).ready(function(){
	var random = Math.floor(Math.random() * 120) + 19; 
	$('#numberToGuess').html(random);

})

$(document).ready(function(){
	 $("#lennon").on("click", function(){
	 	var random = Math.floor(Math.random() * 12)*10 + 1; 
	 	$('#randomNumber').html(random);
	 	
	 	})
})

$(document).ready(function(){
	 $("#mccartney").on("click", function(){
	 	var random = Math.floor(Math.random() * 12)*5 + 1; 
	 	$('#randomNumber').html(random);
	 	
	 	})
})

$(document).ready(function(){
	 $("#harrison").on("click", function(){
	 	var random = Math.floor(Math.random() * 12)*9 + 1; 
	 	$('#randomNumber').html(random);
	 	
	 	})
})

$(document).ready(function(){
	 $("#ringo").on("click", function(){
	 	var random = Math.floor(Math.random() * 12)*3 + 1; 
	 	$('#randomNumber').html(random);
	 	
	 	})
})

$(document).ready(function(){
	if(randomNumber === numberToGuess){
		alert('You win');
	}else if(randomNumber > numberToGuess){
		alert('You lose');
	}
		

})





