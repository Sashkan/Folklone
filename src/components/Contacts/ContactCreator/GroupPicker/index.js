import { Select } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const GroupPicker = ({ setGroup }) => {
  const groups = useSelector((state) => state.groups.groups);
  const selectedGroup = useSelector((state) => state.groups.selected);

  return (
    <Select
      placeholder="Select option"
      onChange={(e) => setGroup(e.target.value)}
      defaultValue={selectedGroup}
    >
      {groups.map((group) => {
        return <option value={group.id}>{group.name}</option>;
      })}
    </Select>
  );
};

export default GroupPicker;
