import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.uxjTSOXq}>Title</Text><TextInput style={styles.OJhIZYkw}></TextInput><Text style={styles.SPMGQgmK}>Body</Text><TextInput style={styles.cBJjmzTC}></TextInput><Text style={styles.pbUIzBKw}>Author</Text><TextInput style={styles.rNTEuKVc}></TextInput><Text style={styles.FbCwlETk}>Image</Text><TextInput style={styles.pJSFSYvC}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  cBwwWQWL: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  uxjTSOXq: {
    width: 100,
    height: 22,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  OJhIZYkw: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 331,
    height: 30
  },
  SPMGQgmK: {
    width: 100,
    height: 25,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  cBJjmzTC: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 331,
    height: 30
  },
  pbUIzBKw: {
    width: 100,
    height: 25,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  rNTEuKVc: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 333,
    height: 30
  },
  FbCwlETk: {
    width: 100,
    height: 25,
    lineHeight: 20,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "left"
  },
  pJSFSYvC: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 334,
    height: 30
  }
});
export default Untitled1;