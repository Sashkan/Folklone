import { Box } from "@chakra-ui/react";
import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <Box>
      {contacts.map((contact) => (
        <ContactListItem />
      ))}
    </Box>
  );
};

export default ContactList;
