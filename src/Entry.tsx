import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./App"
import {AboutUs} from "./components/AboutUs/AboutUs"
import ArtGenerator from "./components/ArtGenerator"
import {Gallery} from "./components/Gallery"
import {Models} from "./components/Models"
import {ModelsAsyncProvider} from "./context/ModelAsync"
import {PageNotFound} from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import {Header} from "./components/Header";
import {WrittenArtGenerator} from "./components/WrittenArtGenerator";
import {Showcase} from "./components/Showcase";

export const Entry = () => {
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <ModelsAsyncProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App/>}/>
                            <Route path="/modeller" element={<Models/>}/>
                            <Route path="/galleri/:name" element={<Gallery/>}/>
                            <Route path="/galleri" element={<Gallery/>}/>
                            <Route path="/om" element={<AboutUs/>}/>
                            <Route path="/om/:name" element={<AboutUs/>}/>
                            <Route path="/generer/:name" element={<ArtGenerator/>}/>
                            <Route path="/generer" element={<ArtGenerator/>}/>
                            <Route path="/skriv-kunst" element={<WrittenArtGenerator/>}/>
                            <Route path="/skriv-kunst" element={<WrittenArtGenerator/>}/>
                            <Route path="/showcase/:name" element={<Showcase/>}/>
                            <Route path="/showcase" element={<Showcase/>}/>
                            <Route path="*" element={<><Header/><PageNotFound/></>}/>
                        </Routes>
                    </BrowserRouter>
            </ModelsAsyncProvider>
        </ErrorBoundary>
      </React.StrictMode>
    )
}