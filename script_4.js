var input_4 = document.querySelector('#qty_4');
var btnminus_4 = document.querySelector('.qtyminus_4');
var btnplus_4 = document.querySelector('.qtyplus_4');

if (input_4 !== undefined && btnminus_4 !== undefined && btnplus_4 !== undefined && input_4 !== null && btnminus_4 !== null && btnplus_4 !== null) {
	
	var min_4 = Number(input_4.getAttribute('min'));
	var max_4 = Number(input_4.getAttribute('max'));
	var step_4 = Number(input_4.getAttribute('step'));

	function qtyminus_quatre(e) {
		var current_4 = Number(input_4.value);
		var newval_4 = (current_4 - step_4);
		if(newval_4 < min_4) {
			newval_4 = min_4;
		} else if(newval_4 > max_4) {
			newval_4 = max_4;
		} 
		input_4.value = Number(newval_4);
		e.preventDefault();
	}

	function qtyplus_quatre(e) {
		var current_4 = Number(input_4.value);
		var newval_4 = (current_4 + step_4);
		if(newval_4 > max_4) newval_4 = max_4;
		input_4.value = Number(newval_4);
		e.preventDefault();
	}
		
	btnminus_4.addEventListener('click', qtyminus_quatre);
	btnplus_4.addEventListener('click', qtyplus_quatre);
  
} 