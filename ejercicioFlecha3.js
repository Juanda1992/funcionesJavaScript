let calcularTemperaturaMaxima =(temperatura1,temperatura2,temperatura3,temperatura4)=>
(Math.max(temperatura1,temperatura2,temperatura3,temperatura4))


let calcularTemperaturaMinima = (temperatura1,temperatura2,temperatura3,temperatura4)=>
(Math.min(temperatura1,temperatura2,temperatura3,temperatura4))


let temperaturaMaxima=calcularTemperaturaMaxima(-5,-200,-30,10);
let temperaturaMinima=calcularTemperaturaMinima(-5,-200,-30,10);


console.log(`El promedio de temperatura es: ${(temperaturaMaxima+temperaturaMinima)/2}°C`);