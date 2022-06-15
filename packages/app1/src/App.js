import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppOne from "./components/AppOne";
import Detail from "./components/Detail"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppOne />} />
                <Route path="/app1/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
