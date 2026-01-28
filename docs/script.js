let links = [];

fetch("links_extraidos_chat.csv")
  .then(response => response.text())
  .then(data => {
    const lines = data.split("\n");

    lines.forEach((line, index) => {
      if (index === 0) return;
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

  // Detectar si es Spotify álbum
  if (randomLink.includes("open.spotify.com/album")) {
    const albumId = randomLink.split("/album/")[1].split("?")[0];
    const embedUrl = `https://open.spotify.com/embed/album/${albumId}`;

    resultado.innerHTML = `
      <iframe
        src="${embedUrl}"
        width="300"
        height="380"
        frameborder="0"
        allow="encrypted-media">
      </iframe>
      <p>
        <a href="${randomLink}" target="_blank">Abrir en Spotify</a>
      </p>
    `;
  } else {
    // fallback para YouTube u otros links
    resultado.innerHTML = `
      <p>Escuchá esto:</p>
      <a href="${randomLink}" target="_blank">${randomLink}</a>
    `;
  }
});
