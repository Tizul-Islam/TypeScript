// Access Modifiers 

class BankAccount {

    public userId: number;
    public accountNo: string;
    private _balance: number;  //(_): private variable e bujhae)

    constructor(userId: number, accountNo: string, balance: number) {

        this.userId = userId;
        this.accountNo = accountNo;
        this._balance = balance;


    }
    addbalance(balance: number) {
        this._balance += balance
    }

}

const myAccount = new BankAccount(101, 'tizul123', 2000);
myAccount.addbalance(100);
console.log(myAccount);


