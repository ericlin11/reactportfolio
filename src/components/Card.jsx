import React from "react"

function Card(card) {
    return (
        <div className="term">
            <dt>
                <a href={card.link}>
                    <h2>{`${card.id}. ${card.title}`} </h2>
                </a>
            </dt>
            <dd>{card.summary}</dd>
        </div>
    )
}

export default Card;