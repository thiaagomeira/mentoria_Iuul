"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("./Conta");
class ContaPoupanca extends Conta_1.Conta {
    calcularSaldo() {
        const saldoCreditos = this.creditos.reduce((acc, credito) => acc + credito.valor, 0);
        const saldoDebitos = this.debitos.reduce((acc, debito) => acc + debito.valor, 0);
        return saldoCreditos - saldoDebitos;
    }
}
exports.ContaPoupanca = ContaPoupanca;
