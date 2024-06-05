import React from 'react'
import { ImCross, ImRadioUnchecked } from "react-icons/im";
import { FaArrowDownLong } from "react-icons/fa6";
import "./BoardTree.css";

const BoardTree = ({ treeData }) => {
    return (
        <div className='boardParent'>
            <div className='board' data-string={treeData?.key}>
                {treeData?.board.map(row => {
                    return (
                        <div className='row'>
                            {row.map(col => {
                                return <div className='col'>{col === "X" ? <ImCross /> : col === "O" ? <ImRadioUnchecked /> : ""}</div>
                            })}
                        </div>
                    )
                })}
            </div>
            <FaArrowDownLong />
            {treeData.memo ? <div>Memoized!</div> : <div className='childBoard'>
                {treeData?.Children?.map(board => {
                    return (
                        <BoardTree treeData={board} />
                    )
                })}
            </div>}

        </div>
    )
}

export default BoardTree