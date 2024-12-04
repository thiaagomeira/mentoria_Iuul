"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this.enderecos = [];
        this.vip = vip;
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    listarEnderecos() {
        this.enderecos.forEach(endereco => {
            console.log(`${endereco.logradouro}, ${endereco.numero} - ${endereco.cidade}/${endereco.uf}`);
        });
    }
}
exports.Cliente = Cliente;
