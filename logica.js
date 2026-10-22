const btnformulario = document.getElementById("formularioTemperatura");
const htCelsius = document.getElementById("celsius");
const htKelvin = document.getElementById("resultadoKelvin");
const htFahrenheit = document.getElementById("resultadoFahrenheit");

btnformulario.addEventListener("submit", convertirTemperatura)

function convertirTemperatura(event) {
    event.preventDefault();
    if (htCelsius.value.trim() === "") {
        alert("Errrroooor, ingresa una temperatura valida")
        return
    }
    else {
        //no es necesario
    }
    let celsius = Number(htCelsius.value)
    let kelvin;
    let fahrenheit;
    kelvin = celsius + 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;

    htKelvin.textContent = `Grados Kelvin: ${kelvin}`
    htFahrenheit.textContent = `Grados Fahrenheit: ${fahrenheit}`

}





function cambiarTemperatura(){
    let entrada=prompt("Ingrese la temperatura en grados celsius: ");
    let celsius =Number(entrada)
    let kelvin;
    let fahrenheit;
    while(entrada === null || entrada.trim() === "" ||  Number.isNaN(celsius)){
        alert("Errrroooor, ingresa una temperatura valida")
        entrada = prompt("Ingrese la temperatura en grados Celsius:");
        celsius = Number(entrada);
    }
    kelvin=celsius+273.15;
    fahrenheit=(celsius*9/5)+32;
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);
}
cambiarTemperatura();