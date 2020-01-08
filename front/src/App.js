import React from 'react';
import Router from './components/Router';
import './App.css'
import NeoworkerListCard from './components/admin/NeoWorkerListCard'

function App() {
  
  return (
    <div>
            <Router />
            <NeoworkerListCard/>
    </div>
  );
}

export default App;
