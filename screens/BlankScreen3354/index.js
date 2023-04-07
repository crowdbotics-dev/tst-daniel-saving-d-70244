import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "../Untitled1";

const BlankScreen3354 = () => {
  return <View style={_styles.BlankScreen3354}>
      <Text style={styles.FbCwlETk}>Imported Styles</Text>
    <Text style={_styles.EyOnXfVE}>Local Styles</Text></View>;
};

export default BlankScreen3354;

const _styles = StyleSheet.create({
  BlankScreen3354: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  EyOnXfVE: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#0f26ed"
  }
});