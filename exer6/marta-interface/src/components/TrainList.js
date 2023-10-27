import React from 'react';
import Train from './Train';


const TrainList = ({ data, color, filter, selectedStation }) => {
    const filteredData = data.filter(train => {
        if (selectedStation && train.STATION !== selectedStation) {
            return false;
        }
        switch (filter) {
            case 'Arriving':
                return train.WAITING_TIME === "Arriving";
            case 'Scheduled':
                return train.WAITING_TIME !== "Arriving";
            case 'Northbound':
            case 'Eastbound':
                return train.DIRECTION === "N" || train.DIRECTION === "E";
            case 'Southbound':
            case 'Westbound':
                return train.DIRECTION === "S" || train.DIRECTION === "W";
            case null:
                return true;
            default:
                return true;
        }
    });

    return (
        <div style={{ overflowY: 'auto', height: '100%' }}>
            {filteredData.map((train, index) => (
                <React.Fragment key={index}>
                    <Train data={train} color={color} />
                    {index !== filteredData.length - 1 && (
                        <div style={{ borderBottom: '1px solid black' }}></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};



export default TrainList;
