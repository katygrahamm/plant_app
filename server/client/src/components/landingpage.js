import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { Link }from 'react-router-dom';
import Dashboard from './dashboard';

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

  }

handleSubmit(name) {
  console.log(this.state.name)
   let userid = Math.random().toString(36).substring(7);
      console.log("random", userid);

    localStorage.setItem('userid', userid)
    localStorage.setItem('name', name)

    this.props.addUser(this.state.name, userid)
}

render() {
  return (
    <div>
     <h4 className="text-center">Tell Us Your Name</h4>
      <form className="landing-page-form" onSubmit={event => {this.handleSubmit(); event.preventDefault(); console.log(event)}}>
        <input type="text" onChange={event => {this.setState({ name: event.target.value})}}></input>
        <button type="submit">submit</button>
        <a href='/dashboard'><p>View Dashboard</p></a>
      </form>
    </div>
    ) 
  }
}

function mapStateToProps(state) {
  return ({
    user: state.user
  })
}

export default connect(
  mapStateToProps,
  actions
)(LandingPage);