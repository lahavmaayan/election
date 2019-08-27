import React from 'react';
import PartyDetail from './PartyDetail';

const partyDetails = require('../partyData.json');


class PartyList extends React.Component {

    _renderAllParties() {
        const partyDetailList = Object.keys(partyDetails).map(function (partyKey) {
            var elem = partyDetails[partyKey]
            return (<PartyDetail
                key={partyKey}
                partyName={elem['partyName']}
                partyMandats={elem['partyMandats']}
                partyWomenCount={elem['partyWomenCount']}
            />);
        });
        return partyDetailList;
    }

    render() {
        console.log("rendered PartyList");
        const partyDetailList = this._renderAllParties()
        return (<div>
            {partyDetailList}
        </div>);
    }
}

export default PartyList;