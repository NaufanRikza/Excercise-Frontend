import { useState } from "react";

function useRunCounter(val = 0) {
  const [isRun, setVal] = useState(val);

  function setRunCounter(val = 0) {
    setVal(val);
  }

  return [isRun, setRunCounter];
}

export default useRunCounter;
