import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'



export default function ParamsExample () {
  return (
    <Router>
      <div>
        <h2>Welcome Phil</h2>

        <Switch>
          <Route path='/:id' children={<Child />} />
        </Switch>
      </div>
    </Router>
  )
}

Welcome () {props.match.params.Welcome };


function Child () {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams()

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
