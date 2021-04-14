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
const Content = styled.div`
display:flex;
flex-flow: column wrap;
justify-content: center;
margin: 30px;
padding: 10px;
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
        // alert('A name was submitted: ' + this.state.value);
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
          <MyRow>
            <MyColum>
              <h1>Explore Menu</h1>
            </MyColum>
            <MyColum>
              <Myform onSubmit={this.handleSubmit}>
                <label>
                  Are you looking for food? 
                  <input name='food' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" value="Submit">Go</button>
              </Myform>
            </MyColum>
          </MyRow>
          
          <Results results = {this.state.data}/>

        </div>
        );
      }
}
export default Menu;

class Results extends React.Component{
    render(){
        return (
            <MyRow>
                {this.props.results && this.props.results.map(data =>{
                    return (
                        <Content>
                          <div>
                            <img src={data.image} alt="..." width="312" height="231"></img>
                          </div>
                          <div>
                            <p id={data.id}> {data.title}</p>
                          </div>
                        </Content> 
                    )
                })
                }
            </MyRow>
            )
    }
}
