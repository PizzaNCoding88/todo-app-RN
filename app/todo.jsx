import { View, Text, Pressable, TextInput, Alert } from "react-native";

import styles from "../styles/todo";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import Task from "../components/Task";
import { Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);

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
        onPress: () => deleteTask(index),
      },
    ]);
  }

  function completeTask(i) {
    let taskListCopy = [...taskList];
    let deletedTaskListCopy = [...deletedList];
    let deletedTask = taskListCopy.splice(i, 1);
    deletedTaskListCopy.push(deletedTask);
    setDeletedList(deletedTaskListCopy);
    setTaskList(taskListCopy);
  }

  function deleteTask(i) {
    let deletedListCopy = [...deletedList];
    deletedListCopy.splice(i, 1);
    setDeletedList(deletedListCopy);
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Link href="/deletedTasks">
            <FontAwesomeIcon icon={faList} style={styles.icon} size={25} />
          </Link>
          <Text style={styles.title}>Your Active Tasks</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.tasksContainer}>
            <View style={styles.tasksList}>
              {taskList.map((task, i) => (
                <TouchableOpacity key={i} onPress={() => completeTask(i)}>
                  <Task style={styles.text} task={task} />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.tasksList}>
              <Text style={styles.title}>Deleted Tasks</Text>
              {deletedList.map((deleted, i) => (
                <TouchableOpacity key={i} onPress={() => createAlert(i)}>
                  <Task style={styles.text} task={deleted} />
                </TouchableOpacity>
              ))}
            </View>
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
