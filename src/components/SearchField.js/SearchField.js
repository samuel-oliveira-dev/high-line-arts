import React from "react";
import './index.css';
import search from './images/search.png'
export default function SearchField(props){
    const {width, height, color, placeholder} = props;
    return (
        <div className="campo-container">
            <input  className="campo" placeholder={placeholder}>
            </input>
            <span className = "campo-icon">
                <img src={search} className="image-icon"></img>
            </span>
        </div>
        );
}