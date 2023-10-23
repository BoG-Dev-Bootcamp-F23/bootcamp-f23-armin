import React, { useState } from 'react';
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';

function Button({ color }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <button style={{ flex: 1, padding: '10px', margin: '5px', borderRadius: '5px', borderColor: 'grey', backgroundColor: 'white', fontWeight: '500' }}>Arriving</button>
            <button style={{ flex: 1, padding: '10px', margin: '5px', borderRadius: '5px', borderColor: 'grey', backgroundColor: 'white', fontWeight: '500' }}>Scheduled</button>
            <button style={{ flex: 1, padding: '10px', margin: '5px', borderRadius: '5px', borderColor: 'grey', backgroundColor: 'white', fontWeight: '500' }}>
                {(color === 'blue' || color === 'green') ? "Eastbound" : "Northbound"}
            </button>
            <button style={{ flex: 1, padding: '10px', margin: '5px', borderRadius: '5px', borderColor: 'grey', backgroundColor: 'white', fontWeight: '500' }}>
                {(color === 'blue' || color === 'green') ? "Westbound" : "Southbound"}
            </button>
        </div>
    );
}

export default function LinesPage() {
    const [currColor, setCurrColor] = useState("gold");

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', textAlign: 'center' }}>
                <h1 style={{ margin: 0, fontSize: 'calc(10px + 2vmin)', color: '#282c34' }}>{currColor.toUpperCase()}</h1>
            </div>
            <div style={{ display: 'flex', height: '100%' }}>
                <Navbar color={currColor} data={stationData} />
                <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                    <Button color={currColor} />
                    <TrainList color={currColor} data={trainData} />
                </div>
            </div>
        </div>
    );
}
