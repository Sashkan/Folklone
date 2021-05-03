import { Box } from "@chakra-ui/react";
import React from "react";
import ContactList from "./ContactList";
import ContactCreator from "./ContactCreator";

const Contacts = ({ contacts }) => {
  return (
    <Box p="3" bg="red.400" flax="1">
      <ContactList contacts={contacts} />
      <ContactCreator />
    </Box>
  );
};

export default Contacts;
