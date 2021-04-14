import React from "react";
import styled from 'styled-components';
const MyRow = styled.div`
display:flex;
flex-direction: row wrap;
flex-wrap: wrap;
justify-content: center;`
const MyColum = styled.div`
display:flex;
`
const Myform = styled.form`
margin: 35px;
`
class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Food: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState(
        { 
          [e.target.name] : e.target.value
        });
  }
  handleSubmit(e){
    console.log(this.state.Food);
    e.preventDefault();
  }
  render() {
    return (
      <div>
      <MyRow>
        <MyColum>
          <h1>Explore Recipe</h1>
        </MyColum>
        <MyColum>
          <Myform onSubmit={this.handleSubmit}>
            <label>
              Are you looking for someting to eat? 
              <input name='Food' type="text" value={this.state.Food} onChange={this.handleChange} />
            </label>
            <button type="submit" value="Submit">Go</button>
          </Myform>
        </MyColum>
      </MyRow>
    </div>
    );
  }
}

export default Recipe;

