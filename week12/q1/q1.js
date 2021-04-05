// import React from "react";
// import ReactDOM from "react-dom";



// class InfoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     if (this.props.type === "special") {
//       this.state = {
//         firstname: "",
//         lastname: "",
//         age: "",
//         nationality: "Thai",
//         disability: "No"
//       }
//     } else {
//       this.state = {
//         firstname: "",
//         lastname: "",
//         age: ""
//       }
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(e) {
//     let nam = e.target.name;
//     let val = e.target.value;
//     console.log(val);
//     if (nam === "age") {
//       if (!Number(val)) {
//         alert("Your age must be a number");
//       }
//     }
//     this.setState({
//       [nam]: val
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     if(this.props.type === "normal")
//       alert(`Hello, ${this.state.firstname}  ${this.state.lastname} \r\n Your Age is ${this.state.age}`);
//     else
//       alert(`Hello, ${this.state.firstname}  ${this.state.lastname} \r\n Your Age is ${this.state.age} \r\n Your nationality is ${this.state.nationality}`)
//   }

//   render() {
//     if (this.props.type === "normal") {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>First Name:</label>
//           <input
//             type="text"
//             name="firstname"
//             value={this.state.firstname}
//             onChange={this.handleChange}
//           /><br />
//           <label>Last Name:</label>
//           <input
//             type="text"
//             name="lastname"
//             value={this.state.lastname}
//             onChange={this.handleChange}
//           /><br />
//           <label>Age:</label>
//           <input
//             type="text"
//             name="age"
//             value={this.state.age}
//             onChange={this.handleChange}
//           /><br />
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     } else {
//       return (<form onSubmit={this.handleSubmit}>
//         <label>First Name:</label>
//         <input
//           type="text"
//           name="firstname"
//           value={this.state.firstname}
//           onChange={this.handleChange}
//         /><br />
//         <label>Last Name:</label>
//         <input
//           type="text"
//           name="lastname"
//           value={this.state.lastname}
//           onChange={this.handleChange}
//         /><br />
//         <label>Age:</label>
//         <input
//           type="text"
//           name="age"
//           value={this.state.age}
//           onChange={this.handleChange}
//         /><br />
//         <label>Pick your nationality:</label>
//         <select value={this.state.natioality} name = "nationality" onChange={this.handleChange}>
//           <option value="Thai">Thai</option>
//           <option value="America" >America</option>
//           <option value="Salim national" >Salim</option>
//         </select><br />
//         <label>Disability:</label>
//         <select value={this.state.disability} name = "disability" onChange={this.handleChange}>
//           <option value="Yes" >Yes</option>
//           <option value="No" >No</option>
//         </select><br />

//         <input type="submit" value="Submit" />
//       </form>
//       );

//     }
//   }

// }

// ReactDOM.render(<InfoForm type="normal" />, document.getElementById("root"));
// ReactDOM.render(<InfoForm type="special" />, document.getElementById("root"));