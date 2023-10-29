import React from 'react';

const Train = ({ data, color }) => (
    <div className="trainItem">
        <div className="trainImageContainer">
            <div className="trainIcon">M</div>
        </div>
        <div className="trainInfoContainer">
            <p>{data.STATION} &rarr; {data.DESTINATION}</p>
            <div className="infoContainer">
                <div className={`${color} lineColorContainer`}>
                    <p>{color.charAt(0).toUpperCase() + color.slice(1)}</p>
                </div>
                <p className="greenText">On time</p>
            </div>
        </div>
        <div className="arrivalTimeContainer">
            <p className="greenText">{data.WAITING_TIME}</p>
        </div>
    </div>
);

export default Train;
