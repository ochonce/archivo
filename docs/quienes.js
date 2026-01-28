const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_PUBLIC_KEY";

const form = document.getElementById("resenaForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const autor = document.getElementById("autor").value.trim();
  const texto = document.getElementById("texto").value.trim();

  if (!autor || !texto) {
    status.textContent = "Completá todos los campos.";
    return;
  }

  status.textContent = "Enviando...";

  const response = await fetch(`${SUPABASE_URL}/rest/v1/resenas`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      autor,
      texto
    })
  });

  if (response.ok) {
    status.textContent = "Gracias por tu reseña 💿";
    form.reset();
  } else {
    status.textContent = "Error al enviar. Probá de nuevo.";
  }
});
