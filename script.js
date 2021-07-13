let squares = document.querySelectorAll(".item");
let grid = document.querySelector(".grid");
let playerTurnText = document.querySelector(".playerTurn");
let gameData = ["", "", "", "", "", "", "", "", ""];
playerTurnText.innerHTML = `Turn: X`;
var row1 = [0, 1, 2];
var row2 = [3, 4, 5];
var row3 = [6, 7, 8];
var col1 = [0, 3, 6];
var col2 = [1, 4, 7];
var col3 = [2, 5, 8];
var diag1 = [0, 4, 8];
var diag2 = [2, 4, 6];
//collect all winning combinations...
var rules = [row1, row2, row3, col1, col2, col3, diag1, diag2];

let playerOne = true;
squares.forEach((square) => {
  square.addEventListener("click", playerDecision);
});

function playerDecision(e) {
  const squareArray = Array.from(squares);
  const clickedSqaure = squareArray.indexOf(e.target);
  if (playerOne && gameData[clickedSqaure] == "") {
    squares[clickedSqaure].innerHTML = "X";
    playerOne = false;
    gameData[clickedSqaure] = "X";

    playerTurnText.innerHTML = `Turn: O`;
    gameWinCheck("X");
  } else if (!playerOne && gameData[clickedSqaure] == "") {
    squares[clickedSqaure].innerHTML = "O";
    playerOne = true;
    gameData[clickedSqaure] = "O";

    playerTurnText.innerHTML = `Turn: X`;
    gameWinCheck("O");
  }
}

function gameWinCheck(playerTurn) {
  for (let i = 0; i < rules.length; i++) {
    if (
      gameData[rules[i][0]] == playerTurn &&
      gameData[rules[i][1]] == playerTurn &&
      gameData[rules[i][2]] == playerTurn
    ) {
      //if someone wins
      playerTurnText.innerHTML = `${playerTurn} wins`;
      grid.style.pointerEvents = "none";
    }
  }
}

function resetGame() {
  gameData = ["", "", "", "", "", "", "", "", ""];
  grid.style.pointerEvents = "auto";
  playerTurnText.innerHTML = `Turn: X`;
  playerOne = true;
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
  }
}
