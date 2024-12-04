import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {
    protected creditos: Credito[] = [];
    protected debitos: Debito[] = [];

    constructor(public numero: string) {}

    depositar(valor: number): void {
        const credito = new Credito(valor, new Date());
        this.creditos.push(credito);
    }

    sacar(valor: number): void {
        const saldoAtual = this.calcularSaldo();
        if (saldoAtual >= valor) {
            const debito = new Debito(valor, new Date());
            this.debitos.push(debito);
        } else {
            throw new Error("Saldo insuficiente.");
        }
    }

    abstract calcularSaldo(): number;
}
