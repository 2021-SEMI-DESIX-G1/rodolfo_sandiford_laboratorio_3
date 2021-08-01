console.log("Problema #1");
let numero = 250;
palindromo(numero);

function validar(numero, cadenaInvertida){
    if(numero == cadenaInvertida) {
        return true
    } else {
        return false
    }
}

function palindromo(numero) {
    let cadena = numero.length;
    let cadenaInvertida = "";

    while (cadena>=0) {
        cadenaInvertida = cadenaInvertida + numero.charAt(cadena);
        cadena--;
    }

    if (validar(numero, cadenaInvertida) == true) {
       return console.log("El numero: "+ numero +" Es palindromo\n");
    } else {
        return console.log("El numero: "+ numero +" No es palindromo\n");
    }
}

console.log("Problema #2");
const cadena2 = 'AAABBACCAA';
let val = '';


contarCaracter(cadena2, 'A');
contarCaracter(cadena2, 'B');
contarCaracter(cadena2, 'C');


function contarCaracter(cadena2, val) {
    let cont = 0

    for (let i=0; i<cadena2.length; i++) {
        if (val == cadena2.charAt(i)){
            cont++;
        }
    }
    console.log("La cantidad de "+ val +" es: "+ cont);
}

console.log("\nProblema #3");
let year = 1980;
calcularBiciestos(year);

function calcularBiciestos(year) {
    if(year%400 == 0) {
        return console.log("El año "+ year +" Es biciesto\n");
    }else if (year%4 == 0 && year%100 != 0) {
        return console.log("El año "+ year +" Es biciesto\n");
    } else {
        return console.log("El año "+ year +" No es biciesto\n");
    }
}

console.log("Problema #4");

let numero2;
process.stdout.write("Ingrese un número del 1 al 999999: ");
process.stdin.on('data', (data)=>{
    numero2 = data.toString();

    calcularNumPrimos(numero2);

    function calcularNumPrimos(numero2) {
        cont2 = 0;
        for(var i=1; i<numero2; i++) {
            if(i%i == 0) {
                cont2 = cont2 + i;
            }
        }
        process.stdout.write("La suma de números primos encontrados es de: "+ cont2);
        process.exit();
    }
});


