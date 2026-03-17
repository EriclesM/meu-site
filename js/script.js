/* FUNÇÃO DE TROCA DE TEMA
Alterna entre tema claro e escuro e salva a preferência
no navegador usando localStorage */
function trocarTema() {
  const body = document.body;

  // ícones de sol e lua
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");

  // alterna a classe "dark" no body
  body.classList.toggle("dark");

  // verifica qual tema está ativo após a troca
  if (body.classList.contains("dark")) {
    // salva preferência como tema escuro
    localStorage.setItem("tema", "dark");

    // troca os ícones
    sun.style.display = "none";
    moon.style.display = "block";
  } else {
    // salva preferência como tema claro
    localStorage.setItem("tema", "light");

    // troca os ícones
    sun.style.display = "block";
    moon.style.display = "none";
  }
}

/* CARREGAR TEMA SALVO
Executa quando a página é aberta e aplica o tema salvo */
window.onload = function () {
  const temaSalvo = localStorage.getItem("tema");

  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");

  // se o tema salvo for escuro, aplica automaticamente
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");

    // verifica se os ícones existem antes de alterar
    if (sun && moon) {
      sun.style.display = "none";
      moon.style.display = "block";
    }
  }
};

/* FORMULÁRIO DE CONTATO
Valida os campos antes de "enviar" */
const form = document.getElementById("form-contato");

// verifica se o formulário existe na página
if (form) {
  form.addEventListener("submit", function (event) {
    // impede o envio padrão (recarregar página)
    event.preventDefault();

    // captura e limpa os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const status = document.getElementById("msg-status");

    /* VALIDAÇÕES */

    // valida nome
    if (nome === "") {
      status.textContent = "Por favor, preencha o nome.";
      status.style.color = "red";
      return;
    }

    // valida email vazio
    if (email === "") {
      status.textContent = "Por favor, preencha o email.";
      status.style.color = "red";
      return;
    }

    // valida formato básico de email
    if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "Digite um email válido.";
      status.style.color = "red";
      return;
    }

    // valida mensagem
    if (mensagem === "") {
      status.textContent = "Por favor, escreva uma mensagem.";
      status.style.color = "red";
      return;
    }

    /* SUCESSO */

    status.textContent = "Mensagem enviada com sucesso!";
    status.style.color = "green";

    // limpa os campos do formulário
    form.reset();
  });
}
