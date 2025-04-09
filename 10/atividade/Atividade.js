class Funcionario {
    _nomeCompleto;
    _numeroDaMatricula;
    _anoDeAdmissao;
    _enderecoResidencial;

    _salario;

    constructor(nomeCompleto, numeroDaMatricula, anoDeAdmissao, enderecoResidencial) {
        this._nomeCompleto = nomeCompleto;
        this._numeroDaMatricula = numeroDaMatricula;
        this._anoDeAdmissao = anoDeAdmissao;
        this._enderecoResidencial = enderecoResidencial;
    }

    receberSalario(valor){
        console.log(`salario pago para ${this._nomeCompleto} de ${valor}`);

    }

    tempoDeEmpresa(dataAtual){
       dataAtual -= this._anoDeAdmissao;
        console.log(`tempo de empresa do funcionario ${this.nomeCompleto} é de ${dataAtual}`);
    }
    baterPonto(hora){
        return(console.log(`ponto batido as ${hora}`));
    }

}


class Gerente extends Funcionario {
    autorizarDespesas(valor){
        if(valor <= 2000){
            console.log(`valor de ${valor} autorizado`);
            return;
        }
        console.log(`valor de ${valor} não autorizado`)
    }
    receberSalario(valor){
        valor += valor * 0.2;
        super.receberSalario(valor);
    }
    

}
class OperadorDeCaixa extends Funcionario {
    fechamentoDeCaixa(valor){
        movimentacao = valor;
        console.log(`total de movimentação ${movimentacao} registrada`);
    }

    receberSalario(valor){
        super.receberSalario();
    }

}
class Estagiario extends Funcionario {
    receberSalario(valor){
        if (valor === 1000){
            super.receberSalario(valor);
            console.log(`valor de ${valor} fixo recebido`);
            return;
        }
        console.log(`o pagamento do estagiario tem que ser igual a 1000`);

    }
    registrarAtividade(atividadeDodia){
        console.log(` a atividade do dia do funcionaro foi ${atividadeDodia}`);

    }


}


let gerente = new Gerente("gerente primeiro",1234,2020,"rua naosei casa 0");
let caixa = new OperadorDeCaixa("caixa primeiro",1254,2019,"rua seinao casa 1");
let estagiario = new Estagiario("estagiario primeiro",1134,2020,"rua seila casa 2");



gerente.receberSalario(30);
estagiario.tempoDeEmpresa(2023);
caixa.baterPonto("02:15");

gerente.autorizarDespesas(3000);

gerente.receberSalario(1000);
estagiario.receberSalario(100);
estagiario.registrarAtividade("compra feita")
