//The MyBank class keeps track of your balance and mortgages. It also
//has methods that calculate specific actions during gameplay
class MyBank{
  //constructor initializes mortgages and balance to game start values
  constructor(){
    this.mortgages = [0,0,0];
    this.balance = 500;
    this.lower = 40;
    this.middle = 80;
    this.upper = 120;
  }
  //The invest method takes a bank and the type of MBS class and buys
  //an MBS from that bank
  invest(bank, size){
    if (size == 0){
      bank.boughtMBS[0] += 1;
      this.balance = this.balance - this.lower*.75;
    }
    else if (size == 1){
      bank.boughtMBS[1] += 1;
      this.balance = this.balance - this.middle*.75;
    }
    else if (size == 2){
      bank.boughtMBS[2] += 1;
      this.balance = this.balance - this.upper*.75;
    }
  }
  //The sellMBS method takes a bank and the type of MBS class and
  //sells an MBS to the specified bank
  sellMBS(bank, size){
    if (size == 0){
      this.balance = this.balance + this.lower*.75;
    }
    else if (size == 1){
      this.balance = this.balance + this.middle*.75;
    }
    else if (size == 2){
      this.balance = this.balance + this.upper*.75;
    }
    bank.soldMBS[size] += 1;
  }
  //The cdo method creates a cdo (increments the mortgages array)
  //with the specified MBS's and the rating increase
  cdo(lowers, middles, uppers, rating){
    this.mortgages[0] = this.mortgages[0] + lowers;
    this.mortgages[1] = this.mortgages[1] + middles;
    this.mortgages[2] = this.mortgages[2] + uppers;
    this.balance = this.balance - lowers*this.lower -
      middles*this.middle - uppers*this.upper - 20*(1 + rating);
  }
  //The buyCDS method takes a bank and an MBS class and buys a CDS
  //against the specified MBS
  buyCDS(bank, size){
    var cost = 0;
    bank.boughtCDS[size] += 1;
    if (size == 0){
      cost = this.lower;
    }
    else if (size == 1){
      cost = this.middle;
    }
    else{
      cost = this.upper;
    }
    this.balance = this.balance - .25*cost;
  }
  //The sellCDS method takes a bank and an MBS class and sells a
  //CDS to the specified bank against the specified MBS
  sellCDS(bank, size){
    var cost = 0;
    bank.soldCDS[size] += 1;
    if (size == 0){
      cost = this.lower;
    }
    else if (size == 1){
      cost = this.middle;
    }
    else{
      cost = this.upper;
    }
    this.balance = this.balance + .25*cost;
  }
  //The addBalance method increases balance by the amount
  //specified
  addBalance(deposit){
    this.balance += deposit;
  }
  //The calculateBalance method takes an array of the number of
  //foreclosed MBS cards and the array of all of the banks in the
  //game and performs end of turn calculations
  calculateBalance(foreclosed, banks){
    this.mortgages[0] -= foreclosed[0];
    this.mortgages[1] -= foreclosed[1];
    this.mortgages[2] -= foreclosed[2];
    var change = 0;
    for (var i=0; i<banks.length-1; i++){
      change += banks[i].payments();
    }
    change += this.mortgages[0]*this.lower*.1;
    change += this.mortgages[1]*this.middle*.1;
    change += this.mortgages[2]*this.upper*.1;
    return change;
  }
}
