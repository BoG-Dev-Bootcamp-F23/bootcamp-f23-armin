import React from 'react';
import Train from './Train';

const TrainList = ({ data: { RailArrivals }, color }) => (
    <div style={{ overflowY: 'auto', height: '100%' }}>
        {RailArrivals.map((train, index) => (
            <React.Fragment key={index}>
                <Train data={train} color={color} />
                {index !== RailArrivals.length - 1 && (
                    <div style={{ borderBottom: '1px solid black' }}></div>
                )}
            </React.Fragment>
        ))}
    </div>
);

export default TrainList;
