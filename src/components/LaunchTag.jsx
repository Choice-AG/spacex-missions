import {
  Tag,
} from "@chakra-ui/react";

export default function LaunchTag(launch) {
  return (
    <>
      <Tag
        p={2}
        colorScheme={launch.launch_success ? "green" : "red"}
      >
        {launch.launch_success ? "Success" : "Failure"}
      </Tag>
    </>
  );
}
