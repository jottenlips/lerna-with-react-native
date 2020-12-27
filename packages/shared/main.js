import React from "react";
import { View } from "react-native";

module.exports = {
  getVersion: () => {
    return "1.0";
  },
  SharedComp: (props) => (
    <View
      {...props}
      style={{
        backgroundColor: "#005500",
      }}
    />
  ),
};
