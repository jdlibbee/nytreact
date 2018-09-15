import React from "react";

export const Input = props => (
    <div className="input-field col s12">
        <input id="icon-prefix" type="text" className="validate">
            <label for="icon_prefix">{props.children}</label>
        </input>
    </div>
)