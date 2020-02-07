import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="More" onClick={props.added}>Add</button>
        <button className="Less" onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>
)

export default buildControl;