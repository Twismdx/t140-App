import Overlay from './Overlay';
import React, { useState, useEffect } from 'react';
import '../App.css';
import PlayerIcon from '../JSXComponents/PlayerIcon';
import $ from 'jquery';

function Scoreboard({ eventId }) {

  const [ scores, setScores ] = useState([]);

  const [ title, settitles ] = useState([]);

  useEffect(() => { 

  var params = (eventId);
  var urlPrefix = "https://t140apim.azure-api.net/demoT140LivestreamApi/GetScores?T140EventId=";
  var url = urlPrefix + encodeURIComponent(params)

  $.ajax({
    url: url,
    data: {
      "Ocp-Apim-Subscription-Key": "a5a933d50f7b40928d1e0c0612903033"
    },
    type: "GET",
    dataType: "json",
  })
  .then(response => response.json())
  .then(
    (data) => {   
  
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
      })
  
  }, [])

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

export default Scoreboard;
