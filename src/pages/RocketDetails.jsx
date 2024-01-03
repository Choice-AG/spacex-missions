import { Box, Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from "../services/launches";

export function RocketDetails() {
  const [rocket, setTocket] = useState({});
  const { rocketId } = useParams();

  useEffect(() => {
    API.getLaunchesByRocketId(rocketId)
      .then(setTocket)
      .catch(console.log);
  }, [rocketId]);

  return (
    <>
      <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        {!rocket ? (
          <Text fontSize="2xl">Loading...</Text>
        ) : (
          <>
            <Flex display="flex">
              <Text fontSize="2xl">
                Rocket <strong>{rocket.rocket_name}</strong>
              </Text>
            </Flex>
            <Box mt={2}>
              <b>First Flight: </b>
              {rocket.first_flight}
            </Box>
            <Box mt={2}>
              <b>Country: </b>
              {rocket.country}
            </Box>
            <Box mt={2}>
              <b>Company: </b>
              {rocket.company}
            </Box>
            <Box mt={2}>
              <b>Cost per launch: </b>
              {rocket.cost_per_launch}
            </Box>
            <Box mt={2}>
              <b>Description: </b>
              {rocket.description}
            </Box>
            <Box mt={2}>
              <b>Height: </b>
              {rocket.height?.meters} m
            </Box>
            <Box mt={2}>
              <b>Diameter: </b>
              {rocket.diameter?.meters} m
            </Box>
            <Box mt={2}>
              <b>Mass: </b>
              {rocket.mass?.kg} kg
            </Box>
            <Box mt={2}>
              {rocket.success_rate_pct < 50 ? (
                <Text color="red.500"><b>Success rate: </b>{rocket.success_rate_pct}%</Text>
              ) : (
                <Text color="green.500"><b>Success rate: </b>{rocket.success_rate_pct}%</Text>
              )}
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
