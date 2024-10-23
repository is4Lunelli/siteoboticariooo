if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}

window.onload = function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

function buttonrevisar() {
  const formContainer = document.querySelector('.form-container');
  const offsetTop = formContainer.getBoundingClientRect().top + window.pageYOffset; // Posição do contêiner em relação ao topo da página

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}
