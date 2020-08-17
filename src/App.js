import React from 'react'
import './App.css'
import { Route } from 'react-router';

function App () {
  const route = (
    <div>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/:user'>
        <User />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </div>
  )
 
}

export default App
