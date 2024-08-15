function Pet(nome, especie, cor, idade, barulho) {
    this.nome = nome;
    this.especie = especie;
    this.cor = cor;
    this.idade = idade;
    this.barulho = barulho;

    this.getInfo = function() {
        console.log(`${this.nome} é um ${this.especie} de cor ${this.cor} e tem ${this.idade} anos. Este animal faz ${this.barulho}!`);
    }
}

function Gato(nome, cor, idade) {
    this.barulho = 'meow';
    Pet.call(this, nome, 'gato', cor, idade, this.barulho);
}

function Cachorro(nome, cor, idade) {
    this.barulho = 'woof';
    Pet.call(this, nome, 'cachorro', cor, idade, this.barulho);
}

function Pato(nome, cor, idade) {
    this.barulho = 'quack';
    Pet.call(this, nome, 'pato', cor, idade, this.barulho);
}

const zeca = new Cachorro('Zeca', 'marrom', 10);
const tobias = new Gato('Tobias', 'laranja', 11);
const bento = new Gato('Bento', 'preto', 2);
const theo = new Gato('Theo', 'branco', 1);
const penado = new Pato('Penado', 'branco', 2);

zeca.getInfo();
tobias.getInfo();
bento.getInfo();
theo.getInfo();
penado.getInfo();