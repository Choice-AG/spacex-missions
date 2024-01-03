import { Heading, Text } from "@chakra-ui/react";
import { LaunchItem } from "../components/LaunchItem";
import { useEffect, useState } from "react";
import * as API from "../services/launches";

export function LaunchesList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then(setLaunches)
      .catch(() => console.log);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <Text fontSize="2xl">Loading...</Text>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </section>
      )}
    </>
  );
}
