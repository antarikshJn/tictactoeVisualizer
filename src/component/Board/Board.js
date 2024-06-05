import React, { useEffect, useRef, useState } from 'react'
import "./Board.css";
import { ImCross, ImRadioUnchecked } from "react-icons/im";
import { minimax, checkWin, drawFig, simulator } from "./Board.helper";
import BoardTree from '../BoardTree';
import MemoizedSideDisplay from './MemoizedSideDisplay';

const Board = () => {
    const [board, setBoard] = useState(new Array(3).fill(new Array(3).fill(null)));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("Pending!")
    const movesCount = useRef(0);
    const [process, setPRocess] = useState([]);
    const [memo, setMemo] = useState({});

    useEffect(() => {
        movesCount.current = movesCount.current + 1;
        let winner = checkWin(board);
        if (!winner && movesCount.current <= 9 && turn === "O") {
            const newBoard = structuredClone(board);
            let tempMemo = {}
            let bestcinerio = minimax(newBoard, "O", movesCount.current, tempMemo);
            // console.log(tempMemo);
            setMemo(tempMemo);
            setPRocess(bestcinerio);
            drawFig(bestcinerio.bestMove.index[0], bestcinerio.bestMove.index[1], board, turn, setTurn, setBoard);
        }
        else if (winner) {
            setWinner(winner);
        }

    }, [turn])

    const onClickHandler = (event) => {
        const target = event.target.closest(".col");
        const rowIndex = target.getAttribute("data-row");
        const colIndex = target.getAttribute("data-col");
        if (board[rowIndex][colIndex] === null) {
            drawFig(rowIndex, colIndex, board, turn, setTurn, setBoard);
        }
    }

    const onClickButtonHandler = () => {
        simulator(process.record);
    }

    return (
        <div>
            {board.map((row, rowIndex) => {
                return (
                    <div className='row' key={`row-${rowIndex}`}>
                        {row.map((col, colIndex) => {
                            return (
                                <div
                                    className='col'
                                    key={`col-${colIndex}`}
                                    onClick={onClickHandler}
                                    data-row={`${rowIndex}`}
                                    data-col={`${colIndex}`}>
                                    {col === "X" ? <ImCross /> : col === "O" ? <ImRadioUnchecked /> : ""}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <h2>Status : {winner}</h2>
            <button onClick={onClickButtonHandler}>Simullate</button>
            <div style={{ width: "fit-content", height: "fit-content" }}>
                {/* <MemoizedSideDisplay data={memo} /> */}
                {movesCount.current > 1 ? <BoardTree treeData={process.record} /> : <></>}
            </div>
        </div>
    )
}

export default Board;