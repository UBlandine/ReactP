import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */} 
        </Switch>
    </Router>
      </>
  )
}


export default Pages
