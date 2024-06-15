import React, { useEffect, useRef } from 'react'
import "./BoardTreeVisualizer.css";

import VisualizerNavBar from '../VisualizerNavbar';
import BoardTree from '../BoardTree/BoardTree';
const BoardTreeVisualizer = ({ root }) => {

    const showChildStateeArray = useRef([]);
    const showChildIndex = useRef(0);

    const func = () => {
        const setShowChild = showChildStateeArray.current[showChildIndex.current];
        setShowChild(true);
        showChildIndex.current++;
    }

    const fullViewFunction = () => {
        while (showChildIndex.current < showChildStateeArray.current.length) {
            const setShowChild = showChildStateeArray.current[showChildIndex.current];
            setShowChild(true);
            showChildIndex.current++;
        }
    }

    return (
        <>
            <div className='boardTreeVisualizer'>
                <button onClick={func}>Next</button>
                <button onClick={fullViewFunction}>View All</button>
                {/* <VisualizerNavBar /> */}
                <div className='boardTree'>
                    <BoardTree
                        root={root}
                        showChildStateeArray={showChildStateeArray}
                    />
                </div>
            </div>
        </>
    )
}

export default BoardTreeVisualizer