//The Bank class is to hold information and calculate payments
//related to a specific bank.
class Bank {
  constructor(id) {
    this.id = id;
    this.boughtMBS = [0,0,0];
    this.soldMBS = [0,0,0];
    this.boughtCDS = [0,0,0];
    this.soldCDS = [0,0,0];
    this.mortgages = [0,0,0];
  }
//The payments method calculates the payout at the end of the turn
//for the specific Bank object in question.
  payments(){
    var A = 0;
    var lower = 40;
    var middle = 80;
    var higher = 120;
    A += (this.boughtMBS[0]*lower*.1+this.boughtMBS[1]*middle*.1+
      this.boughtMBS[2]*higher*.1);
    A -= (this.soldMBS[0]*lower*.1+this.soldMBS[1]*middle*.1+
      this.soldMBS[2]*higher*.1);
    A -= (this.boughtCDS[0]*lower*.1+this.boughtCDS[1]*middle*.1+
      this.boughtCDS[2]*higher*.1);
    A += (this.soldCDS[0]*lower*.1+this.soldCDS[1]*middle*.1+
      this.soldCDS[2]*higher*.1);
    return A;
  }
}
