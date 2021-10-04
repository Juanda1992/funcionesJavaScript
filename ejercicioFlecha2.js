let obtenerNombre = codigoNave => (codigoNave.split(":"));

console.log(obtenerNombre("ARQ255: Sara Bel-Sun")[1]);
console.log(obtenerNombre("ARQ2556: Nodin Chavdri")[1]);
console.log(obtenerNombre("ARQ2557: Finn")[1]);