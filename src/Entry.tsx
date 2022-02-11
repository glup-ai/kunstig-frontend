import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./App"
import {AboutUs} from "./components/AboutUs/AboutUs"
import ArtGenerator from "./components/ArtGenerator"
import {Gallery} from "./components/Gallery"
import {Models} from "./components/Models"
import {ModelsAsyncProvider} from "./context/ModelAsync"
import {PageNotFound} from "./components/PageNotFound";

export const Entry = () => {
    return (
        <React.StrictMode>
            <ModelsAsyncProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/modeller" element={<Models/>}/>
                        <Route path="/galleri/:name" element={<Gallery/>}/>
                        <Route path="/galleri" element={<Gallery/>}/>
                        <Route path="/om" element={<AboutUs/>}/>
                        <Route path="/generer/:name" element={<ArtGenerator/>}/>
                        <Route path="/generer" element={<ArtGenerator/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
        </ModelsAsyncProvider>
      </React.StrictMode>
    )
}