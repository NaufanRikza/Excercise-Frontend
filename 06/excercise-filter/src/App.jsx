import { Box, Card, Input, Text } from "@chakra-ui/react";
import useFruitList from "./hooks/list-hooks";
import { useEffect } from "react";

function App() {
  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pinaple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ];
  let [fruitList, setFruitList] = useFruitList(fruits);

  useEffect(() => {
    console.log(fruitList);
  }, [fruitList]);

  return (
    <Card
      mx={"auto"}
      h={"65vh"}
      w={"30%"}
      bgGradient={"linear(to-br, orange, red, purple)"}
      p={3}
      mt={4}
    >
      <Box mx={"auto"} display={"flex"} alignItems={"center"}>
        <Text mr={4} fontWeight={"bold"}>
          Search
        </Text>
        <Input
          bg={"white"}
          onChange={(e) => {
            const val = e.target.value.toLowerCase();
            if (val !== "") {
              fruitList = [...fruits];

              fruitList = fruitList.filter((item) => {
                return item.toLowerCase().includes(val);
              });

              setFruitList([...fruitList]);
            } else {
              setFruitList(fruits);
            }
          }}
        />
      </Box>
      <Box>
        {fruitList.map((item, index) => {
          return (
            <Card
              key={index}
              p={2}
              my={3}
              mx={"auto"}
              w={"140px"}
              textAlign={"center"}
            >
              <Text fontWeight={"bold"}>{item}</Text>
            </Card>
          );
        })}
      </Box>
    </Card>
  );
}

export default App;
