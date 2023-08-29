import { useState } from "react";

function useFruitList(val = []) {
  const [fruitList, setValue] = useState(val);

  function setFruitList(val = []) {
    setValue(val);
  }

  return [fruitList, setFruitList];
}

export default useFruitList;
