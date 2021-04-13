import React from "react";
import styled from 'styled-components';
const Mydiv = styled.div`
display:flex;
flex-direction: row wrap;
justify-content: center;`
const Myform = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin: 30px;
`
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        var APi_key = "c425f3e92397425fa0ca18b93364dbac";
        let rooturl =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
        APi_key +"&query="+this.state.value;
        console.log(rooturl);
       
        fetch(rooturl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                data : data.results
            })
        })
        .catch((error) => console.log(error));
        event.preventDefault();
      }
      
      render() {
        return (
        <div>
            <h1>Explore Menu</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
              Are you looking for food? 
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        <Results results = {this.state.data}/>
        </div>
        );
      }
}
export default Menu;

class Results extends React.Component{
    render(){
        return (
            <div>
                {this.props.results && this.props.results.map(data =>{
                    return (
                        <div>
                            <img src={data.image} alt="Girl in a jacket" width="312" height="231"></img>
                            <p id={data.id}> {data.title}</p>
                        </div> 
                    )
                })
                }
            </div>
            )
    }
}
