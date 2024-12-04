"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, limite) {
        super(numero);
        this.limite = limite;
    }
    definirLimite(limite) {
        this.limite = limite;
        console.log(`Limite definido para: R$${limite}`);
    }
    calcularSaldo() {
        const saldoCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const saldoDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
        return saldoCreditos - saldoDebitos + this.limite;
    }
    transferir(contaDestino, valor) {
        if (this.calcularSaldo() >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        else {
            throw new Error("Saldo insuficiente para transferência.");
        }
    }
}
exports.ContaCorrente = ContaCorrente;
