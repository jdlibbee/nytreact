import React from "react";
import SaveBtn from "../SaveBtn";

const Card = (props) => (
    <div className="card horizontal">
        <div className="card-stacked">
            <div className="card-content">
                <h4 href={props.url}>{props.title}</h4>
                <p>{props.date}</p>
            </div>
            <div className="card-action">
                <SaveBtn
                    data-target="modal1"
                    className="modal-trigger"
                    id={props._id}
                />
            </div>
        </div>
    </div>
)

export default Card; 