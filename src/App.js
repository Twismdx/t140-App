import Overlay from './Overlay';
import { useState, useEffect } from 'react';
import './App.css';
import PlayerIcon from './PlayerIcon';

const API_SCORES = 'https://t140apim.azure-api.net/demoT140LivestreamApi/GetScores?T140EventId=499cd369-8583-4fad-92dc-14b5d48ab445'

function App() {
  const [ scores, setScores ] = useState([]);
  const [ title, settitles ] = useState([]);


  const getScores = async () => {
    const response = await fetch (API_SCORES, {
      "headers": { 
        "Ocp-Apim-Subscription-Key": "npma5a933d50f7b40928d1e0c0612903033"

      }});	
    const data = await response.json();
    
        if 
            (data.t140EventCurrentRound === 1) {							
                setScores(data.liveStreamTables[0].results[0]);
                settitles(data);
        } else if 
            (data.t140EventCurrentRound === 2) {
                setScores(data.liveStreamTables[0].results[1]);
                settitles(data);
        } else if 
            (data.t140EventCurrentRound === 3) {
                setScores(data.liveStreamTables[0].results[2]);
                settitles(data);
        } else if
            (data.t140EventCurrentRound === 4) {
                setScores(data.liveStreamTables[0].results[3]);
                settitles(data);
        } else if 
            (data.t140EventCurrentRound === 5) {
                setScores(data.liveStreamTables[0].results[4]);
                settitles(data);
        } else if 
            (data.t140EventCurrentRound === 6) {
                setScores(data.liveStreamTables[0].results[5]);
                settitles(data);
        } else if 
            (data.t140EventCurrentRound === 7) {
                setScores(data.liveStreamTables[0].results[6])
                settitles(data);
        }
  }  
  
  useEffect(() => {
    getScores();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Overlay
          scores={scores} 
          title={title}
        />
        {
         title?.length > 0
            ? (
              <div className="container">
                {title.map((title) => (
                  <PlayerIcon title={title} />
                ))}
              </div>
              ) : (
                  <div>
                  </div>
                  )
        }  
      </div>
      
    </div>
  )
}

export default App;
