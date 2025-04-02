class Conta {
    _saldo; // Saldo privado
    _titular; // Titular privado

    constructor(titular, saldoInicial) {
        this._titular = titular;
        this._saldo = saldoInicial;
    }

    getSaldo() {
        return `Saldo de ${this._titular}: R$ ${this._saldo}`;
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(`deposito feito com sucesso novo salde de ${this._titular}: R$ ${this._saldo}`);
            return true;
        }
        console.log("valor invalido para depósito");
        return false;
    }

    sacar(valor){
        if (valor > 0 && valor <= this._saldo){
            this._saldo -= valor;
            console.log(`Saque feito com sucesso. Novo saldo de ${this._titular}: R$ ${this._saldo}`);
            return true;
        }
        console.log("Valor inválido para saque!");
        return false;

    }

    trasferir(valor, contaDestino){
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            console.log(`Transferencia feito com sucesso. Novo saldo de ${this._titular}: R$ ${this._saldo}`);
            return true;
        }
        console.log(`Transferencia cancelada.`);
        return false;

    }

    
    
}


class contaPoupanca extends Conta{
    calcularRendimento(){
        this._saldo += this._saldo * 0.005;
    }
}


class contaCorrente extends Conta{
    sacar(valor){
        const taxa = valor * 0.02;
        const novoValorTotal = valor + taxa;
        super.sacar(novoValorTotal);

    }

}


let conta1 = new contaPoupanca("Paulo", 1200);
let conta2 = new contaCorrente("Clodoaldo", 2100);
console.log(conta1.getSaldo());
console.log(conta2.getSaldo());


conta2.sacar(200);

conta1.sacar(200);

