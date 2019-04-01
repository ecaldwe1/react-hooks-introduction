import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {

  // return array always returns two elements, current state and a function that lets us override current state
  const [state, setState] = useState({
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  })

  // Need to turn these into consts that hold these functions
  const sideHandler = side => {
    setState({ side: side }); // don't need this, not in a class anymore
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setState({ selectedCharacter: charId });
  };

  const destructionHandler = () => {
    setState({ destroyed: true });
  };

    let content = (
      <React.Fragment>
        <CharPicker
          side={state.side}
          selectedChar={state.selectedCharacter}
          onCharSelect={charSelectHandler}
        />
        <Character selectedChar={state.selectedCharacter} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {state.side === 'dark' && (
          <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );

    if (state.destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
}

export default App;
