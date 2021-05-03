import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { CREATE_GROUP } from "../../../store/actions";

const GroupCreator = ({ groups }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const createGroup = () => {
    dispatch({
      type: CREATE_GROUP,
      payload: {
        name: name,
        id: Math.random().toString(36).substring(7)
      }
    });
    onClose();
    setName("");
  };

  return (
    <>
      <Button onClick={onOpen}>+</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e) => setName(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => createGroup()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupCreator;
