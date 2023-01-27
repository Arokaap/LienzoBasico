const d = document;

export function generarTabla() {
  const $table = d.createElement("table");

  for (let i = 0; i < 30; i++) {
    const $tr = d.createElement("tr");
    for (let i = 0; i < 30; i++) {
      const $td = d.createElement("td");
      $tr.appendChild($td);
    }
    $table.appendChild($tr);
  }

  console.log($table);
}
