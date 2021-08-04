import React from 'react';
import axios from 'axios';
import CardsContainer from './CardsContainer.js'
import './App.css';

class App extends React.Component {
  state = {
    inputValue:'',
    userData:[]
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/andrewschaer')
      .then(res=> {
        this.setState({
          ...this.state,
          userData: [...this.state.userData, res.data]
        })
      })
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      inputValue: e.target.value
    })
  }

  handleAddUser = (e)=> {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.inputValue}`)
      .then(res=> {
        this.setState({
          ...this.state,
          userData: [...this.state.userData, res.data]
        })
      })
  }

  render() {
    return (
      <div>
        <h1>GITHUB USERS: POKEMON CARD EDITION</h1>
        <form>
          <label>Add GitHub Username&nbsp;</label>
          <input
            onChange={this.handleChanges}
            type='text'
            name='username'
          />
          <button onClick={this.handleAddUser}>Create Card</button>
        </form>
        <CardsContainer userData={this.state.userData}/>
      </div>
    );
  };
}

export default App;
