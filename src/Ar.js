import React from "react";

function Ar() {
  return (
    <div>
      <a-scene>
        <a-assets>
          <a-asset-item 
          id="target-file"
           src="https://cdn.glitch.global/f10276b0-f2eb-4cc5-ae61-86afbaa05b4e/descarga.zpt?v=1694571895016" />
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
