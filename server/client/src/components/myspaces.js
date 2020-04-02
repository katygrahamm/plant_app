import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import { Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';


class MySpaces extends Component {  

componentDidMount() {
  let userid = localStorage.getItem('userid')
  this.props.fetchSpaces(userid)
 }

 render () {
   console.log(this.props)
   if (this.props.spaces === []) {
    return (
      <div>Loading ... </div>
    )
  } else {
    return (
      <div>
      {
      this.props.spaces.map(space => ( 
        <Grid>
          <p className="common-name-library">We recommend these plants for your {space.name}</p>
          <hr />
        </Grid>

          ))
              
          }
            
        </div>
        )
      }
    }
  }

function mapStateToProps(state) {
  return ({
    spaces: state.spaces
  })
}

export default connect(
  mapStateToProps,
  actions
)(MySpaces);

