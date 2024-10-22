import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
} from "react-native";

import { useState } from "react";

import Task from "../components/Task";
import { Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }

  function createAlert(index) {
    Alert.alert("Are you sure you want to delete the current task?", "", [
      { text: "No", onPress: () => {} },
      {
        text: "Yes",
        onPress: () => completeTask(index),
      },
    ]);
  }
  function completeTask(i) {
    let taskListCopy = [...taskList];
    taskListCopy.splice(i, 1);
    setTaskList(taskListCopy);
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Your Tasks</Text>
        <View style={styles.container}>
          <View style={styles.tasksContainer}>
            {taskList.map((task, i) => (
              <TouchableOpacity key={i} onPress={() => createAlert(i)}>
                <Task style={styles.text} task={task} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.taskInput}>
            <TextInput
              placeholder="New Task..."
              style={styles.input}
              onChangeText={(text) => setTask(text)}
              value={task}
            />
            <Pressable style={styles.button} onPress={addTask}>
              <Text style={styles.addTaskBtn}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addTaskBtn: {
    color: "black",
    fontWeight: "600",
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
  },

  input: {
    backgroundColor: "white",
    height: 40,
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    gap: 10,
  },
  taskInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    gap: 20,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
});
