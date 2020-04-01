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
      name:''
    }
  }

  handleSubmit() {
    console.log(this.state.name)
    this.props.addUser(this.state.name)
  }

  renderDash() {
    console.log(this.props.user._id)
    if (this.props.user._id) {
      return (
          <Dashboard />
        )
      } else {
        return (
          <div>
           <h4 className="text-center">Tell Us Your Name</h4>
            <form className="landing-page-form" onSubmit={event => {this.handleSubmit()}}>
              <input type="text" onChange={event=> this.setState({ name: event.target.value })}></input>
              <button type="submit">submit</button>
            </form>
          </div>
        )
      }
  }

render() {
  return (
    <div>
     {this.renderDash()}
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