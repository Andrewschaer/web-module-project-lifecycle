import React from 'react'
import Card from './Card.js'

class CardsContainer extends React.Component{
    render(){
        return (
            <div className='cards-container'>
                {this.props.userData.map(user => (
                    <Card key={user.id} user={user}/>
                ))}   
            </div>
        )
    };
};

export default CardsContainer;