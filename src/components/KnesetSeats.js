import React from 'react';
import SeatRow from './SeatRow';
import './style.css';

const SEATS_IN_FIRST_ROW = 13;
const SEATS_IN_SECOND_ROW = 11;
const SEATS_IN_THIRD_ROW = 9;
const SEATS_IN_FORTH_ROW = 7;

class KnesetSeat extends React.Component {
    _renderSeatRow(firstId, seatsInRow) {
        return <SeatRow firstId={firstId} seatsInRow={seatsInRow} seatsSelectedCount={this.props.seatsSelectedCount} />;
    }
    _calcFirstIdForAllRows(firstId) {
        var firstRowFirstId = firstId;
        var secondRowFirstId = firstRowFirstId + SEATS_IN_FIRST_ROW;
        var thirdRowFirstId = secondRowFirstId + SEATS_IN_SECOND_ROW;
        var forthRowFirstId = thirdRowFirstId + SEATS_IN_THIRD_ROW;

        return { firstRowFirstId, secondRowFirstId, thirdRowFirstId, forthRowFirstId };
    }
    _renderSection(firstId) {
        var { firstRowFirstId, secondRowFirstId, thirdRowFirstId, forthRowFirstId } = this._calcFirstIdForAllRows(firstId)
        return (
            <div>
                <div className="col-1">
                    {this._renderSeatRow(firstRowFirstId, SEATS_IN_FIRST_ROW)}
                </div>
                <div className="col-2">
                    {this._renderSeatRow(secondRowFirstId, SEATS_IN_SECOND_ROW)}
                </div>
                <div className="col-3">
                    {this._renderSeatRow(thirdRowFirstId, SEATS_IN_THIRD_ROW)}
                </div>
                <div className="col-4">
                    {this._renderSeatRow(forthRowFirstId, SEATS_IN_FORTH_ROW)}
                </div>
            </div>
        );
    }

    // TODO: need to test this
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.seatsSelectedCount === nextProps.seatsSelectedCount){
            return false;
        }
        return true;
    }

    render() {
        console.log("rendered Kneset");
        return (
            <div id="PageWrapper" className="PageWrapper">
                <div className="SeatsDetails"><span className="CaolitionText">קואליציה</span><span className="CoaltionNum">35</span><span className="CaolitionText">אופוזיציה</span><span className="CoaltionNum Op">85</span><span className="">מנדטים</span><span className="TotalMandats">120</span></div>
                <div id="Wrapper" className="Wrapper">
                    <div id="container" className="container cont-1">
                        {this._renderSection(0)}
                    </div>
                    <div id="container" className="container cont-2">
                        {this._renderSection(40)}
                    </div>
                    <div id="container" className="container cont-3">
                        {this._renderSection(80)}
                    </div>
                </div>
            </div>
        );
    }
}

export default KnesetSeat;
