import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LaunchTag from "./LaunchTag";
import LaunchDate from "./LaunchDate";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2xl">
          Mission{" "}
          <strong>
            {launch.mission_name} ({launch.launch_year})
          </strong>
        </Text>
        <Spacer />
        <LaunchTag {...launch} />
      </Flex>
      <LaunchDate {...launch} />
      <Link to={`/launch/${launch.flight_number}`}>
        <Button colorScheme="purple">More Details</Button>
      </Link>
    </Box>
  );
}
