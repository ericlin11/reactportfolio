import React from "react"

function IconLink(props) {
    return (
        <a href={props.link} target="_blank" className="website-icon">{props.icon}{props.title}</a>
    )
}

export default IconLink;