import React from 'react'
import {Provider} from 'react-redux'
import Header from './components/Header'
import {store} from './store/store'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HeroSection from './components/HeroSection'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <HeroSection/>
        <Switch>
          <Route exact path="/" render={()=>(<h1>Home</h1>)}/>
          <Route exact path="/notification" render={()=>(<h1>Notification</h1>)}/>
          <Route exact path="/contact/:userid" render={
            (props)=>{
              console.log(props.match.params.userid);
              return <h1>Contact</h1>
            }
          }/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
