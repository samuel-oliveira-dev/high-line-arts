import React from 'react'
import img1 from './images/capivara1.jpg';
import img2 from './images/capivara2.jpg';
import img3 from './images/capivara3.jpg';
import  './index.css';
export default function Slider() {
    return (
        <ul style={{}}className="slider-main">
            <li>
                <input type="radio" id="slide1" name="slide" defaultChecked/>
                <label htmlFor="slide1"/>
                <img  src={img1}></img>
            </li>
            <li>
                <input type="radio" id="slide2" name="slide" />
                <label htmlFor="slide2"/>
                <img src={img2}></img>
            </li>
            <li>
                <input type="radio" id="slide3" name="slide" />
                <label htmlFor="slide3"/>
                <img src={img3}></img>
            </li>
        </ul>
    );
}