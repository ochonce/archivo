let links = [];

fetch("links_extraidos_chat.csv")
  .then(response => response.text())
  .then(data => {
    const lines = data.split("\n");

    lines.forEach((line, index) => {
      if (index === 0) return; // salta encabezado
      const parts = line.split(",");
      if (parts.length > 1) {
        links.push(parts[1].trim());
      }
    });
  });

document.getElementById("randomBtn").addEventListener("click", () => {
  if (links.length === 0) {
    alert("Todavía no cargaron los links");
    return;
  }

  const randomLink = links[Math.floor(Math.random() * links.length)];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p>Escuchá esto:</p>
    <a href="${randomLink}" target="_blank">${randomLink}</a>
  `;
});
