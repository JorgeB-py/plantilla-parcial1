import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Index from "./Index.jsx";
export default function Routing() {
    const nav_links = [
        { url: "/", component: Login },
        { url: "index", component: Index },
    ];
    return (
        <Routes>
            {nav_links.map((link, index) => (
                <Route key={index} path={link.url} element={<link.component />} />
            ))}
        </Routes>
    );
}