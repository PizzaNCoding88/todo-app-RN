import { StyleSheet, View, Text, Pressable } from "react-native";

import { useState } from "react";

import TaskWindowPopUp from "../components/TaskWindowPopUp";

export default function HomeScreen() {
  const [taskWindow, setTaskWindow] = useState(false);

  function openTaskWindow() {
    setTaskWindow(!taskWindow);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksList}>
        <Text>Tasks</Text>
      </View>
      <View style={styles.taskInput}>
        <Pressable style={styles.button} onPress={openTaskWindow}>
          <Text style={styles.addTaskBtn}>Add new task</Text>
        </Pressable>
      </View>
      {taskWindow && <TaskWindowPopUp openTaskWindow={openTaskWindow} />}
    </View>
  );
}

const styles = StyleSheet.create({
  addTaskBtn: {
    color: "black",
    fontWeight: "600",
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: "white",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 30,
    borderWidth: 2,
    borderColor: "gray",
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  taskInput: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  tasksList: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
  },
});
