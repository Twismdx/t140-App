import React, {useState, useEffect} from 'react';
import Scoreboard from './Components/Scoreboard';

const App = () => {
        
    const [ eventId, setEventId ] = useState([]);
    
    var myHeaders = new Headers();
        myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53a2Jxb2l5cmtpeWtsb252ZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5OTk5ODAsImV4cCI6MTk3NzU3NTk4MH0.cNsf3ZcAMPE3N8aWFjcckNHeqyUGuhjOvd0Q_w8-fow");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    
    async function getEventId() {
        await fetch("https://nwkbqoiyrkiyklonvezv.supabase.co/rest/v1/livestream", requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response[0].t140EventId);
            setEventId(response[0].t140EventId);
        });   
    }   
        console.log(eventId);
        
    useEffect(() => {
      getEventId();
    }, []);
  
    return (
        <div className="App">
            <Scoreboard eventId={eventId}/>
        </div>
    )
}
  
  export default App;