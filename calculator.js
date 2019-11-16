function insert(num){
	document.form.textview.value = document.form.textview.value+num
}
function equal(){
	var exp = document.form.textview.value;
	if(exp){
		document.form.textview.value = eval(exp)
	}
}

function clean() {
	document.form.textview.value ="";
}

function back() {
	var exp = document.form.textview.value;
	document.form.textview.value =exp.substring(0,exp.length-1);
}
function btnMod() {
	document.form.text.view +="%";
	
}
function btnMod(){
	document.form.textview.value = "%";
	document.form.textview.value = eval(exp)
}



