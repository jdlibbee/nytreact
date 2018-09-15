import React from "react";
import TextArea from "../Form";

const Modal = props => (
    <div id="modal1" className="modal">
        <div className="modal-content">
            <h4>Notes</h4>
            <TextArea />
        </div>
        <div className="modal-footer">
            <a href="/saved" {...props} className="modal-close waves-effect waves-green btn-flat">Save</a>
        </div>
    </div>
)

export default Modal;