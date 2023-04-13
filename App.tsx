/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Text, View } from "react-native";
import AppContainer from "./src/components/app.container";
import MainScreen from "./src/screens/main";

function App(): JSX.Element {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
}

export default App;
