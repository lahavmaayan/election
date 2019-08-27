import React from 'react';
import './style.css';

function Seat(props) {
    var seatColor =  props.isSelected ? 'blue' : 'grey';
    return (
        <div className = "seat" style={{background: seatColor}}> &nbsp; </div>
    );
};

export default Seat;