let robarPlanos =(idPlano,despegar ) => {

    if(idPlano == null){
        let mensaje = "No hay planos, debes quedarte en el planeta y buscarlos";
        despegar(mensaje,null)
    }else{
        let mensaje = "Se han robado los planos de la nave con id: " + idPlano;
        despegar(null,mensaje)
    }
}   

robarPlanos('DEATH01',(msjError,msjExito)=>{

    if(msjError){
        console.log(msjError);
    }else{
        console.log(msjExito);
        console.log("Nave arrancando"); 
    }
})