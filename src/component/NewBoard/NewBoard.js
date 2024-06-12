import React from 'react';
import "./NewBoard.css";
import { ImCross, ImRadioUnchecked } from "react-icons/im";

const NewBoard = ({ board, turn, markChoice }) => {
    return (
        <div className='board-turnBox'>
            <div className='board'>
                {board.map((row, rowIndex) => {
                    return (
                        <div className='row' key={`row-${rowIndex}`}>
                            {row.map((col, colIndex) => {
                                return (
                                    <div
                                        className='col'
                                        key={`col-${colIndex}`}
                                        onClick={() => {
                                            if (board[rowIndex][colIndex] === null) {
                                                markChoice(rowIndex, colIndex, turn);
                                            }
                                        }}
                                    >
                                        {col === "X" ? <ImCross fill='#14ae5c' /> : col === "O" ? <ImRadioUnchecked fill="#f14e28" /> : ""}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='turnsBar'>
                <div className='turnBox' style={{ borderColor: "red", background: '#f14e28', color: "white" }}>
                    Your Turn
                </div>
                <div className='turnBox' style={{ borderColor: "#14ae5c", background: "#14ae5c", color: "white" }}>
                    AI's Turn
                </div>
            </div>
        </div>
    );
}

export default NewBoard;