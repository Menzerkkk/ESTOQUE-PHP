const form = document.getElementById("form-produto");
const lista = document.getElementById("lista-produtos");

const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const cor = document.getElementById("cor");
const tamanho = document.getElementById("tamanho");
const sku = document.getElementById("sku");

function gerarSKU() {
  let cat = categoria.value.substring(0, 3).toUpperCase();
  let corVal = cor.value.substring(0, 3).toUpperCase();
  let tam = tamanho.value.substring(0, 3).toUpperCase();

  if (!cat) return;

  sku.value = `${cat}-${corVal || "GEN"}-${tam || "STD"}`;
}

categoria.addEventListener("input", gerarSKU);
cor.addEventListener("input", gerarSKU);
tamanho.addEventListener("input", gerarSKU);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const produto = {
    nome: nome.value,
    categoria: categoria.value,
    cor: cor.value,
    tamanho: tamanho.value,
    sku: sku.value
  };

  const li = document.createElement("li");
  li.textContent = `${produto.nome} (${produto.sku})`;
  lista.appendChild(li);

  form.reset();
  sku.value = "";
});
