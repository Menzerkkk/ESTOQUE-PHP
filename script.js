const loginBox = document.getElementById("login-box");
const cadastroBox = document.getElementById("cadastro-box");

const loginForm = document.getElementById("login-form");
const cadastroForm = document.getElementById("cadastro-form");

const loginMsg = document.getElementById("login-msg");
const cadastroMsg = document.getElementById("cadastro-msg");

// Mostrar/ocultar telas
function mostrarCadastro() {
  loginBox.classList.add("hidden");
  cadastroBox.classList.remove("hidden");
}

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
  const contato = document.getElementById("cadastro-contato").value;

  if (localStorage.getItem(usuario, senha, email)) {
    cadastroMsg.textContent = "⚠️ Usuário já existe!";
    cadastroMsg.style.color = "red";
  } else {
    localStorage.setItem(usuario, senha, email, contato);
    cadastroMsg.textContent = "✅ Cadastro realizado com sucesso!";
    cadastroMsg.style.color = "green";
    cadastroForm.reset();
  }
});

// Login de usuário
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("login-usuario").value;
  const senha = document.getElementById("login-senha").value;
  const senhaSalva = localStorage.getItem(usuario);

  if (senhaSalva && senhaSalva === senha) {
    loginMsg.textContent = "✅ Login realizado!";
    loginMsg.style.color = "green";
    // Redirecionar (exemplo)
    setTimeout(() => {
      alert("Bem-vindo ao SmartStock!");
      window.location.href = "home.html"; // página principal do app
    }, 1000);
  } else {
    loginMsg.textContent = "❌ Usuário ou senha inválidos!";
    loginMsg.style.color = "red";
  }
});
