let tipoDeCambio = [];
$.ajax({
  url: "./cambio.json",
  dataType: "json",
  success: (respuesta) => {
    mostrarCotizaciones(respuesta);
  },
});
const mostrarCotizaciones = (respuesta) => {
    tipoDeCambio = respuesta;
    const menuDesplegable = document.getElementById("menu-cotizacion");
    tipoDeCambio.forEach((moneda, indice) => {
      const html = `<li><button class="dropdown-item" type="button" id="dolar" onclick="mostrarCambio(${indice})">${moneda.moneda}</button></li>`;
      menuDesplegable.innerHTML = menuDesplegable.innerHTML + html;
    });
  };
  const mostrarCambio = (indice) => {
    Swal.fire(`el valor de venta es de:${tipoDeCambio[indice].venta} y el valor de compra es de:${tipoDeCambio[indice].compra}`)
  };
  
function validar(nombre, apellido, edad, prestamo) {
    if (nombre == "" || nombre == "undefined" || nombre.includes("@")) {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento',
        text: 'Por favor ingresa un nombre valido',
      })
      return false;
    }
    if (apellido == "" || apellido == "undefined" || apellido.includes("@")) {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento',
        text: 'Por favor ingresa un nombre valido',
      })
      return false;
    }
    if (edad < 18) {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento',
        text: 'Debes ser mayor de edad para solicitar un prestamo',
      });
      return false;
    } else if (edad == "" || isNaN(edad)) {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento',
        text: 'Por favor ingresa una edad valida',
      });
      return false;
    }
    if (prestamo < 10000) {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento',
        text: 'no ofrecemos prestamos menores a $10000',
      });
      return false;
    } else if (prestamo > 650000) {
      Swal.fire({
        icon: 'error',
        title: 'Lo siento',
        text: 'no ofrecemos prestamos mayores a $650000',
      })
      return false;
    } else if (prestamo.includes(".")) {
      Swal.fire({
        icon: 'error',
        title: 'Por favor',
        text: 'ingresa el numero sin el punto',
      })
      return false;
    } else{
      Swal.fire(
        'Felicidades',
        'Usted completo el formulario correctamente',
        'success'
      )
      return true;
    }
  }
  let simulador = $("#simulador");
  simulador.submit(function(e){
      e.preventDefault();
      let nombre = $("#nombre").val()
      let apellido = $("#apellido").val()
      let edad = $("#edad").val()
      let prestamo = $("#prestamo").val()
      let cuotas = $("#cuotas").val()
      let interes;
      if (prestamo < 25000) {
        interes = 0.25;
      } else if (prestamo > 25000) {
        interes = 0.4;
      }
      let precio = (prestamo * interes) / cuotas;
      console.log(nombre, apellido, edad, prestamo, cuotas, interes);
      let errores = validar(nombre, apellido, edad, prestamo)
      console.log(errores)
      if(errores === true){
        $("#simulador").remove();
        $("main").append(`<div class="recibo">
        <h2>TU RECIBO</h2>
        <p>Nombre: ${nombre} ${apellido}</p>
        <p>edad: ${edad}</p>
        <p>Valor del prestamo:$ ${prestamo}
        <p>valor de la cuota:$ ${precio}
        </div>`)
      }
  })
  const mostrarTipoDeCambio = (respuesta) => {
    tipoDeCambio = respuesta;
    const moneda = respuesta.find();
  };
  $("#nosotros").on("click", (e) => {
    e.preventDefault();
    $("main").append(`<div class="nosotros" style="display: none" id="nosotros1">
                      <p id="texto">Somos Prestapronto, una empresa prestamista dedicada a que puedas lograr tus objetivos de la forma mas rapida y eficiente,con nuestro servicio cumplir tus sueños nunca fue tan facil</p>
                      <img src="imagenes/fotoNosotros.jpg" alt="" style="width: 400px;">
                      </div>`);
    $("#nosotros1").delay(2000).slideDown("slow").delay(4000).slideUp(1000);
  });