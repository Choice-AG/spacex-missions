import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
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
          <LaunchDate {...launch} />
        </Text>
        <Spacer />
        <LaunchTag {...launch} />
      </Flex>
      <Button colorScheme="purple">More Details</Button>
    </Box>
  );
}
