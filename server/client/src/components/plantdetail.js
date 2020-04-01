import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import { Button } from 'react-bootstrap';


class PlantDetail extends Component {  
    constructor(props) {
     super(props)

    }

componentDidMount() {
    let plantId = sessionStorage.getItem('plant')
    console.log(plantId)
    this.props.fetchPlantDetail(plantId)
 }

 render() {
    console.log(this.props.plant)
    if (this.props.plant == undefined) {
     return (
       <div>Loading ... </div>
     )
   } else {
    return(
    <div>
        hello
      </div>
    )
  }
}
}


 function mapStateToProps(state) {
    return ({
      plants: state.plants,
      plant: state.plant
    })
  }
  
  export default connect(
    mapStateToProps,
    actions
  )(PlantDetail);