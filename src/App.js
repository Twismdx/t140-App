import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [eventId, setEventId] = useState([]);
	const [scores, setScores] = usestate([]);
	const [title, settitles] = usestate([]);
	
	useEffect(() => {
		var urlPrefix =
			'https://nwkbqoiyrkiyklonvezv.supabase.co/rest/v1/livestream';
		var url = urlPrefix;

		axios({
			url: url,
			headers: {
				apikey:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53a2Jxb2l5cmtpeWtsb252ZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE5OTk5ODAsImV4cCI6MTk3NzU3NTk4MH0.cNsf3ZcAMPE3N8aWFjcckNHeqyUGuhjOvd0Q_w8-fow',
			},
			type: 'GET',
			dataType: 'json',
		}).then((response) => {
			setEventId(response.data[0].t140EventId);
		});
		
		}, [eventId]);
	
	useEffect(() => {
		
		var params = eventId;
		var urlPrefix2 =
			'https://t140apim.azure-api.net/demoT140LivestreamApi/GetScores?T140EventId=';
		var url2 = urlPrefix2 + encodeURIComponent(params);

		axios({
			url: url2,
			headers: {
				'Ocp-Apim-Subscription-Key': 'a5a933d50f7b40928d1e0c0612903033',
			},
			type: 'GET',
			dataType: 'json',
		}).then((response) => {
			if (data.t140EventCurrentRound === 1) {
				setScores(data.liveStreamTables[0].results[0]);
				settitles(data);
			} else if (data.t140EventCurrentRound === 2) {
				setScores(data.liveStreamTables[0].results[1]);
				settitles(data);
			} else if (data.t140EventCurrentRound === 3) {
				setScores(data.liveStreamTables[0].results[2]);
				settitles(data);
			} else if (data.t140EventCurrentRound === 4) {
				setScores(data.liveStreamTables[0].results[3]);
				settitles(data);
			} else if (data.t140EventCurrentRound === 5) {
				setScores(data.liveStreamTables[0].results[4]);
				settitles(data);
			} else if (data.t140EventCurrentRound === 6) {
				setScores(data.liveStreamTables[0].results[5]);
				settitles(data);
			} else if (data.t140EventCurrentRound === 7) {
				setScores(data.liveStreamTables[0].results[6]);
				settitles(data);
			}
		});
	}, [scores, title]);

	return (
		<div className='App'>
			<div className='container'>
				<Overlay scores={scores} title={title} />
				{title?.length > 0 ? (
					<div className='container'>
						{title.map((title) => (
							<PlayerIcon title={title} />
						))}
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}

export default App;
