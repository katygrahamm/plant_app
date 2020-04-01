import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import DashboardRedirect from './DashboardRedirect'

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

  render() {
    return (
              <div>
                <h4 className="text-center">Tell Us Your Name</h4>
                <form className="landing-page-form" noValidate autoComplete="off" onSubmit={event => {this.handleSubmit()}}>
                    <TextField id="filled-basic" label="Filled" variant="filled" onChange={event=> this.setState({ name: event.target.value })}></TextField>
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