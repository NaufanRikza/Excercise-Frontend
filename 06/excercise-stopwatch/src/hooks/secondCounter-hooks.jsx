import { useState } from "react";

function useSecondCounter(val = 0) {
  const [seconds, setVal] = useState(val);

  function setSeconds(val = 0) {
    setVal(val);
  }

  return [seconds, setSeconds];
}

export default useSecondCounter;
