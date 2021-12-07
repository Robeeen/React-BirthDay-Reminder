import React, { useState } from 'react';
import Data from './Data';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} BirthDays today</h3>
        <List people={people}/>
        <button onClick={()=> console.log('You clicked now')} />
        <button>Clear All</button>
      </section>
    </main>
  );
}

export default App;
