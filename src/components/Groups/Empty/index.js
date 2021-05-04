import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Empty = () => {
  return (
    <Box p="10px 0" border="1px solid #ccc" borderRadius="5px">
      <Flex alignItems="center" justifyContent="center">
        <Heading m="0">No contacts</Heading>
      </Flex>
    </Box>
  );
};

export default Empty;
