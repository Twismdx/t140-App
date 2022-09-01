import React from 'react';
import Leaderboard from '../Components/Leaderboard';
import '../App.css';

const Pause = ({ title }) => {
    return ( 
        <div className="pause">
            <div>
                <h1>{title.t140EventName} Leaderboard</h1>
                <Leaderboard />
            </div>
        </div>
    )
}

export default Pause;