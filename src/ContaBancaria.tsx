import readline from 'readline';

const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const perguntar = (pergunta: string): Promise<string> => {
    return new Promise((resolve) => ler.question(pergunta, resolve));
};


class ContaBancaria {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else if(valor = 0) {
            console.log(" ");
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            console.log("Valor de saque inválido.");
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getNumero(): string {
        return this.numero;
    }
}


class ObjetoContaBancaria {
    public static async main(): Promise<void> {
        console.log("=== 1. INICIAR CONTA ===");
        const numeroConta = await perguntar("Digite o número da conta: ");
        const saldoInicialInput = await perguntar("Digite o saldo inicial da conta: ");
        const saldoInicial = parseFloat(saldoInicialInput);

        const conta = new ContaBancaria(numeroConta, saldoInicial);
        console.log(`Conta ${conta.getNumero()} criada! Saldo inicial: R$ ${conta.getSaldo().toFixed(2)}\n`);

        console.log("=== 2. SACAR ===");
        const valorSaqueInput = await perguntar("Digite o valor que deseja sacar: ");
        conta.sacar(parseFloat(valorSaqueInput));
        console.log(`Saldo atual: R$ ${conta.getSaldo().toFixed(2)}\n`);

        console.log("=== 3. DEPOSITAR ===");
        const valorDepositoInput = await perguntar("Digite o valor que deseja depositar: ");
        conta.depositar(parseFloat(valorDepositoInput));
        console.log(`Saldo final: R$ ${conta.getSaldo().toFixed(2)}\n`);

        ler.close();
    }
}

ObjetoContaBancaria.main();