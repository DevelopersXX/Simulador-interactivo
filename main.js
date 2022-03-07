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
    CelsiusFahrenheit() {
        this.resultado = numero * 9 / 5 + 32
    }
    //Defino la operacion de Celsius a Kalvin
    CelsiusKalvin() {
        this.resultado = numero + 273
    }
    //Defino la operacion de Fahrenheit a Celsius
    FahrenheitCelsius() {
        this.resultado = (numero - 32) * 5 / 9
    }
    //Defino la operacion de Fahrenheit a Kalvin
    FahrenheitKalvin() {
        this.resultado = (numero - 32) * 5 / 9 + 273
    }
    //Defino la operacion de Kalvin a Fehrenheit
    KalvinFehrenheit() {
        this.resultado = (numero - 273) * 9 / 5 + 32
    }
    //Defino la operacion de Kalvin a Celsius
    KalvinCelsius() {
        this.resultado = numero - 273
    }
}


//Le pido al usuario que ingrese la temperatura
let numero = parseInt(prompt("Ingrese el monto que quiere convertir"));

//Defino la arrya
const opcionUsuario = ["celsius a fahrenheit", "celsius a kalvin", "fahrenheit a celsius", "fahrenheit a kalvin", "kalvin a celsius", "kalvin a fahrenheit"];

//Luego le pido al usuario que eliga la medida en la que quiere realizar la conversion 
const opcion = prompt("Seleccione la unidad de medida en la que quere la convercion:\n celsius a fahrenheit \n celsius a kalvin \n fahrenheit a celsius \n fahrenheit a kalvin \n kalvin a celsius \n kalvin a fahrenheit")

if (opcionUsuario.indexOf(opcion) !== -1) {
    let calculo = new calculadora(numero)

    switch (opcion) {
        //Imprimo resultado de Celsius a Fahrenheit
        case "celsius a fahrenheit": {
            calculo.CelsiusFahrenheit()
            console.log("El resultado es:", +calculo.resultado, "Fahrenheit");
            break;
        }
        //Imprimo resultado de Celsius a Kalvin
        case "celsius a kalvin": {
            calculo.CelsiusKalvin()
            console.log("El resultado es:", +calculo.resultado, "Kalvin");
            break;
        }
        //Imprimo resultado de Fahrenheit a Celsius
        case "fahrenheit a celsius": {
            calculo.FahrenheitCelsius()
            console.log("El resultado es:", +calculo.resultado, "Celsius");
            break;
        }
        //Imprimo resultado de Fahrenheit a Kalvin
        case "fahrenheit a kalvin": {
            calculo.FahrenheitKalvin()
            console.log("El resultado es:", +calculo.resultado, "Kalvin");
            break;
        }
        //Imprimo resultado de Kalvin a Fehrenheit
        case "kalvin a fahrenheit": {
            calculo.KalvinFehrenheit()
            console.log("El resultado es:", +calculo.resultado, "Fahrenheit");
            break;
        }
        //Imprimo resultado de Kalvin a Celsius
        case "kalvin a celsius": {
            calculo.KalvinCelsius()
            console.log("El resultado es:", +calculo.resultado, "Fahrenheit");
            break;
        }
        default: {
            console.log("Operacion invalida")
        }
    }

} else {
    console.log("Unidad seleccionada invalida")
}

class Provincia {
    constructor(provincia, temperatura) {
        this.provincia = provincia;
        this.temperatura = temperatura;
    }
    mostrar() {
        console.log("Clima de la Provincia " + this.provincia, +this.temperatura);
    }
}
const Provincia1 = new Provincia("Jujuy", 26);
const Provincia2 = new Provincia("Salta", 24);
const Provincia3 = new Provincia("Formosa", 22);
const Provincia4 = new Provincia("Misiones", 25);
const Provincia5 = new Provincia("Santiago del estero", 26);
const Provincia6 = new Provincia("Tucuman", 20);
const Provincia7 = new Provincia("Chaco", 23);
const Provincia8 = new Provincia("Corrientes", 21);
const Provincia9 = new Provincia("Catamarca", 23);
const Provincia10 = new Provincia("Santa Fe", 24);
const Provincia11 = new Provincia("La Rioja", 23);
const Provincia12 = new Provincia("Córdoba", 21);
const Provincia13 = new Provincia("Entre Ríos", 23);
const Provincia14 = new Provincia("San Juan", 20);
const Provincia15 = new Provincia("San Luis", 21);
const Provincia16 = new Provincia("Mendoza", 20);
const Provincia17 = new Provincia("Buenos Aires", 22);
const Provincia18 = new Provincia("La Pampa", 19);
const Provincia19 = new Provincia("Neuquen", 18);
const Provincia20 = new Provincia("Río Negro", 16);
const Provincia21 = new Provincia("Chubut", 14);
const Provincia22 = new Provincia("Santa Cruz", 12);
const Provincia23 = new Provincia("Tierra del Fuego", 3);

Provincia1.mostrar();
Provincia2.mostrar();
Provincia3.mostrar();
Provincia4.mostrar();
Provincia5.mostrar();
Provincia6.mostrar();
Provincia7.mostrar();
Provincia8.mostrar();
Provincia9.mostrar();
Provincia10.mostrar();
Provincia11.mostrar();
Provincia12.mostrar();
Provincia13.mostrar();
Provincia14.mostrar();
Provincia15.mostrar();
Provincia16.mostrar();
Provincia17.mostrar();
Provincia18.mostrar();
Provincia19.mostrar();
Provincia20.mostrar();
Provincia21.mostrar();
Provincia22.mostrar();
Provincia23.mostrar();

// Defino arrayss
const Ciudades = [
    {nombre: "Jujuy", temperatura: 26},
    {nombre: "Salta", temperatura: 24},
    {nombre: "Formosa", temperatura: 22},
    {nombre: "Misiones", temperatura: 25},
    {nombre: "Santiago del estero", temperatura: 26},
    {nombre: "Tucuman", temperatura: 20},
    {nombre: "Chaco", temperatura: 23},
    {nombre: "Corrientes", temperatura: 21},
    {nombre: "Catamarca", temperatura: 23},
    {nombre: "Santa Fe", temperatura: 24},
    {nombre: "La Rioja", temperatura: 23},
    {nombre: "Córdoba", temperatura: 21},
    {nombre: "Entre Ríos", temperatura: 23},
    {nombre: "San Juan", temperatura: 20},
    {nombre: "San Luis", temperatura: 21},
    {nombre: "Mendoza", temperatura: 20},
    {nombre: "Buenos Aires", temperatura: 22},
    {nombre: "La Pampa", temperatura: 19},
    {nombre: "Neuquen", temperatura: 18},
    {nombre: "Río Negro", temperatura: 16},
    {nombre: "Chubut", temperatura: 14},
    {nombre: "Santa Cruz", temperatura: 12},
    {nombre: "Tierra del Fuego", temperatura: 3},
]

const resultado = Ciudades.filter((el) =>  el.temperatura > 20 )
const resultado2 = Ciudades.filter((el) =>  el.temperatura < 20)
const resultado3 = Ciudades.find((el) => el.nombre === "Córdoba")

console.log(resultado)
console.log(resultado2) 
console.log(resultado3) 