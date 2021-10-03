import React from 'react';

function Photo({photo, height, width}) {
  return (
      <div style={{backgroundColor: "#eee"}}>
          <img style={{height: "600px", display: "flex", margin: "auto", padding: "20px"}} src={photo} alt="img of the day" />
      </div>
  );
}

export default Photo;