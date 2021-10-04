function obtenerNombre(codigoNave){

    return(codigoNave.split(":"));

}

console.log(obtenerNombre("ARQ2555: Sara Bel-Sun")[1]);
console.log(obtenerNombre("ARQ2556: Nodin Chavdri")[1]);
console.log(obtenerNombre("ARQ2557: Finn")[1]);