import React from "react";

export const Textarea = props => (
    <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea"{...props}></textarea>
        <label for="textarea1">Notes</label>
    </div>
);