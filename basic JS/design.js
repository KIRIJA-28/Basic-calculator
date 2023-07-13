/*
var a=parseInt(prompt("Enter the first number"));
var b=parseInt(prompt("Enter the second number"));
if(a>b)
{
    console.log("a is greater");
}
else{
    console.log("b is greater");
}
*/
var n1=parseInt(prompt("Enter the first number"));
var n2=parseInt(prompt("Enter the second number"));
var op=prompt("Enter the operator");
switch(op)
{
    case'+':document.getElementById("result").textContent=(n1+n2);break;
    case'-':console.log(n1-n2);("result").textcontent=(n1-n2);break;
    case'*':console.log(n1*n2);("result").textcontent=(n1*n2);break;
    case'/':console.log(n1/n2);("result").textcontent=(n1/n2);break;

}