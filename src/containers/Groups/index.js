import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Groups from "../../components/Groups";

const GroupsContainer = () => {
  const groups = useSelector((state) => state.groups.groups);

  return (
    <Box flex="1">
      <Groups groups={groups} />
    </Box>
  );
};

export default GroupsContainer;
