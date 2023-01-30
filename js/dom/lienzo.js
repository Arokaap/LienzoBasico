const d = document;
let colorSeleccionado;

let $celdas;

//Metodo con el que genero la tabla
export function generarTabla(div) {
  const $tabla = d.createElement("table");
  $tabla.classList.add("tablerodibujo");

  for (let i = 0; i < 30; i++) {
    const $tr = d.createElement("tr");
    for (let i = 0; i < 30; i++) {
      const $td = d.createElement("td");
      $tr.appendChild($td);
    }
    $tabla.appendChild($tr);
  }

  const $div = d.getElementById(div);
  $div.appendChild($tabla);
}

//Metodo mediante el cual selecciono el color
export function seleccionarPincel(pincel) {
  d.addEventListener("click", (e) => {
    for (let i = 1; i <= 6; i++) {
      //Selecciono aquel donde el color coincida con el click
      if (e.target.matches(`.color${i}`)) {
        const $color = d.querySelector(`.color${i}`),
          $pincel = d.getElementById(pincel);
        cambiarColorSeleccionado();
        $color.classList.add("seleccionado");

        //Doy el color al pincel para hacer más visual el programa

        colorSeleccionado = window
          .getComputedStyle($color)
          .getPropertyValue("background-color");

        $pincel.style.backgroundColor = window
          .getComputedStyle($color)
          .getPropertyValue("background-color");

        if (
          window
            .getComputedStyle($color)
            .getPropertyValue("background-color") == "rgb(0, 0, 0)"
        ) {
          $pincel.style.color = "white";
        } else {
          $pincel.style.color = "rgb(0, 0, 0)";
        }
      }
    }
  });
}

//Metodo mediante el cual pinto las celdas sobre las que pasa el raton
export function pintar(celdas) {
  let estadoPincel = false;
  const $parrafoEstado = d.getElementById("pincel");

  d.addEventListener("click", (e) => {
    $celdas = d.querySelectorAll(celdas);
    if (
      e.target.matches(".tablerodibujo *") ||
      e.target.matches(".tablerodibujo")
    ) {
      if (!estadoPincel) {
        d.addEventListener("mouseover", mouseOverFunction);
        $parrafoEstado.textContent = `El pincel está ACTIVADO`;
        estadoPincel = true;
      } else {
        d.removeEventListener("mouseover", mouseOverFunction);
        $parrafoEstado.textContent = `El pincel está DESACTIVADO`;
        estadoPincel = false;
      }
    }
  });
}

//Metodo mediante el que cambio le quito el color seleccionado para luego aniadirselo al nuevo color
function cambiarColorSeleccionado() {
  const $colores = d.querySelectorAll(".seleccionado");

  for (let i = 0; i < 6; i++) {
    if ($colores[i]) {
      $colores[i].classList.remove("seleccionado");
    }
  }
}

//Funcion flecha con la que pinto en el lienzo (Esta se usará en el evento mouseover)
let mouseOverFunction = (e) => {
  $celdas.forEach(($item) => {
    if (e.target == $item) {
      $item.style.backgroundColor = colorSeleccionado;
    }
  });
};
