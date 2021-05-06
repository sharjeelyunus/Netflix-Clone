import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="NETFLIX ORIGNAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
