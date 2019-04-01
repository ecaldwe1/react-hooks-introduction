import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {

  // return array always returns two elements, current state and a function that lets us override current state
  // const [state, setState] = useState({
  //   selectedCharacter: 1,
  //   destroyed: false
  // })

  const [selectedCharacter, setSelectedCharacter] = useState('1')

  const [destroyed, setDestroyed] = useState(false)

  const [chosenSide, setChosenSide] = useState('light')

  // Need to turn these into consts that hold these functions
  const sideHandler = side => {
    setChosenSide(side); // only need the side string here now
  };

  const charSelectHandler = event => {
    const charId = event.target.value; // this will be a string, so while we set the initial state to a number and it would be okay, we can go back and set the initial state to a string
    setSelectedCharacter(charId); // only need the character id here now
  };

  const destructionHandler = () => {
    setDestroyed(true); // only need the boolean here
  };

    let content = (
      <React.Fragment>
        <CharPicker
          side={chosenSide}
          selectedChar={selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={selectedCharacter} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {chosenSide === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
}

export default App;
