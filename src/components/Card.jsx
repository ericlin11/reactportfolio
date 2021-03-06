import React from "react"
import TabIcon from '@mui/icons-material/Tab';


function Card(props) {
    return (
        // <div className="card" id={props.id}>
        //     <div className="summary"></div>
        //         <dt>

        //         </dt>

        //     <div className="picture"></div>
        // </div>
        <div className="dictionary" id={props.id}>
            <div className="term">
                <dt>
                    <a href={props.link} target="_blank">
                        <h2>{`${props.id}. ${props.title}`} </h2>
                        <TabIcon color="inherit" />
                    </a>
                </dt>
                <dd>{props.summary}</dd>
            </div>
            <div>
                <img src={props.src} />
            </div>
        </div >
    )
}

export default Card;