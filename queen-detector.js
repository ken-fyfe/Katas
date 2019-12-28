// this function looks for members along the rows, colums and diagonals of an array
function generateBoard(whiteQ, blackQ) {
  // generate the board
  const boardSize = 8;
  chessBoard = [];
  for (let i = 0; i < boardSize; i++) {
    chessBoard[i] = [0, 0, 0, 0, 0, 0, 0, 0];
  }
  // place the queens
  chessBoard[whiteQ[0]][whiteQ[1]] = 1;
  chessBoard[blackQ[0]][blackQ[1]] = 1;

  return chessBoard;
}

function queenThreat(inputBoard) {
  // find first queen
  const boardSize = 8;
  firstQueenLocation = [];
  secondQueenLocation = [];
  let firstQueenNotFound = true;
  queensThreatening = false;
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (inputBoard[row][col] === 1) {
        if (firstQueenNotFound) {
          firstQueenLocation = [row, col];
          firstQueenNotFound = false;
        } else {
          secondQueenLocation = [row, col];
        }
      }
    }
  }
  // check row
  if (firstQueenLocation[0] === secondQueenLocation[0]) { 
    queensThreatening = true;
  }
  // check column
  if (firstQueenLocation[1] === secondQueenLocation[1]) { 
    queensThreatening = true;
  }
  // check the diagonals
  absDiffRows = Math.abs(firstQueenLocation[0] - secondQueenLocation[0]);
  absDiffCols = Math.abs(firstQueenLocation[1] - secondQueenLocation[1]);
  if (absDiffRows === absDiffCols) {
    queensThreatening = true;
  }
  return queensThreatening;
}

// test above functions
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// let whiteQueen = [0, 0];
// let blackQueen = [5, 7];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));