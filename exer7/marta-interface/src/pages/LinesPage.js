import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TrainList from '../components/TrainList';
import '../App.css';

export default function LinesPage() {
    const { line } = useParams();
    const navigate = useNavigate();
    const currColor = line || 'gold';
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState("Arriving");
    const [stations, setStations] = useState(null);
    const [selectedStation, setSelectedStation] = useState(null);

    useEffect(() => {
        fetch(`http://13.59.196.129:3001/arrivals/${currColor}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error.message);
            setLoading(false);
        });
    }, [currColor]);

    useEffect(() => {
        fetch(`http://13.59.196.129:3001/stations/${currColor}`)
        .then(response => response.json())
        .then(stations => setStations(stations))
        .catch(error => console.error("There was a problem with the fetch operation:", error.message));
    }, [currColor]);

    const handleChangeColor = (color) => {
        navigate(`/lines/${color}`);
    };

    if (loading || !data || !stations) {
        return <div>Loading...</div>;
    }

    return (
        <div className="linesPage">
            <div className="buttonContainer">
                <button onClick={() => handleChangeColor('gold')} className="colorButton gold">Gold</button>
                <button onClick={() => handleChangeColor('red')} className="colorButton red">Red</button>
                <button onClick={() => handleChangeColor('blue')} className="colorButton blue">Blue</button>
                <button onClick={() => handleChangeColor('green')} className="colorButton green">Green</button>
            </div>
            <div className="titleContainer">
                <h1 className="pageTitle">{currColor.toUpperCase()}</h1>
            </div>
            <div className="content">
                <Navbar color={currColor} data={data} selectedStation={selectedStation} setSelectedStation={setSelectedStation} />
                <div className="mainContent">
                    <Button color={currColor} setFilter={setFilter} />
                    <TrainList color={currColor} data={data} filter={filter} selectedStation={selectedStation} />
                </div>
            </div>
            <div className="backToHomeContainer">
                <Link to="/" className="backToHomeButton">Back to Home</Link>
            </div>
        </div>
    );
}

function Button({ color, setFilter }) {
    const [activeButton, setActiveButton] = useState('Arriving');

    const handleClick = (filter) => {
        if (activeButton === filter) {
            setFilter(null);
            setActiveButton(null);
        } else {
            setFilter(filter);
            setActiveButton(filter);
        }
    };

    const isNorthSouth = ['gold', 'red'].includes(color);

    return (
        <div className="buttonGroup">
            <button onClick={() => handleClick('Arriving')} className={`actionButton ${activeButton === 'Arriving' ? 'active' : ''}`}>Arriving</button>
            <button onClick={() => handleClick('Scheduled')} className={`actionButton ${activeButton === 'Scheduled' ? 'active' : ''}`}>Scheduled</button>
            <button onClick={() => handleClick(isNorthSouth ? "Northbound" : "Eastbound")} className={`actionButton ${activeButton === (isNorthSouth ? "Northbound" : "Eastbound") ? 'active' : ''}`}>
                {isNorthSouth ? "Northbound" : "Eastbound"}
            </button>
            <button onClick={() => handleClick(isNorthSouth ? "Southbound" : "Westbound")} className={`actionButton ${activeButton === (isNorthSouth ? "Southbound" : "Westbound") ? 'active' : ''}`}>
                {isNorthSouth ? "Southbound" : "Westbound"}
            </button>
        </div>
    );
}
