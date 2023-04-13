import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../../theme";
type props = {
  children: React.ReactNode;
};

export default function AppContainer(props: props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
}
