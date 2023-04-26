import { articleCreate } from "../../modules/articles/store/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { OptionsContext } from "@options";

const CreateArticle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(articleCreate({
      fsfs: "fsfs",
      fsfsxx: "fsfsxx"
    }));
  }, []);
  const {
    entities: article
  } = useSelector(state => state.article);
  const navigation = useNavigation();
  const options = useContext(OptionsContext);
  const [localTitle, setLocalTitle] = useState(article.title);
  const [localBody, setLocalBody] = useState(article.body);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.uxjTSOXq}>Title{options.some}</Text>
        <TextInput style={styles.OJhIZYkw} value={localTitle}></TextInput>
        <Text style={styles.SPMGQgmK}>Body</Text>
        <TextInput style={styles.cBJjmzTC} value="a"></TextInput>
        <Text style={styles.pbUIzBKw}>Author</Text>
        <TextInput style={styles.rNTEuKVc}></TextInput>
        <Text style={styles.FbCwlETk}>Image</Text>
        <TextInput style={styles.pJSFSYvC}></TextInput>

        <Pressable onPress={() => {
        navigation.navigate("BlankScreen3354", {
          fs: "fs"
        });
      }}>
          <Text style={styles.guafnFOE}>Save</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

export const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
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
    color: "red",
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
  },
  ywIjYjOK: {
    height: 48,
    width: 333,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "relative",
    left: 12,
    top: 246
  },
  iHYojExH: {
    width: 332,
    height: 48,
    lineHeight: 44,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  guafnFOE: {
    width: 333,
    height: 50,
    lineHeight: 50,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  }
});
export default CreateArticle;