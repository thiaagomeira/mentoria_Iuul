"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./classes/Cliente");
const Endereco_1 = require("./classes/Endereco");
const Funcionario_1 = require("./classes/Funcionario");
const ContaCorrente_1 = require("./classes/ContaCorrente");
const ContaPoupanca_1 = require("./classes/ContaPoupanca");
const gerente = new Funcionario_1.Funcionario("123.456.789-00", "Gerente João", "1111-1111", 5000);
const atendente = new Funcionario_1.Funcionario("987.654.321-00", "Atendente Maria", "2222-2222", 2000);
console.log(`Gerente autenticado: ${gerente.autenticar()}`);
console.log(`Atendente autenticado: ${atendente.autenticar()}`);
const cliente1 = new Cliente_1.Cliente("111.222.333-44", "Cliente01", "3333-3333", true);
cliente1.adicionarEndereco(new Endereco_1.Endereco("58045-010", "Av. Cabo Branco", "3056", "", "João Pessoa", "PB"));
cliente1.adicionarEndereco(new Endereco_1.Endereco("58400-258", "Rua Dr. Severino Cruz", "771", "", "Campina Grande", "PB"));
cliente1.adicionarEndereco(new Endereco_1.Endereco("51020-390", "Av. Fernando Simões Barbosa", "170", "", "Recife", "PB"));
cliente1.listarEnderecos();
const cliente2 = new Cliente_1.Cliente("222.333.444-55", "Cliente02", "4444-4444", true);
const contaCorrente2 = new ContaCorrente_1.ContaCorrente("11111-1", 100);
contaCorrente2.depositar(100);
contaCorrente2.depositar(100);
contaCorrente2.depositar(100);
contaCorrente2.sacar(50);
console.log("Saldo ContaCorrente:", contaCorrente2.calcularSaldo());
// Aplicação 4: Criação de cliente com ContaCorrente e outro com ContaPoupanca e realização de transferência
const cliente3 = new Cliente_1.Cliente("333.444.555-66", "Cliente03", "5555-5555", true);
const contaCorrente3 = new ContaCorrente_1.ContaCorrente("22222-2", 100);
contaCorrente3.depositar(1000);
const cliente4 = new Cliente_1.Cliente("444.555.666-77", "Cliente04", "6666-6666", true);
const contaPoupanca4 = new ContaPoupanca_1.ContaPoupanca("33333-3");
contaPoupanca4.depositar(1000);
contaCorrente3.transferir(contaPoupanca4, 500);
console.log("Saldo ContaCorrente após transferência:", contaCorrente3.calcularSaldo());
console.log("Saldo ContaPoupanca após transferência:", contaPoupanca4.calcularSaldo());
const cliente5 = new Cliente_1.Cliente("555.666.777-88", "05", "7777-7777", true);
const contaCorrente5 = new ContaCorrente_1.ContaCorrente("44444-4", 100);
contaCorrente5.depositar(300);
contaCorrente5.definirLimite(100);
const cliente6 = new Cliente_1.Cliente("666.777.888-99", "06", "8888-8888", true);
const contaCorrente6 = new ContaCorrente_1.ContaCorrente("55555-5", 100);
contaCorrente6.depositar(100);
try {
    contaCorrente5.transferir(contaCorrente6, 1000);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Erro ao tentar transferir:", error.message);
    }
    else {
        console.error("Erro desconhecido", error);
    }
}
console.log("Saldo ContaCorrente 1 após tentativa de transferência:", contaCorrente5.calcularSaldo());
console.log("Saldo ContaCorrente 2 após tentativa de transferência:", contaCorrente6.calcularSaldo());
