class Estudante{
    private nome: string;
    private nota1: number;
    private nota2: number; 

    constructor(nome: string, nota1: number, nota2: number){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public calcularMedia() {
       return (this.nota1+this.nota2)/2;
    }

    public exibirInformacoes(): void{
    console.log("=== DADOS DO ALUNO ===")
    console.log(`Nome do(a) aluno(a): ${this.nome}`)
    console.log(`Média: ${this.calcularMedia().toFixed(2)}`)
    }
}

class Aluno{
    public static main(): void {
        const aluno1 = new Estudante(`Ana`, 10, 7);
        aluno1.exibirInformacoes();
    }

}
Aluno.main();
