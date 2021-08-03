import React from 'react'
import Card from './Card.js'

class CardsContainer extends React.Component{
    render(){
        return (
            <div>
                <h2>Inside the Cards Container</h2>
                {this.props.userData.map(user => (
                    <Card key={user.id} user={user}/>
                ))}
                
            </div>
        )
    };
};

export default CardsContainer;