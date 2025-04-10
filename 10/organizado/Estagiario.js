import {Funcionario} from "./Funcionarios.js";


export class Estagiario extends Funcionario {
    receberSalario(valor) {
        if (valor === 1000) {
            super.receberSalario(valor);
            console.log(`valor de ${valor} fixo recebido`);
            return;
        }
        console.log(`o pagamento do estagiario tem que ser igual a 1000`);

    }
    registrarAtividade(atividadeDodia) {
        console.log(` a atividade do dia do funcionaro foi ${atividadeDodia}`);

    }


}
