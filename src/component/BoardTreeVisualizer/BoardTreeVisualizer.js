import React, { useEffect, useRef, useState } from 'react'
import "./BoardTreeVisualizer.css";

import VisualizerNavBar from '../VisualizerNavbar';
import BoardTree from '../BoardTree/BoardTree';
const BoardTreeVisualizer = ({ root }) => {

    const [viewAll, setViewAll] = useState(false);

    const showChildStateeArray = useRef([]);
    const showChildIndex = useRef(0);

    const func = () => {
        const setShowChild = showChildStateeArray.current[showChildIndex.current];
        setShowChild(true);
        showChildIndex.current++;
    }

    const fullViewFunction = () => {
        setViewAll(!viewAll);
    }

    return (
        <>
            <div className='boardTreeVisualizer'>
                <VisualizerNavBar
                    nextFunc={func}
                    viewFullFunc={fullViewFunction}
                />
                <div className='boardTree'>
                    <BoardTree
                        root={root}
                        showChildStateeArray={showChildStateeArray}
                        viewAll={viewAll}
                    />
                </div>
            </div>
        </>
    )
}

export default BoardTreeVisualizer