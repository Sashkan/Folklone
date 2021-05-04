export const handleKeyPress = (event, open) => {
  if (!open && event.key === "g") {
    dispatch({
      type: OPEN_GROUP
    });
    document.removeEventListener("keydown");
  }
};
