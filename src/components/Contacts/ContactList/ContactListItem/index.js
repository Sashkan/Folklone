import { Box } from "@chakra-ui/react";
import React from "react";

const ContactListItem = ({ contact }) => {
  return (
    <Box>
      <p>{contact.name}</p>
    </Box>
  );
};

export default ContactListItem;
