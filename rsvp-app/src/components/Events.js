import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Events extends Component {
    render() {
        return (

            <div className ="events">
                <nav class="links">
        <ul className="listofevents">
          <li><NavLink to='/Matric Dance' >Matric Dance</NavLink></li>
          <br/>
          <li><NavLink to='/Joes wedding'>Joe's wedding</NavLink></li>
          <br/>
          <li><NavLink to='/Braai day'>Braai day</NavLink></li>
          <br/>
          <li><NavLink to='/Thanks giving'>Thanks giving</NavLink></li>
          <br/>
          <li><NavLink to='/awards day'>awards day</NavLink></li>
        </ul>
      </nav>
            </div>
        )
    }
}

