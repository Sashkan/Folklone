import { Box } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_GROUP } from "../../../store/actions";
import GroupListItem from "./GroupListItem";

const GroupList = ({ groups }) => {
  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.groups.selected);

  const selectGroup = (id) => {
    dispatch({
      type: SELECT_GROUP,
      payload: id
    });
  };

  return (
    <Box>
      {groups.map((group) => (
        <GroupListItem
          group={group}
          selectGroup={selectGroup}
          selectedGroup={selectedGroup}
        />
      ))}
    </Box>
  );
};

export default GroupList;
