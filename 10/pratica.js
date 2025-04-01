/*
Crie a Classe "Personagem"
De a esse personagem um nome, e pontos de vida, ambos privados.
Crie o método construtor que informa o 
nome e os pontos de vida do personagem
Crie a função para "tomarDano" no personagem
Crie a função para "recuperarVida" no personagem
*/

class personagem {

    #nome;
    #vida;
    #forca;
    #vivo;

    constructor(nome, vida) {
        this.#nome = nome;
        this.#vida = vida;
        this.#forca = 30;
        this.#vivo = true;
    }

    // ao zerar os pontos de vida o personagem morre,
    // não pode atacar, não pode recuperar vida;

    tomarDano(dano) {
        if (this.#vida > 0) {
            this.#vida -= dano;
        } else {
            console.log("voce morreu");
            this.#vivo = false;
        }
    }
    recuperarVida(vida) {
        if (this.#vida <= 0) {
            console.log("seu personagem morreu não pode recuprar vida");
            this.#vivo = false;
        } else {
            this.#vida += vida;
        }
    }
    atacar(inimigo) {
        if (this.#vida <= 0 ) {
            console.log("seu personagem morreu não pode atacar");
            this.#vivo = false;

        } else {
            inimigo.tomarDano(this.#forca);
        }
    }
    mostrar() {
        console.log(`nome do personagem ${this.#nome} vida do personagem ${this.#vida}`);
    }
}


let guerreiro = new personagem("guerreiro", 120);
let arqueiro = new personagem("arqueiro", 90);


arqueiro.mostrar();
guerreiro.mostrar();

console.log("");

for(let i = 0; i < 3;i++){
    console.log("atacar")
    guerreiro.atacar(arqueiro);
}

console.log("");

arqueiro.atacar(guerreiro);
arqueiro.recuperarVida(10);

console.log("");

arqueiro.mostrar();
guerreiro.mostrar();
