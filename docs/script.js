let links = [];
let contador = 0;

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
  if (links.length === 0) return;

  contador++;
  document.getElementById("contador").innerHTML =
    `${contador} <span>contador de links distribuidos</span>`;

  const randomLink = links[Math.floor(Math.random() * links.length)];
  const resultado = document.getElementById("resultado");

  if (randomLink.includes("open.spotify.com/album")) {
    const albumId = randomLink.split("/album/")[1].split("?")[0];
    const embedUrl = `https://open.spotify.com/embed/album/${albumId}`;

    resultado.innerHTML = `
      <iframe src="${embedUrl}" allow="encrypted-media"></iframe>
    `;
  } else {
    resultado.innerHTML = `
      <a href="${randomLink}" target="_blank">${randomLink}</a>
    `;
  }
});
