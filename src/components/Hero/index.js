import React from 'react'

export default function index() {
    return (
        <div className='heroContainer'>
            <div className='heroContainerLeft'>
                <h2 className='firstHeading'>Texas Born </h2>
                <h2 className='secondHeading'>Indian Inspired!</h2>
                <p className='heroContent'>Feel the joy of mouthwatering food from south India. Once you try it you will love it.</p>
                <button className='heroCta'>Explore More</button>
            </div>
            <div className='heroContainerRight'>
                <img src={require("../../assets/heroImage.png")} className="heroImage" />
            </div>
        </div>
    )
}
