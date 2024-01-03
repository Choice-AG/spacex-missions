import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import * as API from "../services/launches";
import LaunchTag from "../components/LaunchTag";

export function LaunchDetail() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then(setLaunch)
      .catch(console.log);
  }, [launchId]);

  return (
    <>
      <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        {!launch ? (
          <Text fontSize="2xl">Loading...</Text>
        ) : (
          <>
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
            <Box mt={2}>
              Rocket {" "}
              <Link color="teal.500" to={`/rockets/${launch.rocket?.rocket_id}`}>
                <b>{launch.rocket?.rocket_name}</b>
              </Link>{" "}
              type <b>{launch.rocket?.rocket_type}</b>
            </Box>
            <Box mt={2}>
              Launched from{" "}
              <b>{launch.launch_site?.site_name_long}</b>
            </Box>
            <Box
              color={launch.launch_success ? "green.600" : "red.600"}
              mt={2}
              fontSize="sm"
            >
              <i>
                <b>{launch.details}</b>
              </i>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
