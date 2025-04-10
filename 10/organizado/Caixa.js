import { Funcionario } from "./Funcionarios.js";


export class caixa extends Funcionario {
    fechamentoDeCaixa(valor) {
        movimentacao = valor;
        console.log(`total de movimentação ${movimentacao} registrada`);
    }

    receberSalario(valor) {
        super.receberSalario();
    }

}
