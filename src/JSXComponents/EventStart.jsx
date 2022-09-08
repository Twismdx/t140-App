import React from 'react';
import Leaderboard from '../Components/Leaderboard';

function Start({ title }) {
    

    return ( 
        <div className="Start">
            <h1>{title.t140EventName}</h1>
            <h2>Event Starting Shortly...</h2>
            <Leaderboard />
        </div>
    )
}

export default Start;