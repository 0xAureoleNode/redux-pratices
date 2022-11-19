import KitchenSinkExample from './Card';
import { createStore } from 'redux';
import { useState } from 'react';
import reducer from './reducers';

const App = () => {
  const [name] = useState('艾克');
  const [description] = useState(
    '艾克是一名来自祖安不良街区的奇才,他可以操纵时间,从而让任何处境都变得对自己有利'
  );

  const initialState = { name, description };
  const Store = createStore(reducer, initialState);
  return (
    <KitchenSinkExample
      name={Store.getState().name}
      description={Store.getState().description}
    />
  );
};

export default App;
