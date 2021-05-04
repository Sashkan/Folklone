import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { FILTER_CONTACT } from "../../store/actions";

const Header = () => {
  const dispatch = useDispatch();

  const filterContacts = (filter) => {
    dispatch({
      type: FILTER_CONTACT,
      payload: filter
    });
  };

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" p="3">
        <Box>
          <Heading m="0">Folk</Heading>
        </Box>
        <Box>
          <InputGroup>
            <Input
              paddingLeft="10px"
              type="tel"
              placeholder="Find user..."
              m="0"
              onChange={(e) => filterContacts(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
