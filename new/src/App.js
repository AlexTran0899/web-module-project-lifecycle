import './App.css';
import React from"react"
import axios from'axios'
import TextField from '@material-ui/core/TextField';






class App extends React.Component{

state ={ 
  followersArray:[],
  person:''
}

handleChange = e =>{
  this.setState({
    person: e.target.value
  })
}

handleSubmit = e =>{
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.person}/followers`)
  .then(response=>{
    this.setState({
      followersArray:response.data
    })
  })
console.log(this.state.followersArray)
}


render(){
  return (
  <div>
    <h1> this is working</h1>

    <form onSubmit={this.handleSubmit}>
      <TextField
      onChange={this.handleChange}
      value={this.state.person}
      placeholder="enter username"
      label="Profile"
      variant="outlined"
      type="text"/> 
    </form>
    <div className="cards">
    {this.state.followersArray.map(follower =>{
      return( 
      
        <div className="card">
        <a href={follower.html_url}>
        <img  width="200"src={follower.avatar_url}/>
        </a>
        <p>{follower.login}</p>
       
        </div>
       
        )
        
    })}


    </div>


  </div>)




}



}





export default App;
