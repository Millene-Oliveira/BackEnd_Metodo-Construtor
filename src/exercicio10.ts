import { createInterface } from "node:readline/promises";

function verificarMaiorIdade(idade: number): string {
    if(idade >= 18) {
        return "Maior de idade.";
    }
    return "Menor de idade.";
}

async function main(): Promise<void> {
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const idade: number = Number(
        await leitor.question("Digite sua idade: ")
    );

    const resultado: string = verificarMaiorIdade(idade);

    console.log("$(nome): ${resultado}");

    leitor.close();
}

main();