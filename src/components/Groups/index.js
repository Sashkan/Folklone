import { Box } from "@chakra-ui/react";
import React from "react";
import GroupList from "./GroupList";
import GroupCreator from "./GroupCreator";

const Groups = ({ groups }) => {
  return (
    <Box p="3" bg="red.400" flax="1">
      <GroupCreator />
      <GroupList groups={groups} />
    </Box>
  );
};

export default Groups;
