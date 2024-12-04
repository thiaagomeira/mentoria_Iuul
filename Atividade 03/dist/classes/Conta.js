"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const Credito_1 = require("./Credito");
const Debito_1 = require("./Debito");
class Conta {
    constructor(numero) {
        this.numero = numero;
        this.creditos = [];
        this.debitos = [];
    }
    depositar(valor) {
        const credito = new Credito_1.Credito(valor, new Date());
        this.creditos.push(credito);
    }
    sacar(valor) {
        const saldoAtual = this.calcularSaldo();
        if (saldoAtual >= valor) {
            const debito = new Debito_1.Debito(valor, new Date());
            this.debitos.push(debito);
        }
        else {
            throw new Error("Saldo insuficiente.");
        }
    }
}
exports.Conta = Conta;
