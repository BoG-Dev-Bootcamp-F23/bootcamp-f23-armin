import React from 'react';
import Station from './Station';

const Navbar = ({ data, color }) => (
    <div style={{ backgroundColor: 'black', color: 'white', width: '20%' }}>
        <p style={{ margin: '10px 0', color: 'grey' }}>Select your starting station</p>
        <div style={{ overflowY: 'auto', height: '90%' }}>
            <Station station="All Stations" />
            {data[color].map((station, index) => (
                <React.Fragment key={index}>
                    <Station station={station} />
                    <div style={{ width: '100%', borderBottom: '1px solid white' }}></div>
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default Navbar;
