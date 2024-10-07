import React from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Home from "../../pages/Home";
import Default from "../../pages/Default";
import Welcome from "../../pages/Welcome";
import NewsPage from "../../pages/NewsPage";
import PersonalPage from "../../pages/PersonalPage";
import Cart from "../../pages/Cart";
import StorePage from "../../pages/StorePage";
import RecipeList from "../../pages/RecipeList";

export default function RouteCustom({ }) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<Welcome />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/StorePage" element={<StorePage />} />
                <Route path="/NewsPage" element={<NewsPage />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/PersonalPage" element={<PersonalPage />} />
                <Route path="/RecipeList" element={<RecipeList />} />
            </Routes>
        </AnimatePresence>
    );
}
