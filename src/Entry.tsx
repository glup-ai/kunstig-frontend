import React, { useContext, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { AboutUs } from "./components/AboutUs/AboutUs"
import ArtGenerator from "./components/ArtGenerator"
import { Gallery } from "./components/Gallery"
import { Models } from "./components/Models"
import { KunstigContext, KunstigProvider } from "./context/Context"
import { fetchModels } from "./utils/async"

export const Entry = () => {
    const {updateGlobalState} = useContext(KunstigContext);
    
    useEffect(() => {
        fetchModels()
            .then(response => updateGlobalState(response.models))
    }, [updateGlobalState])

    return (
        <React.StrictMode>
        <KunstigProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/modeller" element={<Models/>}/>
            <Route path="/galleri/:name" element={<Gallery/>}/>
            <Route path="/galleri" element={<Gallery/>}/>
            <Route path="/om" element={<AboutUs/>}/>
            <Route path="/generer/:name" element={<ArtGenerator/>}/>
            <Route path="/generer" element={<ArtGenerator/>}/>
          </Routes>
        </BrowserRouter>
        </KunstigProvider>
      </React.StrictMode>
    )
}