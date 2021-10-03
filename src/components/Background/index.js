import React from 'react';

function Background({photo}) {
  return (
      <div style={{height: "100vh", width: "100vw"}}>
          <div style={{ backgroundImage:`url(${photo})` }} />
      </div>
  );
}

export default Background;