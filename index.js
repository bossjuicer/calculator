function getInput(num){
	document.getElementById("output-value").innerHTML;
}

function printinput(num){
	if (num ==""){
		document.getElementById("output-value").innerHTML=num;
	}
	else{
		document.getElementById("output-value").innerHTML=FormattedInput(num);
	}

}

function getOutput(num){
	document.getElementById("hs-value").innerHTML;
}

function printOutput(num){
	if (num==""){
		document.getElementById("hs-value").innerHTML=num;
	}
	else{
		document.getElementById("hs-value").innerHTML=FormattedInput(num);
	}
}

function getOperator(num){
	document.getElementById("operation-value").innerHTML;
}
function printOperator(num){
	if (num==""){
		document.getElementById("operation-value").innerHTML;
	}
	else{
		document.getElementById("operation-value").innerHTML=FormattedInput(num);
	}
}
function FormattedInput(num){

	var n=Number(num);
	var value=n.toString();
	return value;
}

printinput(88)
printOutput(989898)
// printOperator(+)
// var number=document.getElementsByClassName("number");

// number.addEventListener("click",function(){
// 	number.printoutput(num)

// })