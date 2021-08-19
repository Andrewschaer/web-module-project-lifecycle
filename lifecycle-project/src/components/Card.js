import React from 'react'
import Modal from 'react-modal'
import Followers from './Followers.js'
import GithubLogo from '../assets/githublogo.png'
import EmailLogo from '../assets/emaillogo.png'
import TwitterLogo from '../assets/twitterlogo.png'

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
        const twitterLink = 'http://twitter.com/'+this.props.user['twitter_username'];
        const emailLink = 'mailto:'+this.props.user['email'];

        return (
            <div className='card-container'>
                <div className='cardHeader-container'>
                    <h3>{this.props.user['login']}</h3>
                    <h3>REPO#{this.props.user['public_repos']}</h3>
                </div>
                <div className='img-container'>
                    <img src={this.props.user['avatar_url']} alt={this.props.user['avatar_url']}></img>
                </div>
                <div className='details-container'>
                    <div className='details-subContainer'>
                        <p>Real Name:</p>
                        <p>{this.props.user['name'] === null ? 'Unknown': this.props.user['name']}</p>
                    </div>
                    <div className='details-subContainer'>
                        <p>Location:</p> 
                        <p>{this.props.user['location'] === null ? 'Unknown': this.props.user['location']}</p>
                    </div>
                    <div className='details-subContainer'>
                        <p>Company:</p> 
                        <p>{this.props.user['company'] === null ? 'Unknown': this.props.user['company']}</p>
                    </div>
                </div>
                <div className='bio-container'>
                    <h4>Bio:</h4>
                    <p>{this.props.user['bio'] === null ? 'Unknown': this.props.user['bio']}</p>
                </div>
                <div className='followers-container' onClick={this.openModal}>
                    <div className='followers-subContainer'>
                        <h4>Followers: </h4>
                        <p>(click for more details)</p>
                    </div>
                    <h4>{this.props.user['followers']}</h4>
                </div>
                <div className='following-container'>
                    <h4>Following:</h4>
                    <h4>{this.props.user['following']}</h4>
                </div>
                <div className='cardFooter-container'>
                    <div className='cardFooter-subContainer'>  
                        <img src={GithubLogo} alt='github logo'></img>
                        <a href={this.props.user['html_url']} target='_blank' rel='noreferrer'>{this.props.user['login']}</a>
                    </div> 
                    <div className='cardFooter-subContainer'>
                        <img src={TwitterLogo} alt='twitter logo'></img>
                        {this.props.user['twitter_username'] === null ? <p>Unknown</p> : <a href={twitterLink} target='_blank' rel='noreferrer'>{this.props.user['twitter_username']}</a>}
                    </div>
                    <div className='cardFooter-subContainer'>
                        <img src={EmailLogo} alt='email logo'></img>
                        {this.props.user['email'] === null ? <p>Unknown</p> : <a href={emailLink} target='_blank' rel='noreferrer'>{this.props.user['email']}</a>}
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                >
                    <Followers closeModal={this.closeModal} user={this.props.user}/>
                </Modal>
            </div>
        )
    };
};

export default Card;