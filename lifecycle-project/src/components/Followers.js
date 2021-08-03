import React from 'react'

class Followers extends React.Component{
    render(){
        return (
            <div>
                <h4>Inside the Followers</h4>
                <button onClick={this.props.closeModal}>Close</button>
            </div>
        )
    };
};

export default Followers;