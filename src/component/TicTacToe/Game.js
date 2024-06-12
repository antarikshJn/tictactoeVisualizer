import React, { useState, useRef } from 'react'
import NewBoard from '../NewBoard';

const Game = () => {
    const [board, setBoard] = useState(new Array(3).fill(new Array(3).fill(null)));
    const [turn, setTurn] = useState("X");
    const movesCount = useRef(0);

    const markChoice = (rowIndex, colIndex, turn) => {
        const tempBoard = [[...board[0]], [...board[1]], [...board[2]]];
        tempBoard[rowIndex][colIndex] = turn;
        setTurn(turn === "X" ? "O" : "X");
        setBoard(tempBoard);
    }

    return (
        <NewBoard
            board={board}
            turn={turn}
            markChoice={markChoice}
            movesCount={movesCount.current}
        />
    )
}

export default Game