import React from 'react';

function Station(props) {
    return (
        <div className="station-item">
            <p>{props.station}</p>
        </div>
    );
}

export default Station;
