import React, { useEffect, useState } from 'react'
import { ImCross, ImRadioUnchecked } from "react-icons/im";
import "./BoardTree.css";

const BoardTree = ({ root, showChildStateeArray, viewAll }) => {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        showChildStateeArray.current.push(setShowChild);
    }, [])

    const onClickHandeler = () => {
        setShowChild(!showChild);
    }

    const color = root.player === "X" ? "#f14e28" : "#14ae5c";
    const winnerColor = root.winner === "X Won" ? "#14ae5c" : root.winner === "O Won" ? "#f14e28" : "#fbe196"
    return (
        <div className='boardParent'>
            <div className='player-board-scoreBar' onClick={onClickHandeler}>
                <div className='player' style={{ background: color }}>
                    {`${root.player}-${root.player === "X" ? "MIN" : "MAX"}`}
                </div>
                <div className='board' data-string={root.key}>
                    {root.board?.map(row => {
                        return (
                            <div className='row'>
                                {row.map(col => {
                                    return <div className='col'>{col === "X" ? <ImCross color='#14ae5c' /> : col === "O" ? <ImRadioUnchecked color='#f14e28' /> : ""}</div>
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className='scoreBar'>
                    <table>
                        {root.memo ?
                            <tr>
                                <td>
                                    Memoized
                                </td>
                                <td style={{ background: color }}>
                                    {root.bestMove.score}
                                </td>
                            </tr>
                            :
                            root.winner ?
                                <td style={{ background: winnerColor }}>
                                    {root.winner}
                                </td>
                                :

                                <tr>
                                    {root.children?.map((child, index) => {
                                        return <td key={index} style={{ background: index === root.bestMove.childIndex ? color : "" }}>{child.bestMove.score}</td>
                                    })}
                                </tr>
                        }
                    </table>
                </div>
            </div>
            {!root.winner && !root.memo && (viewAll || showChild) &&
                <div className='childBoard'>
                    {root.children?.map((child, index) => {
                        return < BoardTree
                            root={child}
                            showChildStateeArray={showChildStateeArray}
                            viewAll={viewAll} />
                    })}
                </div>
            }
        </div>
    )
}

export default BoardTree