function convert(event) {
  const selectedfile = event.target.files;
  if (selectedfile.length > 0) {
    const [imageFile] = selectedfile;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      console.log("base64:", srcData);
      localStorage.setItem("img", srcData);
    };
    fileReader.readAsDataURL(imageFile);
  }
  let base64img = getBase64Img();

  base64ToImage(base64img, function (img) {
    document.getElementById("main").appendChild(img);
  });
}

function getBase64Img() {
  return localStorage.getItem("img");
}

function base64ToImage(base64img, callback) {
  let img = new Image();
  img.onload = function () {
    callback(img);
  };
  img.src = base64img;
}

function createCard() {
  let name = document.getElementById("name");
  let endereco = document.getElementById("endereco");
  let categoria = document.getElementById("categoria");
  let descricao = document.getElementById("descricao");
  let whats = document.getElementById("whats");
  let email = document.getElementById("email");
  let youtube = document.getElementById("youtube");

  localStorage.setItem("name", name);
  localStorage.setItem("endereco", endereco);
  localStorage.setItem("categoria", categoria);
  localStorage.setItem("desc", descricao);
  localStorage.setItem("wpp", whats);
  localStorage.setItem("email", email);
  localStorage.setItem("ytb", youtube);

  window.location.href = "/html/home.html";
}
