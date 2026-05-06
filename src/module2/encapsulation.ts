//encapsulation
// তুমি balance দেখতে পারো, টাকা তুলতে পারো।
// কিন্তু bank server-এর database-এ direct গিয়ে balance change করতে পারো না 
// এটাই Encapsulation

class BankAccount {

    public userId: number;
    public accountNo: string;
    private balance: number;

    constructor(userId: number, accountNo: string, balance: number) {

        this.userId = userId;
        this.accountNo = accountNo;
        this.balance = balance;


    }
    private addbalance(balance: number) {
        this.balance += balance
    } 

    depositMoney(amount: number) {
        this.addbalance(amount);
    }

}

const myAccount = new BankAccount(101, 'tizul123', 2000);


console.log(myAccount);


