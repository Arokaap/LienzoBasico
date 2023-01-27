//En este fichero cargaré las funcionalidades de la página

import { generarTabla } from "./dom/lienzo.js";

const d = document; // Por ahorrarme escribir document cada que quiera usarlo, es una nueva practica que estoy usando para ahorrarme tiempo.

d.addEventListener("DOMContentLoaded", () => {
  generarTabla();
});
