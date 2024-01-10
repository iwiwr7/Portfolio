import './GithubCard.css';
import React from 'react';

const GithubCard = () => {
    return (
        <div className='github'>
            <div className='card-container'>
                <div className='card'>
                    <h3> - "Link to my projects on GitHub." - </h3>
                    <span className='bar'></span>
                    <p className='btc'> CHECK MY GITHUB PROFILE: </p>
                    
                   
                    <a  className='btn' href="https://github.com/iwiwr7"><button type="button" className='btn1'> <p>GitHub Profile</p></button></a>
                
                </div>
            </div>
        </div>
    )
}

export default GithubCard