export abstract class Conta {
    protected _saldo: number = 0;
    protected _credito: Credito[] = [];
    protected _debito: Debito[] = [];

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial;
    }

    public depositar(valor: number) {
        const credito = new Credito(valor);
        this._credito.push(credito);
        this._saldo += valor;
    }

    public sacar(valor: number): boolean {
        if (this._saldo >= valor) {
            const debito = new Debito(valor);
            this._debito.push(debito);
            this._saldo -= valor;
            return true;
        }
        return false;
    }

    public abstract calcularSaldo(): number;
}