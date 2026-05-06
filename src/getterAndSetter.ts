//getter and setter

class BankAccount {

    public userId:
        number;

    public accountNo:
        string;

    protected balance:
        number;

    constructor(
        userId: number,
        accountNo: string,
        balance: number
    ) {

        this.userId = userId;
        this.accountNo = accountNo;
        this.balance = balance;

    }

    // setter
    set addbalance(amount: number) {

        this.balance +=amount;

    }

    // getter
    get getbalance() {

        return this.balance;

    }
}

const myAccount =
  new BankAccount(
    101,
    "tizul123",
    100,
  );

  myAccount.addbalance = 100;
  myAccount.addbalance = 100; 
  console.log(myAccount);