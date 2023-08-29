import { useState } from "react";

function useTableData(val = []) {
  const [tableData, setValue] = useState(val);

  function setTableData(val = []) {
    setValue(val);
  }

  return [tableData, setTableData];
}

export default useTableData;
