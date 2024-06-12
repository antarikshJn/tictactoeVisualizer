import React from 'react'
import "./VisualizerNavBar.css";
import VectorButton from '../VectorButton';


const VisualizerNavBar = () => {
    return (
        <div className='visualizerNavBar'>
            <VectorButton
                title={"Game"}
                background={"#fbe196"}
                color="black"
                direction="up"
            />
            <div className='ProceedButtons'>
                <VectorButton
                    title={"View Full"}
                    background={"#f2a598"}
                    color="black"
                    direction="down"
                />
                <VectorButton
                    title={"Next"}
                    background={"#f14e28"}
                    color="white"
                    direction="right"
                />
            </div>
        </div>
    )
}

export default VisualizerNavBar