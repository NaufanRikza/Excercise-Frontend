import { Box, Heading, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import useTableData from "./hooks/table-hooks";
import useApistate from "./hooks/api-hooks";
import TableRow from "./components/TableRow";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const api = "https://jsonplaceholder.typicode.com/users";
  let [tableData, setTableData] = useTableData([]);
  const [isFetched, setApiState] = useApistate(false);

  const getUser = async () => {
    try {
      const res = await axios.get(api);
      console.log(res);
      setTableData([...res.data]);
    } catch (e) {
      console.log(e.toString());
    }
    setApiState(false);
  };

  useEffect(() => {
    getUser();
  }, [isFetched]);

  return (
    <Box textAlign={"center"} p={6}>
      <Heading>Fetch API From JSON Placeholder</Heading>

      <Table
        variant={"simple"}
        width={"70%"}
        border={"1px solid black"}
        margin={"auto"}
        textAlign={"center"}
        mt={6}
      >
        <Thead>
          <Tr>
            <Th border={"1px solid black"}>ID</Th>
            <Th border={"1px solid black"}>Name</Th>
            <Th border={"1px solid black"}>Usernam</Th>
            <Th border={"1px solid black"}>Email</Th>
            <Th border={"1px solid black"}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((item, index) => {
            return (
              <TableRow
                key={index}
                id={item.id}
                name={item.name}
                userName={item.username}
                email={item.email}
              ></TableRow>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default App;
