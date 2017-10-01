//create all of the bank objects in the game and put them in array banks
var bank1 = new Bank(1);
var bank2 = new Bank(2);
var bank3 = new Bank(3);
var bank4 = new Bank(4);
var myBank = new MyBank();
var banks = [];
banks[0] = bank1;
banks[1] = bank2;
banks[2] = bank3;
banks[3] = bank4;

//general function to delete the contents of an html element
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

//buyMBS takes inputs from two html select elements and calls
//the invest method on the myBank object, using the select inputs,
//to update the state of the game
function buyMBS(){
  var selectedValue = document.getElementById("list1").value;
  var a = parseInt(selectedValue);
  var selectedValue2 = document.getElementById("class1").value;
  var b = parseInt(selectedValue2);
  if(a==0 || b==3){
    alert("Please select options");
  }
  else{
    a = a-1;
    myBank.invest(banks[a],b);
    alert(banks[a].boughtMBS);
    changeBalanceDisplay(myBank.balance);
  }
  document.getElementById("list1").value="0";
  document.getElementById("class1").value="3";
}

function sellMBS(){
  var selectedValue = document.getElementById("list2").value;
  var a = parseInt(selectedValue);
  var selectedValue2 = document.getElementById("class2").value;
  var b = parseInt(selectedValue2);
  if(a==0 || b==3){
    alert("Please select options");
  }
  else{
    a = a-1;
    myBank.sellMBS(banks[a],b);
    alert(banks[a].soldMBS);
    changeBalanceDisplay(myBank.balance);
  }
  document.getElementById("list2").value="0";
  document.getElementById("class2").value="3";
}

function buyCDS(){
  var selectedValue = document.getElementById("list3").value;
  var a = parseInt(selectedValue);
  var selectedValue2 = document.getElementById("class3").value;
  var b = parseInt(selectedValue2);
  if(a==0 || b==3){
    alert("Please select options");
  }
  else{
    a = a-1;
    myBank.buyCDS(banks[a],b);
    alert(banks[a].boughtCDS);
    changeBalanceDisplay(myBank.balance);
  }
  document.getElementById("list3").value="0";
  document.getElementById("class3").value="3";
}

function sellCDS(){
  var selectedValue = document.getElementById("list4").value;
  var a = parseInt(selectedValue);
  var selectedValue2 = document.getElementById("class4").value;
  var b = parseInt(selectedValue2);
  if(a==0 || b==3){
    alert("Please select options");
  }
  else{
    a = a-1;
    myBank.sellCDS(banks[a],b);
    alert(banks[a].soldCDS);
    changeBalanceDisplay(myBank.balance);
  }
  document.getElementById("list4").value="0";
  document.getElementById("class4").value="3";
}

function addMoney(){
  var selectedValue = document.getElementById("money1").value;
  var a = parseInt(selectedValue);
  if (Number.isInteger(a)){
    myBank.addBalance(a);
    document.getElementById("money1").value='';
    changeBalanceDisplay(myBank.balance);
  }
  else{
    document.getElementById("money1").value='';
    alert("Please enter an integer");
  }
}

function subMoney(){
  var selectedValue = document.getElementById("money2").value;
  var a = parseInt(selectedValue);
  if (Number.isInteger(a)){
    myBank.addBalance(-1*a);
    document.getElementById("money2").value='';
    changeBalanceDisplay(myBank.balance);
  }
  else{
    document.getElementById("money2").value='';
    alert("Please enter an integer");
  }
}

function endTurn(){
  var selectedValue = document.getElementById("lowForeclose").value;
  var a = parseInt(selectedValue);
  var selectedValue1 = document.getElementById("midForeclose").value;
  var b = parseInt(selectedValue1);
  var selectedValue2 = document.getElementById("upForeclose").value;
  var c = parseInt(selectedValue2);
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
    var foreclosed = [a,b,c];
    var change = myBank.calculateBalance(foreclosed,banks);
    myBank.balance = myBank.balance + change;
    changeBalanceDisplay(myBank.balance);
  }
  else{
    alert("Enter integers please");
  }
  document.getElementById("lowForeclose").value='';
  document.getElementById("midForeclose").value='';
  document.getElementById("upForeclose").value='';
}

function layCDO(){
  var selectedValue = document.getElementById("lowerCDO").value;
  var a = parseInt(selectedValue);
  var selectedValue1 = document.getElementById("middleCDO").value;
  var b = parseInt(selectedValue1);
  var selectedValue2 = document.getElementById("upperCDO").value;
  var c = parseInt(selectedValue2);
  var selectedValue3 = document.getElementById("rating").value;
  var d = parseInt(selectedValue3);
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d)){
    if (a+b+c>2 && a+b+c<6){
      myBank.cdo(a,b,c,d);
      changeBalanceDisplay(myBank.balance);
    }
    else{
      alert("CDO must have 3-5 MBS cards");
    }
  }
  else{
    alert("Please enter integers");
  }
  document.getElementById("lowerCDO").value='';
  document.getElementById("middleCDO").value='';
  document.getElementById("upperCDO").value='';
  document.getElementById("rating").value='';
}

function changeBalanceDisplay(newBalance){
  document.getElementById("balance").innerHTML = "Balance: " +newBalance;
}
