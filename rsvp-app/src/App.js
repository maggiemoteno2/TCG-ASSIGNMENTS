import React ,{Component} from 'react';
import './App.css';
import Events from './components/Events';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

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
        <div>
          {/* <RegisterForm/> */}
        </div>
      </div>
      </Router>
    )
  }
}

export default App;