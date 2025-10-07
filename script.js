// Seletores principais
const loginBox = document.getElementById("login-box");
const cadastroBox = document.getElementById("cadastro-box");

const loginForm = document.getElementById("login-form");
const cadastroForm = document.getElementById("cadastro-form");

const loginMsg = document.getElementById("login-msg");
const cadastroMsg = document.getElementById("cadastro-msg");

// Alterna para tela de cadastro
function mostrarCadastro() {
  loginBox.classList.add("hidden");
  cadastroBox.classList.remove("hidden");
}

// Alterna para tela de login
function mostrarLogin() {
  cadastroBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

// Cadastro de usuário
cadastroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("cadastro-usuario").value;
  const senha = document.getElementById("cadastro-senha").value;
  const email = document.getElementById("cadastro-email").value;
  const telefone = document.getElementById("cadastro-contato").value;

  // Verifica se já existe
  if (localStorage.getItem(usuario)) {
    cadastroMsg.textContent = "⚠️ Usuário já existe!";
    cadastroMsg.style.color = "red";
  } else {
    // Salva como objeto (JSON)
    const novoUsuario = {
      senha,
      email,
      telefone
    };
    localStorage.setItem(usuario, JSON.stringify(novoUsuario));

    cadastroMsg.textContent = "✅ Cadastro realizado com sucesso!";
    cadastroMsg.style.color = "green";

    // Limpa formulário
    cadastroForm.reset();

    // Volta para login depois de 1,5s
    setTimeout(() => {
      mostrarLogin();
    }, 1500);
  }
});

// Login de usuário
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("login-usuario").value;
  const senha = document.getElementById("login-senha").value;

  const dados = localStorage.getItem(usuario);

  if (dados) {
    const usuarioSalvo = JSON.parse(dados);

    if (usuarioSalvo.senha === senha) {
      loginMsg.textContent = "✅ Login realizado!";
      loginMsg.style.color = "green";

      // Salva usuário logado
      localStorage.setItem("usuarioLogado", usuario);

      // Redireciona para home
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    } else {
      loginMsg.textContent = "❌ Senha incorreta!";
      loginMsg.style.color = "red";
    }
  } else {
    loginMsg.textContent = "❌ Usuário não encontrado!";
    loginMsg.style.color = "red";
  }
});

