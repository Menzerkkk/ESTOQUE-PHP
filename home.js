// Exibe o nome do usuário logado
const usuarioLogado = localStorage.getItem("usuarioLogado");

if (!usuarioLogado) {
  // se não estiver logado, volta para login
  window.location.href = "index.html";
} else {
  const dadosUsuario = JSON.parse(localStorage.getItem(usuarioLogado));
  document.getElementById("boas-vindas").textContent = 
    `Bem-vindo, ${usuarioLogado}!`;
}

// Função para abrir outras páginas
function abrirPagina(pagina) {
  window.location.href = pagina;
}

// Logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "index.html";
});
