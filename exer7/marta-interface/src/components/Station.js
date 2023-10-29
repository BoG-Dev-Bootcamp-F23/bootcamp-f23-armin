import React from 'react';

function Station({ station, isSelected, onSelect }) {
    return (
        <div onClick={() => onSelect(station === "All Stations" ? null : station)} style={{ padding: '10px', borderBottom: '1px solid white', backgroundColor: isSelected ? 'grey' : 'black' }}>
            <p style={{ margin: 0 }}>{station}</p>
        </div>
    );
}

export default Station;
