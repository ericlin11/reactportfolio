import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyWebsites from "./MyWebsites"
import Card from "./Card"
import { red } from "@mui/material/colors";

function createCard(card) {
    return (
        <Card
            id={card.id}
            title={card.title}
            link={card.link}
            summary={card.summary}
            src={card.src}
        />
    )
}


export default class SimpleSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 5000,
            // className: "test",
        };
        return (
            <div className="content">
                <h2> Projects</h2>
                <Slider {...settings} >
                    {/* <div>
                        <h3></h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div> */}
                    {MyWebsites.map(createCard)}
                </Slider>
            </div>
        );
    }
}