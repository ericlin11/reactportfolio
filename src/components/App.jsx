import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SimpleSlider from "./SimpleSlider"



function App() {
    return (
        <div className="app">
            <Navbar title="Eric Lin" />
            <SimpleSlider />
            <Footer />
        </div>
    )
}

export default App;