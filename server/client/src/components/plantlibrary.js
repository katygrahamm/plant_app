import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import { Button } from 'react-bootstrap';


class PlantLibrary extends Component {  

componentDidMount() {
  this.props.fetchPlants()
 }

handleOnClick(plant) {
  console.log(plant)
  console.log(this.props)
  this.props.addCollection(plant, this.props.user._id)
}

handleImgClick(plantId) {
  sessionStorage.removeItem('plant')
  sessionStorage.setItem('plant', plantId)
}

 render () {
   console.log(this.props.plants.plants)
   if (this.props.plants.plants == undefined) {
    return (
      <div>Loading ... </div>
    )
  } else {
    return (
      <div>
      {
      this.props.plants.plants.map(plant => ( 
        <div>
          <h3 className="common-name-recomm">{plant.common_name}</h3>
          <h5 className="botanical-name-recomm">{plant.botanical_name}</h5>
          <Link to={`/${plant._id}/plantdetail`}><img height="150px" src="" width="auto" alt="plant-image" src={plant.image_url} onClick={event => this.handleImgClick(plant._id)}></img></Link>
          <br></br>
          <br></br>
          <Button className="button-add-to-collection" variant="outline-secondary" onClick={event => this.handleOnClick(plant)}>+ Add to Collection</Button>
          <hr />
        </div>

          ))
              
          }
            
        </div>
        )
      }
    }
  }

function mapStateToProps(state) {
  return ({
    plants: state.plants
  })
}

export default connect(
  mapStateToProps,
  actions
)(PlantLibrary);

