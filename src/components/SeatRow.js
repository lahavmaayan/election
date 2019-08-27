import React from 'react';
import Seat from './seat';

class SeatRow extends React.Component {
    constructor(props){
        super(props);
        this.ids = this._calcRowSeatIds();
    }
    

    _calcRowSeatIds(){
        var firstId = this.props.firstId;
        var seatsInRow = this.props.seatsInRow;
        return ([...Array(seatsInRow).keys()].map(x => x+firstId))
    }

    render() {
        console.log("rendered SeatRow, for seat starts at " + this.props.firstId);
        const seats = this.ids.map((seatId) => {
            return <Seat
                key={seatId} isSelected={this.props.seatsSelectedCount > seatId}
            />
        });
        return (
            <div>
                {seats}
            </div>)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.seatsSelectedCount === nextProps.seatsSelectedCount){
            return false;
        }
        return true;
    }
}

export default SeatRow;