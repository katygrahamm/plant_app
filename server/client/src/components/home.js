import React, { Component } from "react";
import styled from "styled-components";
import Plant from "./Plant";
import { connect } from "react-redux";
import * as actions from '../actions';
import _ from "lodash";
import InfiniteScroll from 'react-infinite-scroller';

class PlantList extends Component {  
  constructor () {
    super()
    
    this.loadItems = this.loadItems.bind(this)
    
    this.state = {
      hasMoreItems: true
    }
  }

  componentDidMount () {
    this.props.fetchPlants()
  }

  loadItems (page) {
    if (page < this.props.totalPages || this.props.totalPages === 0) {
      this.props.fetchPlants(page)
    } else {
      this.setState({ hasMoreItems: false })
    }
  }

  render() {
    const plants = _.map(this.props.plants, (m) => {
      return <Plant id={m.id} key={m.id} name={m.name} img={m.imageUrl} />
    });

    return (
      <InfiniteScroll
        loadMore={this.loadItems}
        pageStart={0}
        hasMore={this.state.hasMoreItems}>
        <PlantGrid>
          {plants}
        </PlantGrid>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps (state) {
  return { plants: state.plants, totalPages: state.total_pages }
};

export default connect(
  mapStateToProps,
  actions
)(PlantList);

const PlantGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;