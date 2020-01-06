function insert(num){
	document.form.textview.value = document.form.textview.value + num
}
function clean() {
	document.form.textview.value = 0
}
function back() {
	let exp = document.form.textview.value
	if(exp.length == 1){
		document.form.textview.value  = 0
	} else{
		document.form.textview.value = exp.substring(0,exp.length-1)
	}
}
function equal(){
	let exp = document.form.textview.value
	if(exp){
		document.form.textview.value = eval(exp)
	}
}