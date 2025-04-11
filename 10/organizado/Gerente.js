import { Funcionario } from './Funcionarios.js';


export class Gerente extends Funcionario {
    autorizarDespesas(valor) {
        if (valor <= 2000) {
            console.log(`valor de ${valor} autorizado`);
            return;
        }
        console.log(`valor de ${valor} não autorizado`)
    }
    receberSalario(valor) {
        valor += valor * 0.2;
        super.receberSalario(valor);
    }


}