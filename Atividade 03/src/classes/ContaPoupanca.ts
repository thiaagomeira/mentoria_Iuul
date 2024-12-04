import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
    calcularSaldo(): number {
        const saldoCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const saldoDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
        return saldoCreditos - saldoDebitos;
    }
}