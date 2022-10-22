import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SimpleSlider from "./SimpleSlider"
import About from "./About"
import "../styles.css";



function App() {
    return (
        <div className="app">
            <Navbar title="Eric Lin" />
            <About />
            <SimpleSlider />
            <Footer />
        </div>
    )
}

export default App;