import React, { useState, useRef, useEffect } from 'react'
import NewBoard from '../NewBoard';
import "./Game.css";
import { checkWin, minimax } from './Game.helper';
import ticTacToeImage from "../../../public/TicTacToeVisualizer.png"

import VectorButton from '../VectorButton';
import BoardTreeVisualizer from '../BoardTreeVisualizer';
import MemoizedSideDisplay from '../MemoizedSideDisplay/MemoizedSideDisplay';

const Game = () => {
    const [board, setBoard] = useState(new Array(3).fill(new Array(3).fill(null)));
    const [turn, setTurn] = useState("X");
    const [result, setResult] = useState();
    const [memo, setMemo] = useState({});
    const [process, setPRocess] = useState([]);
    const movesCount = useRef(0);

    useEffect(() => {
        movesCount.current = movesCount.current + 1;
        let result = checkWin(board);
        if (!result && movesCount.current <= 9 && turn === "O") {
            const newBoard = structuredClone(board);
            let tempMemo = {}
            let bestcinerio = minimax(newBoard, "O", movesCount.current, tempMemo);
            console.log(tempMemo);
            setMemo(tempMemo);
            console.log(bestcinerio);
            setPRocess(bestcinerio);
            markChoice(bestcinerio.bestMove.index[0], bestcinerio.bestMove.index[1], turn);
        }
        else if (result) {
            setResult(result);
        }

    }, [turn])

    const markChoice = (rowIndex, colIndex, turn) => {
        const tempBoard = [[...board[0]], [...board[1]], [...board[2]]];
        tempBoard[rowIndex][colIndex] = turn;
        setTurn(turn === "X" ? "O" : "X");
        setBoard(tempBoard);
    }

    return (
        <div>
            <div className='gameScreen'>
                <NewBoard
                    board={board}
                    turn={turn}
                    markChoice={markChoice}
                    movesCount={movesCount.current}
                    result={result}
                />
                <div className='heroScreen'>
                    <img src={ticTacToeImage} height="150px" width="450px"></img>
                    <VectorButton
                        title={"Visualize"}
                        background={"#fbe196"}
                        color={"black"}
                        direction="down" />
                    <VectorButton
                        title={"Visualize"}
                        background={"#fbe196"}
                        color={"black"}
                        direction="down" />
                </div>
            </div>
            <div className='visualizer-memo'>
                <BoardTreeVisualizer root={process} />
                <MemoizedSideDisplay />
            </div>
        </div >
    )
}

export default Game