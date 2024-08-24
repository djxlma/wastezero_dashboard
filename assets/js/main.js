//adicionar classe hover ao item selecionado da lista
let lista = document.querySelectorAll(".navegacao li");

function linkAtivo(){
    lista.forEach(item=>{
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

lista.forEach(item => item.addEventListener("mouseover", linkAtivo));