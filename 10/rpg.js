class Personagem {

    _nome;
    _forca;
    _pontosDeVida;
    _vivo = true;

    constructor(nome, pontosDeVida, forca) {
        this._nome = nome;
        this._pontosDeVida = pontosDeVida;
        this._forca = forca;

    }

    getstatus() {
        console.log(`o pontos de vida do ${this._nome} é ${this._pontosDeVida}`)
    }


    atacar(inimigo) {
        if (inimigo._pontosDeVida >= 0 && inimigo.morrer) {
            inimigo.tomarDano(this._forca);
        }
    }

    tomarDano(forca) {
        if (this._pontosDeVida > 0) {
            this._pontosDeVida -= forca;
            console.log(`sofreu um ataque de ${forca}`);
            if (this.pontosDeVida <= 0) {
                this.morrer();
            }
        }

    }

    recuperarVida(vida) {
        if (this._pontosDeVida > 0 && this.morrer) {
            this._pontosDeVida += vida;
            console.log(`recuperou ${vida} de vida`);

        }

    }
    morrer() {
        this._vivo = false;
        console.log(`${this._nome} Morreu`)

    }

}

class Guerreiro extends Personagem {
    tomarDano(danoRecebido) {
        danoRecebido -= 5; // pontos do escudo
        super.tomarDano(danoRecebido);
        console.log("Mas, esse dano foi reduzido em Y");
    }

}

class Mago extends Personagem {
    // ao atacar redus em 5 a propria vida, para fazr o ataque
    atacar(inimigo) {
        this._pontosDeVida -= 5;
        if (this._pontosDeVida <= 0) {
            console.log(`vida insuficiente para um ataque`)
            this._pontosDeVida -= 5;

        }
        super.atacar(inimigo);
    }

}
class Arqueiro extends Personagem {
    _totalDeFlexas;
    constructor(nome, pontosDeVida, forca, totalDeFlexas) {
        super(nome, pontosDeVida, forca);

        this._totalDeFlexas = totalDeFlexas;
    }
    atacar(inimigo) {
        if (this._totalDeFlexas <= 0) {
            console.log(`seu personagem não tem flexas para atacar`);
            return;
        }
        super.atacar(inimigo);
        this._totalDeFlexas--;
        console.log(`o arqueiro atacou o ${inimigo._nome} tem ${this._totalDeFlexas} de flexas`)

    }
}


let guerreiro = new Guerreiro("Guerreiro", 50, 30);
let mago = new Mago("Mago", 1000, 30);
let arqueiro = new Arqueiro("arqueiro", 50, 30, 10);

mago.getstatus();
guerreiro.getstatus();

mago.atacar(guerreiro);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);
arqueiro.atacar(guerreiro, 100);

guerreiro.getstatus();

