import React from "react";
import { Text, StyleSheet } from "react-native";
import styles from "../styles/components styles/deletedTask";

const DeletedTask = (props) => {
  const { task } = props;
  return <Text style={styles.task}>{task}</Text>;
};

export default DeletedTask;
