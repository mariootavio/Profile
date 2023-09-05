function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = querySelector("#profile img")

  if (html.classlist.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
//pegar tag image

//substituir a imagem
//se tiver light mode, add a imagem light
//se tiver  sem light mode, manter imagem normal
