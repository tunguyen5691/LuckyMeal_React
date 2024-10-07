import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteCustom from "./components/RouteCustom/RouteCustom";

const App = () => {
    return (
        <BrowserRouter>
            <RouteCustom />
        </BrowserRouter>
    );
};

export default App;
