import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import "milligram";
import store from "./store";
import GroupsContainer from "./containers/Groups";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import ContactsContainer from "./containers/Contacts";
import Header from "./layout/Header";

// import store from store/index.js
const App = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Header />
        <Flex className="App">
          <GroupsContainer />
          <ContactsContainer />
        </Flex>
      </Provider>
    </ChakraProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
