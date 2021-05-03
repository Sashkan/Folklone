import { Box, Text } from "@chakra-ui/react";
import React from "react";

const GroupListItem = ({ group, selectGroup, selectedGroup }) => {
  if (!group) return null;

  return (
    <Box
      p="5px"
      paddingLeft={group.id === selectedGroup ? "10px" : "5px"}
      color={group.id === selectedGroup ? "black" : "#666"}
      cursor="pointer"
      transition="0.2s"
      _hover={{
        paddingLeft: "10px"
      }}
      onClick={() => selectGroup(group.id)}
    >
      <Text m="0">{group.name}</Text>
    </Box>
  );
};

export default GroupListItem;
