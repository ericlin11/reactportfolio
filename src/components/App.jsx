import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Card from "./Card"
import MyWebsites from "./MyWebsites"

function createCard(card) {
    return (
        <Card
            id={card.id}
            title={card.title}
            link={card.link}
            summary={card.summary}
        />
    )
}

function App() {
    return (
        <div>
            <Navbar title="Eric Lin" />
            <Header title="Eric Lin Portfolio" />
            <dl className="dictionary">{MyWebsites.map(createCard)}</dl>
        </div>
    )
}

export default App;