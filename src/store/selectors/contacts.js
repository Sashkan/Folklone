export const getFilteredContacts = (state) => {
  let filtered = state.contacts.contacts;

  if (state.contacts.filter) {
    filtered = filtered.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(state.contacts.filter.toLowerCase());
    });
  }

  if (state.groups.selected) {
    filtered = filtered.filter((contact) => {
      return contact.group === state.groups.selected;
    });
  }

  return filtered;
};

export const getSelectedContact = (state) => {
  if (state.contacts.selected) {
    return state.contacts.contacts.find(
      (contact) => contact.id === state.contacts.selected
    );
  }
};
