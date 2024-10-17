import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import React, { Component, useState } from "react";

const TaskWindowPopUp = (props) => {
  const { openTaskWindow } = props;
  return (
    <>
      <View
        style={styles.overlay}
        onStartShouldSetResponder={() => openTaskWindow()}
      ></View>

      <View style={styles.container}>
        <TextInput placeholder="New task here..." style={styles.input} />
      </View>
      <Pressable style={styles.addBtn}>
        <Text>Add</Text>
      </Pressable>
      <Pressable style={styles.closeBtn} onPress={() => openTaskWindow()}>
        <Text>x</Text>
      </Pressable>
    </>
  );
};

export default TaskWindowPopUp;

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 40,
    width: 40,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    position: "absolute",
    bottom: 10,
    right: 30,
  },
  closeBtn: {
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 40,
    width: 40,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    position: "absolute",
    bottom: 70,
    right: 30,
  },
  container: {
    height: "95%",
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#2422228a",
    alignItems: "center",
  },
});
