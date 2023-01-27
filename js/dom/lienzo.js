const d = document;

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
  console.log($div);
}

export function seleccionarPincel() {
  d.addEventListener("click", (e) => {
    const $color1 = d.querySelector(".color1"),
      $color2 = d.querySelector(".color2"),
      $color3 = d.querySelector(".color3"),
      $color4 = d.querySelector(".color4"),
      $color5 = d.querySelector(".color5"),
      $color6 = d.querySelector(".color6");

    if (e.target == $color1) {
      cambiarColorSeleccionado();
      $color1.classList.add("seleccionado");
    }

    if (e.target == $color2) {
      cambiarColorSeleccionado();
      $color2.classList.add("seleccionado");
    }

    if (e.target == $color3) {
      cambiarColorSeleccionado();
      $color3.classList.add("seleccionado");
    }

    if (e.target == $color4) {
      cambiarColorSeleccionado();
      $color4.classList.add("seleccionado");
    }

    if (e.target == $color5) {
      cambiarColorSeleccionado();
      $color5.classList.add("seleccionado");
    }

    if (e.target == $color6) {
      cambiarColorSeleccionado();
      $color6.classList.add("seleccionado");
    }
  });
}

function cambiarColorSeleccionado() {
  const $colores = d.querySelectorAll(".seleccionado");

  for (let i = 0; i < 6; i++) {
    if ($colores[i]) {
      $colores[i].classList.remove("seleccionado");
    }
  }
}
