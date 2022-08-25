import React from 'react';

const Leaders = ({ rankings }) => {
    return (
        <iframe title="Leaderboard" sandbox='allow-scripts, allow-same-origin'>
        <div className="getLeaderboard"> 
        <h1>T140 Leaderboard</h1>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Raw Avg</th>
            <th>Target Avg</th>
            <th>Raw Score</th>
            <th>Event Points</th>
          </tr>
              {rankings.map((rankings, index) => {
                return (
                <tr>
                <td>{index+1}</td>
                <td>{rankings.givenName} {rankings.surname}<span>   ({rankings.division})</span></td>
                <td>{rankings.rawScoreAvg.toFixed(2)}</td>
                <td>{rankings.targetAvg.toFixed(2)}</td>
                <td>{rankings.rawScore}</td>
                <td>{rankings.score.toFixed(2)}</td>
            </tr>
                )
                })}
            </table>
            </div>
            </iframe>
          )
      }


export default Leaders;