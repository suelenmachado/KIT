

for (let i = 0; i < listaLivros.length; i++) {
  document.write("<img src=" + listaLivros[i] + ">");  
}
function adicionarLivro(){
  var livroFavorito = document.getElementById("livro").value;
  if (livroFavorito.endsWith(".jpg")) {
  listarLivros(livroFavorito);
  }else{
    console.error("Esse não é um endereço de imagem");
  }
 document.getElementById("livro").value = "";
}

function listarLivros(livro){
  console.log(livro);
  var elementoLivroFavorito = "<img src=" + livro + ">";
  var elementoListaLivros = document.getElementById("listaLivros");
  elementoListaLivros.innerHTML = elementoListaLivros.innerHTML + elementoLivroFavorito;  
  
}
