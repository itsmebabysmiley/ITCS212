import React from "react";
import styled from 'styled-components';
const Mydiv = styled.div`
display:flex;
flex-direction: row;
justify-content: center;`
const Myform = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin: 30px;
`
class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState(
        { 
            food: e.target.food 
        });
  }
  render() {
    return (
      <div>
        <Mydiv>
            <h1>Explore Recipe</h1>
            <Myform>
            <form>
            <label>Are you looking for somthing to cook? </label>
            <input
                name="food"
                type="text"
                value={this.state.food}
                onChange={this.handleChange}
            />
            <button type="button">Go</button>
            </form>
            </Myform>
        </Mydiv>
      </div>
    );
  }
}

export default Recipe;

