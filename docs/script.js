const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_PUBLIC_KEY";

async function cargarResenas() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/resenas?select=autor,texto,created_at&order=created_at.desc&limit=2`,
    {
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
      }
    }
  );

  const data = await res.json();
  const contenedor = document.getElementById("resenas");

  contenedor.innerHTML = "";

  data.forEach(r => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${r.autor}</strong><br>${r.texto}`;
    contenedor.appendChild(p);
  });
}

cargarResenas();
