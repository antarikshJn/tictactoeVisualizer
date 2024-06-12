import React from 'react';

const MemoizedSideDisplay = ({ data }) => {
    const keys = Object.keys(data).slice(0, 5);

    return (
        <div className='MemoizedSideDisplay'>
            {keys.map((item, index) => (
                <div key={item}>
                    {data[item]}
                </div>
            ))}
        </div>
    );
}

export default MemoizedSideDisplay;

