let mark = "X";

for(let i=1; i<=3; i++){
  for(let j=1; j<=3; j++){
    document.getElementById(String(i)+String(j)).addEventListener("click", function(){addMark(String(i)+String(j))});
  }
}

function addMark(cell){
  let cellToMark = document.getElementById(cell);
  if(cellToMark.innerHTML == ""){
    if(mark == "X"){
      cellToMark.innerHTML = "X";
      mark = "O";
    } else {
      cellToMark.innerHTML = "O";
      mark = "X";
    }
  }
  checkWin();
}

function checkWin(){
  let row = "",
      col = "",
      diag1 = document.getElementById("11").innerHTML + document.getElementById("22").innerHTML + document.getElementById("33").innerHTML,
      diag2 = document.getElementById("13").innerHTML + document.getElementById("22").innerHTML + document.getElementById("31").innerHTML;

  for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
      row += document.getElementById(String(i)+String(j)).innerHTML;
      col += document.getElementById(String(j)+String(i)).innerHTML;
    }
    if(row == "XXX" || col == "XXX" || diag1 == "XXX" || diag2 == "XXX"){
      document.getElementById("outcome").innerHTML = "X WINS";
    } else if(row == "OOO" || col == "OOO" || diag1 == "OOO" || diag2 == "OOO"){
      document.getElementById("outcome").innerHTML = "O WINS";
    } else {
      row = "";
      col = "";
    }
  }
}