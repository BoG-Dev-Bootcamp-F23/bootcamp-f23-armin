import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import martaImage from '../images/map.png';

export default function About() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="aboutHeader">
                <p className="homeLink" onClick={() => {navigate("/")}}>Home</p>
                <h1>About Marta</h1>
                <p className="homeLink">&nbsp;</p>
            </div>
            <div className="aboutContent">
                <p>
                The Metropolitan Atlanta Rapid Transit Authority (MARTA) is the principal public transportation operator in the Atlanta metropolitan area. Formed in 1971, it is the eighth-largest rapid transit system in the United States by ridership.

MARTA operates a network of bus routes linked to a rapid transit system consisting of 38 train stations and 48 miles of rail track. The services provided by MARTA are a crucial component of the Atlanta metro area’s infrastructure, facilitating the daily commute of hundreds of thousands of people and helping to alleviate the city's notorious traffic congestion.

Our mission is to enhance the quality of life for all Atlantans by providing safe, reliable, and affordable public transportation. Our vision is to connect communities, drive economic development, and significantly improve the environmental sustainability of the region.

At MARTA, we strive for excellence in all that we do, constantly seeking innovative and efficient solutions to meet the transportation needs of our city. We are committed to the principles of transparency, accountability, and inclusivity, ensuring that Atlanta's transit system works for everyone.

Welcome aboard - we look forward to serving you on your journey through Atlanta!
                </p>
                <img src={martaImage} />
            </div>
        </div>
    );
}