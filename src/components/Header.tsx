import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
    <>
      <div>Header</div>
      <Link to="/firstPage" >passValue</Link><br></br>
      <Link to="/testUseState">useState</Link><br></br>
      <Link to="/testUseReducer">useReducer</Link><br></br>
      <hr></hr>
    </>
    )
  }
}

export default Header