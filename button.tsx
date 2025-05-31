import React, { useState } from "react";
import { createBridgeComponent } from "@module-federation/bridge-react";

function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  );
}
export default createBridgeComponent({
  rootComponent: Button,
});
