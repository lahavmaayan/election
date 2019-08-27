import React from 'react';
// import logo from './logo.svg';
import KnesetSeats from './components/KnesetSeats';
import PartyList from './components/PartyList'
import './App.css';

class App extends React.Component {
  _renderSection(firstId){
    
  }

  render() {
    return (
      <PartyList/>
    // <KnesetSeats seatsSelectedCount={67} />
  );
}
}

export default App;
