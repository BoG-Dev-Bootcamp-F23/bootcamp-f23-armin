import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LinesPage from './pages/LinesPage';
import About from './pages/About';
import Home from './pages/Home';

function App() {
    const [currColor, setCurrColor] = useState("gold"); // default color

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home setCurrColor={setCurrColor} />} />
                <Route path="about" element={<About />} />
                <Route path="lines/:line" element={<LinesPage currColor={currColor} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
