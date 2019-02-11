/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import { Text, View } from "react-native";
import Header from "./src/components/header";

type Props = {};

const App = () => {
  return (
    <View>
      <Header headerText={"Albums"} />
    </View>
  );
};

export default App;
