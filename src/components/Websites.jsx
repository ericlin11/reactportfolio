import React from "react"

function Websites(website) {
    return (
        <a href={website.link} target="_blank" className="website-icon">{website.icon}{website.title}</a>
    )
}

export default Websites;