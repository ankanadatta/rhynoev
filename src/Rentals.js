import React from 'react'

const Rentals = () => {
    let headStyle = {
        color: "#F2F2F2",
        "margin-top": "70px",
        "text-align": "center",
        "text-shadow": "5px 1px 5px #131313"
    }
    let Style = {
        margin: "auto",
        width: "90%",
        "text-align": "center",
        color: "#F2F2F2",
        "text-shadow": "1px 1px 5px #131313"
    }
    return (
        <div>
            <h1 className='lato-regular' style={headStyle}>Rentals</h1>
            <p className='lato-regular' style={Style}><br />Explore the roars of Rhyno at your own pace with our
                rental options! Test the waters with our flexible rental model, available for a week or a month,
                allowing you to experience the Rhyno first hand before committing. Simply visit our authorized
                dealerships to unlock this opportunity.<br /><br />
                Additionally, we're redefining campus commuting with our rental fleet tailored for
                college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an
                hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.<br /><br />
                Download our rental app :<br/><br/>
                <button type="button" className='lato-regular btn btn-dark'><i class="bi bi-android"></i> Android</button>
                <button type="button" className='lato-regular btn btn-dark'><i class="bi bi-apple"></i> Apple</button>
            </p>
        </div>
    )
}

export default Rentals
