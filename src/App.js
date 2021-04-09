import './App.css';
import React from 'react';
import AnimeBlock from './components/AnimeBlock';
import ReactForm from './pages/ReactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimeBlock></AnimeBlock>
        <ReactForm></ReactForm>
      </header>
    </div>
  );
}

export default App;
