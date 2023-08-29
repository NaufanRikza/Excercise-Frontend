import { useState } from "react";

function useApistate(val) {
  const [isFetched, setValue] = useState(val);

  function setApiState(val) {
    setValue(val);
  }

  return [isFetched, setApiState];
}

export default useApistate;
