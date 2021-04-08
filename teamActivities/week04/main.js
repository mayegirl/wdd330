class Game {
  constructor () {
    this.board = document.getElementById("board");
    board.addEventListener("click", this.addPiece);

    this.clear = document.getElementById("clear");
    clear.addEventListener("click", this.clearBoard);

    this.player = this.playerX;
  }
  
  playerX = "X";
  playerO = "O";
  
  addPiece = (event) => {
    // prevent changing existing Xs and Os
    if (event.target.innerText) {
      return;
    }

    // reset if game is over
    if (gameStatus.innerText) {
      this.clearBoard();
      return;
    }

    event.target.innerText = this.player;

    this.player = this.player === this.playerO ? this.playerX : this.playerO;

    this.checkWinner();
  }

  clearBoard = () => {
    for (const cell of board.children) {
      cell.innerText = "";
    }

    this.gameStatus.innerText = "";
  }

  A1 = document.getElementById("A1");
  A2 = document.getElementById("A2");
  A3 = document.getElementById("A3");
  B1 = document.getElementById("B1");
  B2 = document.getElementById("B2");
  B3 = document.getElementById("B3");
  C1 = document.getElementById("C1");
  C2 = document.getElementById("C2");
  C3 = document.getElementById("C3");

  winningCombos = [
    [A1,B1,C1],
    [A2,B2,C2],
    [A3,B3,C3],
    [A1,A2,A3],
    [B1,B2,B3],
    [C1,C2,C3],
    [A1,B2,C3],
    [A3,B2,C1]
  ];

  gameStatus = document.getElementById("gameStatus");

  checkWinner = () => {
    // check for winner
    for (const p of [this.playerX, this.playerO]) {
      for (const combo of this.winningCombos) {
        if (combo[0].innerText === p &&
            combo[1].innerText === p &&
            combo[2].innerText === p) {
          this.gameStatus.innerText = `The winner is Player ${p}!`;
          this.player = p;
          return;
        }
      }
    }

    // check for cat's game
    let cells = 0;
    for (const cell of this.board.children) {
      if (cell.innerText) {
        cells++;
      }
    }
    if (cells === 9) {
      this.gameStatus.innerText = "It's a cat's game. :("
    }
  }
}

const game = new Game();
