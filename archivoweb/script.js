let links = [];

fetch("links_extraidos_chat.csv")
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").slice(1);

    rows.forEach(row => {
      const cols = row.split(",");
      if (cols.length >= 2) {
        links.push({
          plataforma: cols[0],
          url: cols[1]
        });
      }
    });
  });

document.getElementById("randomBtn").addEventListener("click", () => {
  if (links.length === 0) return;

  const random = links[Math.floor(Math.random() * links.length)];

  document.getElementById("resultado").innerHTML = `
    <p><strong>${random.plataforma}</strong></p>
    <a href="${random.url}" target="_blank">${random.url}</a>
  `;
});
