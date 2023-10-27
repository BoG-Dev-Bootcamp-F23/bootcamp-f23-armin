import React from 'react';

const Train = ({ data, color }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="m.png" alt="Train" style={{ width: '50px', height: '50px' }} />
        </div>
        <div style={{ flex: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ margin: '5px 0' }}>{data.STATION} &rarr; {data.DESTINATION}</p> {/* Display route dynamically */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ backgroundColor: color, color: 'white', padding: '5px', borderRadius: '5px' }}>
                    <p style={{ margin: 0 }}>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
                </div>
                <p style={{ margin: '0 0 0 10px', color: 'green' }}>On time</p>
            </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <p style={{ margin: 0, color: 'green' }}>{data.WAITING_TIME}</p>
        </div>
    </div>
);

export default Train;
