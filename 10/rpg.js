class Personagem {

    _nome;
    _forca;
    _pontosDeVida;
    _vivo = true;

    constructor(nome, pontosDeVida) {
        this._nome = nome;
        this._pontosDeVida = pontosDeVida;
        this._forca = 30;

    }

    getstatus() {
        console.log(`o pontos de vida do ${this._nome} é ${this._pontosDeVida}`)
    }


    atacar(inimigo) {
        if (inimigo._pontosDeVida >= 0) {
            inimigo.tomarDano(this._forca);
        }
    }

    tomarDano(forca) {
        if (this._pontosDeVida > 0) {
            this._pontosDeVida -= forca;
        }

    }

    recuperarVida() {
        if (this._pontosDeVida > 0) {
            this._pontosDeVida += 30;

        }

    }
    morrer() {

    }

}

class Guerreiro extends Personagem {
    // tem uma propriedade a mais que é pontos de esculdo
    //ao tomar dano, primeiro abate o dano do pontodeesculdo
    //depois calcula o dano
    //ao tomar dano, é reduxido em 5 por conta do esculdo

}

class Mago extends Personagem {
    // ao atacar redus em 5 a propria vida, para fazr o ataque

}


let guerreiro = new Guerreiro("Guerreiro", 1000);
let mago = new Mago("Mago", 1000);

mago.getstatus();
guerreiro.getstatus();

mago.atacar(guerreiro);

guerreiro.getstatus();

