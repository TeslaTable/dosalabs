import React from 'react'

export default function index() {
    return (
        <div>
            <div className='menusContainer'>
                <div className='menuTitleContainer'>
                    <span className='menuTitle'>FIND US AT</span>
                </div>
            </div>
            <div className='locationContainer'>
                <div className='mapContainer'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.445033721833!2d-97.72852578543367!3d30.395113008877583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc768d66a8b1%3A0xbcbd71923388f7cd!2sLone%20Star%20Court!5e0!3m2!1sen!2s!4v1667721274064!5m2!1sen!2s"
                        width="600"
                        height="300"
                        style={{ border: 0, borderRadius: 30 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='locationMetaDataContainer'>
                    <div className='addressContainer'>
                        <img src={require("../../assets/location.png")} alt="" className='locationIcon' />
                        <p className='address'>Lone Star Court - 10901 Domain Dr,
                            Austin, TX 78758</p>
                    </div>
                    <div className='timingContainer'>
                        <img src={require("../../assets/timing.png")} alt="" className='timingIcon' />
                        <div>
                            <p className='timignHeading'>Opening Time</p>
                            <p className='timing'>Monday to Saturday</p>
                            <p className='timing'>11:00 AM to 2:00 AM</p>
                            <p className='timing'>5:00 PM to 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
