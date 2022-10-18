import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StatusContainer from './containers/StatusContainer';
import MainContainer from './containers/MainContainer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div>Hello React is working</div>
      <StatusContainer />
      <MainContainer />
    </>
  );
}

export default App;
