//your JS code here. If required.
window.onload = function() {
  const submitButton = document.getElementById('submit');
  const player1Input = document.getElementById('player-1');
  const player2Input = document.getElementById('player-2');
  const boardDiv = document.getElementById('board');
  const messageDiv = document.querySelector('.message');
  const cells = document.querySelectorAll('.cell');
  
  let currentPlayer = 1;
  
  submitButton.addEventListener('click', () => {
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;
    
    if (player1Name && player2Name) {
      boardDiv.classList.remove('hidden');
      messageDiv.textContent = `${player1Name}, you're up!`;
    }
  });
  
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (!cell.textContent) {
        const playerName = (currentPlayer === 1) ? player1Input.value : player2Input.value;
        cell.textContent = (currentPlayer === 1) ? 'X' : 'O';
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        messageDiv.textContent = `${playerName}, you're up!`;
        checkWin();
      }
    });
  });
  
  function checkWin() {
    const winningCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
      [1, 5, 9], [3, 5, 7] // Diagonals
    ];
    
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const cellA = document.getElementById(`cell-${a}`);
      const cellB = document.getElementById(`cell-${b}`);
      const cellC = document.getElementById(`cell-${c}`);
      
      if (
        cellA.textContent === cellB.textContent &&
        cellB.textContent === cellC.textContent &&
        cellA.textContent
      ) {
        const winner = (cellA.textContent === 'X') ? player1Input.value : player2Input.value;
        messageDiv.textContent = `${winner} congratulations, you won!`;
        break;
      }
    }
  }
};