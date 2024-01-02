import { HiCalendar } from "react-icons/hi";
import {
  Flex,
  Text,
  Icon
} from "@chakra-ui/react";
import dayjs from "dayjs";

export default function LaunchDate(launch) {
  return (
    <>
      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" ml={1} color="gray.500">
          {dayjs(launch.launch_date_local)
            .locale("es")
            .format("D MMMM, YYYY")}
        </Text>
      </Flex>
    </>
  );
}
