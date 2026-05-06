// Access Modifiers 

class BankAccount {

    public userId: number;
    public accountNo: string;
    protected balance: number;

    constructor(userId: number, accountNo: string, balance: number) {

        this.userId = userId;
        this.accountNo = accountNo;
        this.balance = balance;


    }
    addbalance(balance: number) {
        this.balance += balance
    }

}

const myAccount = new BankAccount(101, 'tizul123', 2000);
myAccount.addbalance(100);
console.log(myAccount);


