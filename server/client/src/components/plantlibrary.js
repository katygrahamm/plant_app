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
  this.props.addCollection(plant, this.props.user._id)
}

handleImgClick(plantId) {
  sessionStorage.removeItem('plant')
  sessionStorage.setItem('plant', plantId)
}

 render () {
   if (this.props.plants.plants == undefined) {
    return (
      <div>Loading ... </div>
    )
  } else {
    return (
      <div>
      {
      this.props.plants.plants.map(plant => ( 
        <div className="plant-library-container">
          <p className="common-name-library">{plant.common_name}</p>
          <p className="botanical-name-library">{plant.botanical_name}</p>
          <Link to={`/${plant._id}/plantdetail`}><img height="150px" src="" width="auto" alt="plant-image-library" src={plant.image_url} onClick={event => this.handleImgClick(plant._id)}></img></Link>
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

