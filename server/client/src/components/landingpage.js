import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from "lodash";
import GoogleLoginButton from './googlebutton';


class LandingPage extends Component {

  renderPage = () => {

    return (
      <React.Fragment>
        <div className="d-flex landingLogo">
          <h1 className="logoTitle d-flex"> PlantApp</h1>
        </div>

        <div className="landing-page">
          <div className="row">
            <div className="col-md-8-offset-3 text-center">
              <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
                <div className="card-body">
                <h4 className="text-center">Login to PlantApp</h4>
                <br></br>
                  <GoogleLoginButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    )
  }

  render() {
    return (
      <div>{this.renderPage()}</div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(LandingPage);