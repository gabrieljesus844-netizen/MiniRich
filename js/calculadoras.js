function getValue(id){

return parseFloat(document.getElementById(id).value) || 0;

}

function setResult(id,value){

document.getElementById(id).innerHTML=value;

}



function compoundInterest(){

let p=getValue("principal");

let r=getValue("rate")/100;

let y=getValue("years");

let total=p*Math.pow(1+r,y);

setResult("result","Total: "+total.toFixed(2)+" €");

}
