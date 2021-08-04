import React from 'react'
import axios from 'axios'

class Followers extends React.Component{
    state = {
        followers:[]
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user['login']}/followers`)
          .then(res=> {
            this.setState({
              ...this.state,
              followers: res.data
            })
          })
      }

    render(){
        return (
            <div>
                <h2>List of Followers</h2>
                <div>
                    {this.state.followers.map(function(follower,index){
                        return(
                        <h4 key={index}>{follower['login']}</h4>
                    )})}
                </div>
                <button onClick={this.props.closeModal}>Close</button>
            </div>
        )
    };
};

export default Followers;