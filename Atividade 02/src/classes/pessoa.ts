export abstract class Pessoa {
    protected _nome: string;
    protected _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }
}