import React from 'react';
import './style.css';

function PartyDetails(props) {
    return(
        <div>
            {props.partyName}
            {props.partyMandats}
            {props.partyWomenCount}
        </div>
    )
}

export default PartyDetails;