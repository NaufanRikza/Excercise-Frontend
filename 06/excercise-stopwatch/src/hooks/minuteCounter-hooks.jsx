import { useState } from "react";

function useMinutesCounter(val = 0) {
  const [minutes, setVal] = useState(val);

  function setMinutes(val = 0) {
    setVal(val);
  }

  return [minutes, setMinutes];
}

export default useMinutesCounter;
