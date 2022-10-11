var input_3 = document.querySelector('#qty_3');
var btnminus_3 = document.querySelector('.qtyminus_3');
var btnplus_3 = document.querySelector('.qtyplus_3');

if (input_3 !== undefined && btnminus_3 !== undefined && btnplus_3 !== undefined && input_3 !== null && btnminus_3 !== null && btnplus_3 !== null) {
	
	var min_3 = Number(input_3.getAttribute('min'));
	var max_3 = Number(input_3.getAttribute('max'));
	var step_3 = Number(input_3.getAttribute('step'));

	function qtyminus_trois(e) {
		var current_3 = Number(input_3.value);
		var newval_3 = (current_3 - step_3);
		if(newval_3 < min_3) {
			newval_3 = min_3;
		} else if(newval_3 > max_3) {
			newval_3 = max_3;
		} 
		input_3.value = Number(newval_3);
		e.preventDefault();
	}

	function qtyplus_trois(e) {
		var current_3 = Number(input_3.value);
		var newval_3 = (current_3 + step_3);
		if(newval_3 > max_3) newval_3 = max_3;
		input_3.value = Number(newval_3);
		e.preventDefault();
	}
		
	btnminus_3.addEventListener('click', qtyminus_trois);
	btnplus_3.addEventListener('click', qtyplus_trois);
  
} 