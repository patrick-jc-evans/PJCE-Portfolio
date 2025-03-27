import "./App.css"
import { Routes, Route } from "react-router"
import Home from "./pages/home/home"
import Anew from "./pages/articles/anew/anew"
import Header from "./components/header/header"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/anew" element={<Anew />} />
            </Routes>
        </div>
    )
}

export default App
