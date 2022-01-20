function validar(nombre, apellido, edad, prestamo){
    if(nombre == "" || nombre == "undefined" || nombre.includes("@")){
        return'Ingresa un nombre valido'
    }
    if(apellido == "" || apellido == "undefined" || apellido.includes("@")){
        return'Ingresa un nombre valido';
    }
    if(edad < 18){
        return'Lo siento, debes ser mayor de edad para solicitar un prestamo';
    } else if(edad == "" || isNaN(edad)){
        return'Ingresa una edad valida';
    }
    if(prestamo < 10000){
        return 'Lo siento, no ofrecemos prestamos menores a $10.000';
    }else if(prestamo > 650000){
        return 'lo siento, no ofrecemos prestamos mayores a $650.000';
    }else if(prestamo.includes(".")){
        return'Por favor, ingresa el numero sin el punto'
    }
}
let form = $("#simulador")
$("#boton").on("click", (e)=>{
    e.preventDefault();
    let domNomb = $("nombre").val();
    let domApe = $("#apellido").val();
    let domEdad = $("#edad").val();
    let domPrest = $("#prestamo").val();
    let domCuotas = $("#cuotas").val();
    let interes
     if (domPrest < 25000) {
         interes = 0.25
     }else if(domPrest > 25000){
         interes = 0.4
     }
     let domPrecio = (domPrest * interes) / domCuotas
     let validacion = validar(domNomb, domApe, domEdad, domPrest);
     if(validacion === true){
         $("main").append(`<div style="text-align: center; font-size: large;" id="recibo">
            <h2>RECIBO</h2>
            <p style="color: black;">Nombre completo: ${domNomb} ${domApe}</p>
            <p style="color: black;">Edad:${domEdad}</p> 
            <p style="color: black;">Prestamo:$${domPrest}</p>
            <p style="color: black;">Cuotas:${domCuotas}</p>
            <p style="color: black;">Valor de las cuotas: $ ${domPrecio}
            </div>`)
     }else{
         alert(validacion)
     }
     $("#recibo").slideDown(4000)
                .delay(4000)
                .slideUp(2000);
});