import React from "react";
import SaveBtn from "../SaveBtn";

const Card = (props) => (
    <div className="card horizontal">
        <div className="card-stacked">
            <div className="card-content">
                <h4 href={props.link}>{props.url}</h4>
            </div>
            <div className="card-action">
                <SaveBtn
                    data-target="modal1"
                    className="modal-trigger"
                />
            </div>
        </div>
    </div>
)

export default Card; 