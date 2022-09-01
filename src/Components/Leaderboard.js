import { useState, useEffect } from 'react';
import '../App.css';
import Leaders from '../JSX Components/Leaders';
import title from './Scoreboard';

const API_LEADER = './leader.json'

function Leaderboard() {
const [ rankings, setRankings ] = useState([]);

var myHeaders = new Headers();
myHeaders.append("Ocp-Apim-Subscription-Key", "a5a933d50f7b40928d1e0c0612903033");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const getLeaderboard = async () => {
const response = await fetch("https://t140apim.azure-api.net/demoT140LivestreamApi/GetLeaderboard?T140EventId=499cd369-8583-4fad-92dc-14b5d48ab445", requestOptions)
const data = await response.json();

    setRankings(data);
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  return ( 
    <div className="leaderboard">
      <Leaders rankings={rankings} title={title} />
    </div>
  )
}

export default Leaderboard;