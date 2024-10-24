import React from "react";
import { Text, StyleSheet } from "react-native";
import styles from "../styles/components styles/task";

const Task = (props) => {
  const { task } = props;
  return <Text style={styles.task}>{task}</Text>;
};

export default Task;
