import React from "react";

const TextArea = props => (
    <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea"{...props}></textarea>
        <label for="textarea1">Notes</label>
    </div>
);

export default TextArea;