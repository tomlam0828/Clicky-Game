import React from "react";
import "./style.css";

function PicCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img onClick={() => props.imageClick(props.id)} alt={props.name} src={props.image} />
            </div>
        </div>
    );
};


export default PicCard;
