import React from 'react';
import Station from './Station';

const Navbar = ({ data, color, selectedStation, setSelectedStation }) => {
    const stations = [...new Set(data.map(train => train.STATION))];

    return (
        <div style={{ backgroundColor: 'black', color: 'white', width: '20%' }}>
            <p style={{ margin: '10px 0', color: 'grey' }}>Select your starting station</p>
            <div style={{ overflowY: 'auto', height: '90%' }}>
                <Station station="All Stations" isSelected={!selectedStation} onSelect={setSelectedStation} />
                {stations.map((station, index) => (
                    <React.Fragment key={index}>
                        <Station station={station} isSelected={station === selectedStation} onSelect={setSelectedStation} />
                        <div style={{ width: '100%', borderBottom: '1px solid white' }}></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Navbar;