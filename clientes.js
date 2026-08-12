class Cliente extends pessoa{
    constructor(nome,idade,CPF){
        super(nome, idade);
        this.CPF = CPF;

    }

    ImprimirDetalhes(){
        return `
        
        nome:${this.nome}
        idade:${this.idade}
        idade:${CPF.CPF}    
        `
    
    }
}

const cliente1 = new Pessoa(
    "Arthur",
    17,
    121569709

);

const cliente2 = new Pessoa(
    "Felipe",
    23,
    342796151

);

function mostrarClientes(){
    document.getElementById("resultado").innerHTML = "<b>Cliente</b><br>"+
    cliente1.imprimirDetalhes()+

    "<b></b><br> Cliente 2</b><br>+"
    cliente2.imprimirDetalhes()

    


}
