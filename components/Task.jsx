import React from "react";
import { Text, StyleSheet } from "react-native";
<<<<<<< HEAD
import styles from "../styles/components styles/task";
=======
>>>>>>> 33b20e7a9023016d2bc860235de2a6211348aa66

const Task = (props) => {
  const { task } = props;
  return <Text style={styles.task}>{task}</Text>;
};

export default Task;
<<<<<<< HEAD
=======

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
>>>>>>> 33b20e7a9023016d2bc860235de2a6211348aa66
