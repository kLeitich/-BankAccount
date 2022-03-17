  class BankAccount {
    constructor(userId, bankBalance,da) {
      this.userId = userId;
      this.bankBalance = bankBalance;
      this.da = da;
    }
  
    withdraw(amountToWithdraw) {
      const currentBalance = parseInt(this.bankBalance) + parseInt(this.da);
      const remainder = currentBalance - amountToWithdraw;
       return "Your balance is " + remainder;
    }
  };
  
let form = document.getElementById("userInput");
let username = document.getElementById("fName");
let id = document.getElementById("iDeposit");
let deposit = document.getElementById("dAmount");
let withdraw = document.getElementById("wAmount");
let output = document.querySelector(".output");


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let user1 = new BankAccount(username.value,id.value,deposit.value)
    output.innerHTML= user1.withdraw(withdraw.value) 
  
  });




