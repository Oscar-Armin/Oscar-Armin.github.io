//Calcular el factorial de un número.
//Por ejemplo, 5!=5*4*3*2*1=120 ; 0!=1

var n=prompt("Introduce el número del cual quieres saber su Factorial")

function factorial(n){
	// caso detener
	if(n===0) return 1;
	else{
	//caso recursivo
		return n * factorial(n-1)
	}
}

console.log(factorial(n))
document.write(factorial(n));
