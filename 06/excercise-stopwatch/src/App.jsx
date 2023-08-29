import { Card, Text, Box, Button } from "@chakra-ui/react";
import useMinutesCounter from "./hooks/minuteCounter-hooks";
import useSecondCounter from "./hooks/secondCounter-hooks";
import useRunCounter from "./hooks/runCounter-hooks";
import { useEffect, useRef } from "react";

function App() {
  const [minutes, setMinutes] = useMinutesCounter(0);
  const [seconds, setSeconds] = useSecondCounter(0);
  const [isRun, setRunCounter] = useRunCounter(false);
  const timer = useRef(null);

  useEffect(() => {
    if (isRun) {
      let timeout = setTimeout(() => {
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else {
          setSeconds(seconds + 1);
        }
      }, 1000);
      timer.current = timeout;
    }
  }, [seconds, isRun]);

  return (
    <Card
      bg={"black"}
      display={"flex"}
      flexDir={"column"}
      m={"auto"}
      h={"40%"}
      w={"40%"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"2rem"}
    >
      <Text color={"white"} fontSize={"9rem"}>{`${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</Text>
      <Box
        display={"flex"}
        flexDir={"row"}
        width={"80%"}
        justifyContent={"space-evenly"}
      >
        <Button
          bg={"green.500"}
          color={"white"}
          onClick={() => {
            setRunCounter(true);
          }}
        >
          Start
        </Button>
        <Button
          bg={"red.500"}
          color={"white"}
          onClick={() => {
            setRunCounter(false);
            clearTimeout(timer.current);
          }}
        >
          Stop
        </Button>
        <Button
          bg={"yellow.500"}
          color={"white"}
          onClick={() => {
            setRunCounter(false);
            setMinutes(0);
            setSeconds(0);
            clearTimeout(timer.current);
          }}
        >
          Reset
        </Button>
      </Box>
    </Card>
  );
}



export default App;
