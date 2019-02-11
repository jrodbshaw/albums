import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 25,
    shadowColor: "#000",
    shadowOffSet: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
