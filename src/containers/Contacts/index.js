import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Contacts from "../../components/Contacts";

const ContactsContainer = () => {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <Box flex="4">
      <Contacts contacts={contacts} />
    </Box>
  );
};

export default ContactsContainer;
