import { IUsuario } from "../Interfaces/IUsuario";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa implements IUsuario {
    constructor(cpf: string, nome: string, telefone: string, public salario: number) {
        super(cpf, nome, telefone);
    }

    autenticar(): boolean {
        return true;
    }
}
