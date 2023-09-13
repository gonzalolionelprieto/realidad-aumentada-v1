import React from "react";

function Ar() {
  return (
    <div>
      <a-scene>
        <a-assets>
          <a-asset-item 
          id="target-file"
           src="../descarga.zpt" />
        </a-assets>
        <a-entity zappar-image="#target-file">
          <a-box color="red" rotation="0 45 45" scale="1.2 1.2 1.2"></a-box>
        </a-entity>
        
        <a-entity camera zappar-camera="user-facing: true"></a-entity>
      </a-scene>
    </div>
  );
}

export default Ar;
