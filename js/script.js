function irPara(id) {
    // Esconde todas as telas
    document.querySelectorAll(".tela").forEach(tela => {
      tela.classList.remove("active");
    });
  
    // Mostra a tela com o id escolhido
    document.getElementById(id).classList.add("active");
}