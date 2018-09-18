import React from 'react'
import image from '../img/Woman with Yellow Hair (Femme aux cheveux jaunes), Pablo Picasso - Artsy.net.png'

function Homepage(){
    return(
        <div className='homepage'>
            <p><img src={ image } alt="Woman with Yellow hair by Pablo Picasso"/>
            <br/>All art here has been curated through the <a href="https://www.artsy.net" target="blank">artsy.net</a> API and is subject to copywright.</p>
        </div>
    )
}

export default Homepage;