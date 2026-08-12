ImprimirDetalhes(){
        return `
        
        nome:${this.nome}
        idade:${this.idade}
        idade:${CPF.CPF}    
        `
    
    }
}

const aluno1 = new Pessoa(
    "zlatan",
    17,
    121569709

);

const aluno2 = new Pessoa(
    "Felipe",
    23,
    342796151

);

function mostrarAlunos(){
    document.getElementById("resultado").innerHTML = "<b>Aluno</b><br>"+
    aluno1.imprimirDetalhes()+

    "<b></b><br> Aluno 2</b><br>+"
    aluno2.imprimirDetalhes()

    


}
