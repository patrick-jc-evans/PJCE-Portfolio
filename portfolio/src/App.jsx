import "./App.css"
import { Routes, Route } from "react-router"
import Header from "./components/header/header"

// Pages
import Home from "./pages/home/home"
import Anew from "./pages/articles/anew/anew"
import PlantZone from "./pages/articles/plantzone/plantzone"
import Portfolio from "./pages/articles/portfolio/portfolio"
import TrentonTrack from "./pages/articles/trentontrack/trentontrack"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/anew" element={<Anew />} />
                <Route path="/plantzone" element={<PlantZone />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/trent-on-track" element={<TrentonTrack />} />
            </Routes>
        </div>
    )
}

export default App
