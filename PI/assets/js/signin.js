let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  let inputSenha = document.getElementById("senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

function entrar() {
  let usuario = document.getElementById("user").value;
  let senha = document.getElementById("senha").value;
  if (
    usuario == localStorage.getItem("user") &&
    senha == localStorage.getItem("senha")
  ) {
    window.location.href = "/html/home.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
}
