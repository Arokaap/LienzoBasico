const d = document;

export default function estiloContenedor(contenedor) {
  const $contenedor = d.getElementById(contenedor);

  //Damos los estilos necesarios usando el div contenedor
  $contenedor.style.height = "60vh";
  $contenedor.style.margin = "5%";
  $contenedor.style.display = "flex";
  $contenedor.style.flexDirection = "column";
  $contenedor.style.justifyContent = "space-around";
  $contenedor.style.alignItems = "center";

  const $parrafos = d.querySelectorAll("p");
  $parrafos[1].textContent = `Haga CLICK en cualquier celda para activar/desactivar el Pincel`;
}

//Damos estilos a la tabla para que cada td tenga un borde negro
export function estiloTabla() {
  const $tabla = d.querySelectorAll(`.tablerodibujo td`);
  $tabla.forEach((item) => {
    item.style.border = "1px solid black";
  });
}
