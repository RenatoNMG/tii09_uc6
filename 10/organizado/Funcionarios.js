export class Funcionario {
    _nomeCompleto;
    _numeroDaMatricula;
    _anoDeAdmissao;
    _enderecoResidencial;
    _salario;


    _horas = new Date().getHours();
    _minutes = new Date().getMinutes();
    


    


    constructor(nomeCompleto, numeroDaMatricula, anoDeAdmissao, enderecoResidencial) {
        this._nomeCompleto = nomeCompleto;
        this._numeroDaMatricula = numeroDaMatricula;
        this._anoDeAdmissao = anoDeAdmissao;
        this._enderecoResidencial = enderecoResidencial;
    }

    receberSalario(valor) {
        console.log(`salario pago para ${this._nomeCompleto} de ${valor}`);

    }

    tempoDeEmpresa(dataAtual) {
        dataAtual -= this._anoDeAdmissao;
        console.log(`tempo de empresa do funcionario ${this.nomeCompleto} é de ${dataAtual}`);
    }
    baterPonto() {
        return (console.log(`ponto batido as ${this._horas}:${this._minutes}h do funcionario ${this._nomeCompleto}`));
    }

}





