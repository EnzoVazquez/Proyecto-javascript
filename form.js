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
let form = document.getElementById("simulador");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let domNomb = document.getElementById("nombre").value;
    let domApe = document.getElementById("apellido").value;
    let domEdad = document.getElementById("edad").value;
    let domPrest = document.getElementById("prestamo").value;
    let domCuotas = document.getElementById("cuotas").value;
    let interes
     if (domPrest < 25000) {
         interes = 0.25
     }else if(domPrest > 25000){
         interes = 0.4
     }
    let domPrecio = (domPrest * interes) / domCuotas
    console.log(domNomb, domApe, domEdad, domPrest, domCuotas);
    let errores = validar(domNomb, domApe, domEdad, domPrest);
    if(errores == true){
        alert("el formulario fue llenado correctamente")
    }else {
        alert(errores)
    }
    let info = document.createElement("p");
    info.innerHTML =  `<div style="text-align: center; font-size: large;" id="recibo">
                       <h2>RECIBO</h2>
                       <p style="color: black;">Nombre completo: ${domNomb} ${domApe}</p>
                       <p style="color: black;">Edad:${domEdad}</p> 
                       <p style="color: black;">Prestamo:$${domPrest}</p>
                       <p style="color: black;">Cuotas:${domCuotas}</p>
                       <p style="color: black;">Valor de las cuotas: $ ${domPrecio}
                       </div>`
    document.body.appendChild(info);
    $("#recibo").slideDown(4000)
                .delay(4000)
                .slideUp(2000);
});
$("#nosotros").on("click",(e)=>{
    e.preventDefault();
    $("main").append(`<div class="nosotros" style="display: none" id="nosotros1">
                    <p id="texto">Somos Prestapronto, una empresa prestamista dedicada a que puedas lograr tus objetivos de la forma mas rapida y eficiente,con nuestro servicio cumplir tus sueños nunca fue tan facil</p>
                    <img src="img/fotoNosotros.jpg" alt="" style="width: 400px;">
                    </div>`);
    $("#nosotros1").delay(2000)
            .slideDown("slow")
            .delay(4000)
            .slideUp(1000);
    
})
const urlJson = "cambio.JSON"
var obj = toString("cambios.JSON")
var valorCompra = obj["dolar.compra"] 
console.log(valorCompra)
$("#dolar").click(()=>{
    $.getJSON(urlJson, function (respuesta, estado) {
        if(estado === "success"){
            let cambio = respuesta;
            for(const dolar of cambio){
                alert( `compra: ${dolar.compra}, venta: ${dolar.venta}`)
            }
        }
    })
})
$("#euro").click(()=>{
    $.getJSON(urlJson, function (respuesta, estado) {
        if(estado === "success"){
            let cambio = respuesta;
            for(const cambios of cambio){
                alert( `compra: ${cambios.compra}, venta: ${cambios.venta} `)
            }
        }
    })
})
$("#real").click(()=>{
    $.getJSON(urlJson, function (respuesta, estado) {
        if(estado === "success"){
            let cambio = respuesta;
            for(const cambios of cambio){
                alert( `compra: ${cambios.compra}, venta: ${cambios.venta} `)
            }
        }
    })
})