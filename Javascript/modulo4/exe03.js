class Banco {
    constructor(conta, saldo, tipoDeConta, agencia) 
    {
      this.conta = conta;
      this.saldo = saldo;
      this.tipoDeConta = tipoDeConta;
      this.agencia = agencia;
    }

    buscarSaldo() 
    {
        return this.saldo;
    }

    deposito(valor) 
    {
        this.saldo += valor;
    }

    saque(valor) {
        if (this.saldo >= valor) 
        {
            this.saldo -= valor;
        } else 
       {
        console.log("Saldo insuficiente.");
       } 
    }

    numeroDaConta()
    {
        return this.conta;
    }
   
}