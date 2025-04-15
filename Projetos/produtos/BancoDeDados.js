import { Produto } from "./Produto.js"

export class BancoDeDados {
    // CREATE
    static salvar(produto) {
        localStorage.setItem(produto.id, JSON.stringify({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            peso: produto.peso,
            validade: produto.validade
        }));
    }

    // READ
    static buscarTodos() {
        // aramazenar tudo do local sotarege em um array
        const produtos = [];

        for(let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);

            if(!isNaN(parseInt(chave))){
                const dados = JSON.parse(localStorage.getItem(chave));
            
                produtos.push(Produto.fromJSON(dados));
            }
        }

        return produtos.sort((a,b) => a.id - b.id);

    }

    buscarPorId(id) {

    }

    // UPDATE
    atualizar(produtoAtualizado) {

    }

    //DELETE
    excluir(id) {

    }
}