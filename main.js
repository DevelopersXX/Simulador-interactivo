/* 
"Convertidor de temperaturas"

*Pedirle al usuario que ingrese la medida que quiere convertir.
*Pedirle al usuario que eliga la medida en la que quiere realizar la conversion.
*Imprimo el resultado de la conversion.

*/


//Defino la funcion
class calculadora {

    //Defino el constructor
    constructor(numero) {
        this.numero = numero
        this.resultado
    }
    //Defino la operacion de Celsius a Fahrenheit
    CelsiusFahrenheit(){
        this.resultado = numero * 9 / 5 + 32
    }
    //Defino la operacion de Celsius a Kalvin
    CelsiusKalvin() {
        this.resultado = numero + 273
    }
    //Defino la operacion de Fahrenheit a Celsius
    FahrenheitCelsius() {
        this.resultado = (numero-32) * 5 / 9
    }
    //Defino la operacion de Fahrenheit a Kalvin
    FahrenheitKalvin() {
        this.resultado = (numero-32) * 5 / 9 + 273
    }
    //Defino la operacion de Kalvin a Fehrenheit
    KalvinFehrenheit() {
        this.resultado = (numero-273) * 9 / 5 + 32
    }
    //Defino la operacion de Kalvin a Celsius
    KalvinCelsius() {
        this.resultado = numero -273
    }
}

//Le pido al usuario que ingrese la temperatura

let numero = parseInt( prompt("Ingrese el monto que quiere convertir"));

//Luego le pido al usuario que eliga la medida en la que quiere realizar la conversion 

let opcion = prompt("Seleccione la unidad de medida en la que quere la convercion:\n celsius a fahrenheit \n celsius a kalvin \n fahrenheit a celsius \n fahrenheit a kalvin \n kalvin a celsius \n kalvin a fahrenheit");

let calculo = new calculadora(numero)

switch(opcion) {
    //Imprimo resultado de Celsius a Fahrenheit
    case"celsius a fahrenheit": {
        calculo.CelsiusFahrenheit()
        console.log("El resultado es:", + calculo.resultado, "Fahrenheit");
        break;
    }
    //Imprimo resultado de Celsius a Kalvin
    case"celsius a kalvin": {
        calculo.CelsiusKalvin()
        console.log("El resultado es:", + calculo.resultado, "Kalvin");
        break;
    }
    //Imprimo resultado de Fahrenheit a Celsius
    case"fahrenheit a celsius": {
        calculo.FahrenheitCelsius()
        console.log("El resultado es:", + calculo.resultado, "Celsius");
        break;
    }
    //Imprimo resultado de Fahrenheit a Kalvin
    case"fahrenheit a kalvin": {
        calculo.FahrenheitKalvin()
        console.log("El resultado es:", + calculo.resultado, "Kalvin");
        break;
    }
    //Imprimo resultado de Kalvin a Fehrenheit
    case"kalvin a fahrenheit": {
        calculo.KalvinFehrenheit()
        console.log("El resultado es:", + calculo.resultado, "Fahrenheit");
        break;
    }
    //Imprimo resultado de Kalvin a Celsius
    case"kalvin a celsius": {
        calculo.KalvinCelsius()
        console.log("El resultado es:", + calculo.resultado, "Fahrenheit");
        break;
    }
    default: {
        console.log("Operacion invalida")
    }
}
