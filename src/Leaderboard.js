import { useState, useEffect } from 'react';
import './App.css';
import Leaders from './Leaders';

const API_LEADER = './leader.json'

function Leaderboard() {
const [ rankings, setRankings ] = useState([]);

const getLeaderboard = async () => {
    const response = await fetch (`${API_LEADER}`);
    const data = await response.json();

    setRankings(data);
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  return ( 
    <div className="leaderboard">
      <Leaders rankings={rankings} />
    </div>
  )
}

export default Leaderboard;