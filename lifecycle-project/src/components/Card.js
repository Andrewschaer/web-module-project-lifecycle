import React from 'react'
import Modal from 'react-modal'
import Followers from './Followers.js'

Modal.setAppElement("#root")

class Card extends React.Component{
    state = {
        isModalOpen: false
    }

    openModal = ()=> {
        this.setState({
            isModalOpen: true
        })
    };

    closeModal = ()=> {
        this.setState({
            isModalOpen: false
        })
    };

    
    
    render(){
        return (
            <div>
                <h3>Inside the Card</h3>
                <h3>{this.props.user['login']}</h3>
                <h3>REPO#{this.props.user['public_repos']}</h3>
                <img src={this.props.user['avatar_url']} alt={this.props.user['avatar_url']}></img>
                <h5>Real Name:{this.props.user['name']}</h5>
                <h5>Location:{this.props.user['location']}</h5>
                <h5>Company:{this.props.user['company']}</h5>
                <h4>Bio:</h4>
                <p>{this.props.user['bio']}</p>
                <div onClick={this.openModal}>
                    <h4>Followers</h4>
                    <h4>{this.props.user['followers']}</h4>
                </div>
                <h4>Following</h4>
                <h4>{this.props.user['following']}</h4>
                <img src='https://p.kindpng.com/picc/s/128-1280192_github-logo-png-github-png-transparent-png.png' alt='github logo'></img>
                <a href={this.props.user['html_url']}>{this.props.user['login']}</a>
                <img src='https://hondacitycredit.com/wp-content/uploads/2016/11/twitter-button-logo-trans.png' alt='twitter logo'></img>
                <a href={this.props.user['twitter_username']}>{this.props.user['twitter_username']}</a>
                <img src='https://www.pngfind.com/pngs/m/418-4184107_email-black-button-png-transparent-png.png' alt='email logo'></img>
                <a href={this.props.user['email']}>{this.props.user['email']}</a>
                
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                >
                    <Followers closeModal={this.closeModal}/>
                </Modal>
            </div>
        )
    };
};

export default Card;