import React from 'react'
import "./VisualizerNavBar.css";
import VectorButton from '../VectorButton';


const VisualizerNavBar = ({ gameFunc, viewFullFunc, nextFunc }) => {
    return (
        <div className='visualizerNavBar'>
            <VectorButton
                title={"Game"}
                background={"#fbe196"}
                color="black"
                direction="up"
                onClickHandler={gameFunc}
            />
            <div className='ProceedButtons'>
                <VectorButton
                    title={"View Full"}
                    background={"#f2a598"}
                    color="black"
                    direction="down"
                    onClickHandler={viewFullFunc}
                />
                <VectorButton
                    title={"Next"}
                    background={"#f14e28"}
                    color="white"
                    direction="right"
                    onClickHandler={nextFunc}
                />
            </div>
        </div>
    )
}

export default VisualizerNavBar