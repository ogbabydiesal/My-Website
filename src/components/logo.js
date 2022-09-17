import React from 'react';
import styled from 'styled-components';
import {  Link } from "react-router-dom";
import myImage from '../images/chainmaille.gif';
const Chainy = styled.div`
  background-image: url(${myImage});
  position:absolute;
  bottom: 100px;
`;

const Logo= () =>{
  return (
  <Chainy>
    <p> hahah</p>
  </Chainy>
  );
}
export default Logo;
