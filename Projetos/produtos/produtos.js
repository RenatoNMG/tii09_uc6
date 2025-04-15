import { BancoDeDados } from "./BancoDeDados.js";

const ul = document.getElementById("listaprodutos");
const produts = BancoDeDados.buscarTodos();

if (produts.length === 0) {
    ul.innerHTML = `<li>Nenhum Produto cadastrado! </li>`
} else {
    produts.forEach(p => {

        // cria e informa o texto dos itens da lsita

       
        const li = document.createElement("li");
        let texto = `${p.nome} - R$${p.preco} - Validade: ${p.validade}`
        li.textContent = p.toString();

         // cria um botão "editar"

         const btnEditar = document.createElement("button");
         btnEditar.textContent = "Editar";

        // cria um botão "excluir"
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = ()=>{
            BancoDeDados.excluir(p.id);
            window.location.reload();
        }


        li.append(" ",btnEditar," ",btnExcluir);

        ul.appendChild(li);
    })
}