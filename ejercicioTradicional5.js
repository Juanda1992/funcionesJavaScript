function calcularSalario(salario,comision,deduciones){
    
    let deduccion= ((salario + comision)*deduciones)
    console.log(`El salario del personal de ventas es: ${((salario + comision)-deduccion) }`)

}

calcularSalario(3500000,1500000,5/100);