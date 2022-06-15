import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTwo from "./components/AppTwo";
import Detail from "./components/Detail"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppTwo />} />
                <Route path="/app2/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
