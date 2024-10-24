import { View, Text, Pressable, TextInput, Alert } from "react-native";

import styles from "../styles/todo";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import Task from "../components/Task";
import { Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }

  // function createAlert(index) {
  //   Alert.alert("Are you sure you want to delete the current task?", "", [
  //     { text: "No", onPress: () => {} },
  //     {
  //       text: "Yes",
  //       onPress: () => completeTask(index),
  //     },
  //   ]);
  // }

  function completeTask(i) {
    let taskListCopy = [...taskList];
    taskListCopy.splice(i, 1);
    setTaskList(taskListCopy);
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Active Tasks</Text>
          <Link href="/deletedTasks">
            <FontAwesomeIcon icon={faTrashCan} style={styles.icon} size={25} />
          </Link>
        </View>
        <View style={styles.container}>
          <View style={styles.tasksContainer}>
            {taskList.map((task, i) => (
              <TouchableOpacity key={i} onPress={() => completeTask(i)}>
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
