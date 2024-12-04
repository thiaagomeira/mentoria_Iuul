"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, salario) {
        super(cpf, nome, telefone);
        this.salario = salario;
    }
    autenticar() {
        return true;
    }
}
exports.Funcionario = Funcionario;
