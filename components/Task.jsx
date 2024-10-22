import React from "react";
import { Text, StyleSheet } from "react-native";

const Task = (props) => {
  const { task } = props;
  return <Text style={styles.task}>{task}</Text>;
};

export default Task;

const styles = StyleSheet.create({
  task: {
    color: "black",
    backgroundColor: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(255,255,255,0.25)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 15,
  },
});
