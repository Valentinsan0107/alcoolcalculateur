var input_2 = document.querySelector('#qty_2');
var btnminus_2 = document.querySelector('.qtyminus_2');
var btnplus_2 = document.querySelector('.qtyplus_2');

if (input_2 !== undefined && btnminus_2 !== undefined && btnplus_2 !== undefined && input_2 !== null && btnminus_2 !== null && btnplus_2 !== null) {
	
	var min_2 = Number(input_2.getAttribute('min'));
	var max_2 = Number(input_2.getAttribute('max'));
	var step_2 = Number(input_2.getAttribute('step'));

	function qtyminus_deux(e) {
		var current_2 = Number(input_2.value);
		var newval_2 = (current_2 - step_2);
		if(newval_2 < min_2) {
			newval_2 = min_2;
		} else if(newval_2 > max_2) {
			newval_2 = max_2;
		} 
		input_2.value = Number(newval_2);
		e.preventDefault();
	}

	function qtyplus_deux(e) {
		var current_2 = Number(input_2.value);
		var newval_2 = (current_2 + step_2);
		if(newval_2 > max_2) newval_2 = max_2;
		input_2.value = Number(newval_2);
		e.preventDefault();
	}
		
	btnminus_2.addEventListener('click', qtyminus_deux);
	btnplus_2.addEventListener('click', qtyplus_deux);
  
} 