import React from 'react'
import "./VectorButton.css"
import {
    ImArrowDown2,
    ImArrowUp2,
    ImArrowRight2,
    ImArrowLeft2,
    ImArrowDownLeft2,
    ImArrowDownRight2,
    ImArrowUpLeft2,
    ImArrowUpRight2
} from "react-icons/im";


const VectorButton = ({ title, background, direction, onClickHandler }) => {
    const arrowIcons = {
        up: ImArrowUp2,
        down: ImArrowDown2,
        right: ImArrowRight2,
        left: ImArrowLeft2,
        downLeft: ImArrowDownLeft2,
        downRight: ImArrowDownRight2,
        upLeft: ImArrowUpLeft2,
        upRight: ImArrowUpRight2,
    };

    const ArrowIcon = arrowIcons[direction];

    return (
        <div className='vectorButton' style={{ background: background }} onClick={onClickHandler}>
            <b>{title}</b>
            <ArrowIcon />
        </div>
    )
}

export default VectorButton