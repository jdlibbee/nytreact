import React from "react";

const DeleteBtn = props => (
    <a className="btn-floating btn-large waves-effect waves-light red"{...props}><i className="material-icons">delete</i></a>
);

export default DeleteBtn;