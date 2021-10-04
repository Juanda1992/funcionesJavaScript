

function entrenarPadawan (clasificar){

    // OBJETO

    let aprendices  ={
        nombre: ["Padawizi","Pawizo","Pawuzo"],
        planeta: ["Uron","Namecuzei","Start"],
        edad: ["16","12","15"],
        estatura:["1.75","1.52","1.60"]
    }

   if(aprendices.edad[1] >= 15) {
       let mensaje="Manejo de sable de luz";
       clasificar(mensaje,null)
   }else{
       let mensaje="Manejo de la fuerza";
       clasificar(null,mensaje)
   }
   return aprendices
}

entrenarPadawan((mayor15,menor15)=>{

    if(mayor15){
        console.log(mayor15);
        console.log("Mayor de 15");
    }else{
        console.log(menor15);
        console.log("Menor de 15");
    }

});