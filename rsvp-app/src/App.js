import React ,{Component} from 'react';
import './App.css';
import Events from './container/Events/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailsForm from './container/DetailsForm/index'

 class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <header className="App-header">
        <div>Mcimbi RSVP</div>
        </header>
        <div className ="event">
        <Events/>
        </div>
        <div className="">
          
        </div>
      </div>
      </Router>
    )
  }
}

export default App;