import React from 'react'

function Homepage(){
    return(
        <div className='homepage'>
            <h3>Tribute to Art</h3>
            <p>Press the Gallary link above to get to our collection and then use the arrow buttons to navigate through the art pieces. <br/>Press 'Home' link above to return here. </p>
            {/* <p>To browse by artist, click the 'Artist' link above.</p> */}
            <p><br/>All art here has been curated through the <a href="https://www.artsy.net" target="blank">artsy.net</a> API and is subject to copywright.</p>
            
        </div>
    )
}

export default Homepage;