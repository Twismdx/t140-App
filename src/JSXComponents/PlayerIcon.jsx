import React from 'react';

const PlayerIcon = ({ title }) => {
    return (
    <div className="PlayerIcon">
        <div>
            <img src={title.p1Img !== 'N/A' ? title.p1Img : document.getElementById("p1Img").style.display = "none"} alt={title.p1Img}/>
        </div>
    </div>
    )
  }

  export default PlayerIcon;