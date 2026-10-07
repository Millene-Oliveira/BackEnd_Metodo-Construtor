class Produto {

    private produto: string;
    private valor: number;

    constructor(produto: string, valor: number) {
        this.produto = produto,
            this.valor = valor
    }

    exibirInformacoes(): void {
        console.log("=== DESCRIÇÃO ===")
        console.log(`Produto: ${this.produto}`)
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`)
    }
}

class ObjetoProduto {
    public static main(): void {
        const prod = new Produto("Coca-Cola 2L", 10.89);
        prod.exibirInformacoes();
    }
}

ObjetoProduto.main();