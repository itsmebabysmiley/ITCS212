import React, { Component } from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
const MyNav = styled.nav`
display:flex;
flex-direction: row;
margin: 0px;
background-color: #5D6D7E;
`;
/* For styling <ul> */
const MyUl = styled.ul`
list-style-type: none;
display: flex;
`;
/* For styling <li> */
const MyLi = styled.li`
display: block;
padding: 14px 20px;
`;
const MyNavLink = styled(NavLink)`
text-decoration: none;
color:white
`;
class NavigationBar extends Component {
  render() {
    return (
      <MyNav>
        <MyUl>
          <MyLi>
            <MyNavLink to="/">Home</MyNavLink>
          </MyLi>
          <MyLi>
            <MyNavLink to="/recipe">Explore Recipe</MyNavLink>
          </MyLi>
          <MyLi>
            <MyNavLink to="/menu">Explore Menu</MyNavLink>
          </MyLi>
        </MyUl>
      </MyNav>
    );
  }
}
export default NavigationBar;
