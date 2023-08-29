import { Box, Td, Text, Tr } from "@chakra-ui/react";
import PropTypes from "prop-types";

function TableRow(props) {
  return (
    <Tr border={"1px solid black"}>
      <Td border={"1px solid black"}>{props.id}</Td>
      <Td border={"1px solid black"}>{props.name}</Td>
      <Td border={"1px solid black"}>{props.userName}</Td>
      <Td border={"1px solid black"}>{props.email}</Td>
      <Td border={"1px solid black"}>
        <Box display={"flex"}>
          <Text mr={2} color={"black"}>Edit</Text>
          <Text color={"black"}>Delete</Text>
        </Box>
      </Td>
    </Tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.number,
  userName: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

export default TableRow;
