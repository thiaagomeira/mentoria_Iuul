import { Conta } from './Conta';

export class ContaCorrente extends Conta {
    public limite: number;

    constructor(numero: string, limite: number) {
        super(numero);
        this.limite = limite;
    }

    definirLimite(limite: number): void {
        this.limite = limite;
        console.log(`Limite definido para: R$${limite}`);
    }

    calcularSaldo(): number {
        const saldoCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const saldoDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
        return saldoCreditos - saldoDebitos + this.limite;
    }

    transferir(contaDestino: Conta, valor: number): void {
        if (this.calcularSaldo() >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        } else {
            throw new Error("Saldo insuficiente para transferência.");
        }
    }
}