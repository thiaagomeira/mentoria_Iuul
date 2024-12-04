import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    public enderecos: Endereco[] = [];
    public vip: boolean;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip;
    }

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    listarEnderecos(): void {
        this.enderecos.forEach(endereco => {
            console.log(`${endereco.logradouro}, ${endereco.numero} - ${endereco.cidade}/${endereco.uf}`);
        });
    }
}
