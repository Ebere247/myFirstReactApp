import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Cards from './components/Card';

function App() {

    let cards = [];
    for (let index = 0; index < 3; index++) {
        cards.push(<Cards />);
    }

  return (
    <div>  

    <NavBar />
 
    {cards}
  
  </div>
  )
}

export default App