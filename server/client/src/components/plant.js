import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const Plant = (props) => {
  return (
    <Link to={`/${props.id}`}>
      <Overdrive id={String(props.id)}>
        <Poster src={`${props.imageUrl}`} alt={props.title} />
      </Overdrive>
    </Link>
  )
};

export default Plant;

export const Poster = styled.img`
  box-shadow: 0 0 30px white;
  &:hover {
    transform: scale(1.06);
    transition-duration: 300ms;
  }
`;
