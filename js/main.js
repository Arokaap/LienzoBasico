//En este fichero cargaré las funcionalidades de la página

import estiloContenedor, { estiloTabla } from "./dom/estilos.js";
import { generarTabla, pintar, seleccionarPincel } from "./dom/lienzo.js";

const d = document; // Por ahorrarme escribir document cada que quiera usarlo, es una nueva practica que estoy usando para ahorrarme tiempo.

d.addEventListener("DOMContentLoaded", () => {
  generarTabla("zonadibujo");
  seleccionarPincel("pincel");
  estiloContenedor("contenedor");
  estiloTabla();
  pintar(".tablerodibujo td");
});
