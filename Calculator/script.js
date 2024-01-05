const keys = document.querySelector('.calc_keys');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator')

// keys.addEventListener('click', function(event){
// 	var i = event.target.id;
	
// 	if(event.target.className === 'number' && display.value === '0'){
// 		display.value = i;
// 	}

// 	else if(event.target.className === 'number'){
// 		display.value += i;
// 	}
// 	else if(event.target.className === 'decimal'){
// 		display.value += i;
// 	}

// 	else if(event.target.id === 'clear'){
// 		display.value = '0';
// 	}

// 	else if(event.target.className === 'operator'){
// 		display.value += i;
// 	}

// 	else if(event.target.id === '='){
// 		display.value = eval(display.value)
// 	}
// });


keys.addEventListener('click', function(event){
	if(event.target.classList.contains('operator')){
		operatorButtons.forEach(i => i.classList.remove("changeColorEval"));
		event.target.classList.add("changeColorEval");
	}

	

});


