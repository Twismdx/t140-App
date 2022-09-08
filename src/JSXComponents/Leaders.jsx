import React from 'react';

const Leaders = ({ rankings, title }) => {
    return ( 
        <div className="getLeaderboard"> 
        <h1>{title.t140EventName}LeaderBoard</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Raw Avg</th>
              <th>Target Avg</th>
              <th>Raw Score</th>
              <th>Event Points</th>
            </tr>
          </thead>
              {rankings.map((stats) => {
                return (
                  <tbody>
                    <tr>
                      <td>{stats.position}</td>
                      <td>{stats.givenName} {stats.surname}<span>   ({stats.division})</span></td>
                      <td>{stats.rawScoreAvg.toFixed(2)}</td>
                      <td>{stats.targetAvg.toFixed(2)}</td>
                      <td>{stats.rawScore}</td>
                      <td>{stats.score.toFixed(2)}</td>
                    </tr>
                  </tbody>
                )
                })}
            </table>
            </div>
          )
      }


export default Leaders;