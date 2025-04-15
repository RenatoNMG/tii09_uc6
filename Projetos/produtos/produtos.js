import { BancoDeDados } from "./BancoDeDados.js";

const ul = document.getElementById("listaprodutos");
const produts = BancoDeDados.buscarTodos();

if (produts.length === 0) {
    ul.innerHTML = `<li>Nenhum Produto cadastrado! </li>`
} else {
    produts.forEach(p => {
        const li = document.createElement("li");
        let texto = `${p.nome} - R$${p.preco} - Validade: ${p.validade}`
        
        
        
        li.textContent = p.toString();

        ul.appendChild(li);
    })
}