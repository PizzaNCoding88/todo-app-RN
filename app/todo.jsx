import { View, Text, Pressable, TextInput, Alert } from "react-native";

import styles from "../styles/todo";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import Task from "../components/Task";
import DeletedTask from "../components/DeletedTask";

import { Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
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
    Alert.alert("Would you like to restore or delete the task forever?", "", [
      {
        text: "Restore",
        onPress: () => {
          restoreTask(index);
        },
      },
      {
        text: "Delete",
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

  function restoreTask(i) {
    let taskToRestore = deletedList.splice(i, 1);
    let taskListCopy = [...taskList];
    taskListCopy.push(taskToRestore);
    setTaskList(taskListCopy);
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
                  <Task task={task} />
                </TouchableOpacity>
              ))}
            </View>

            {deletedList.length > 0 && (
              <View style={styles.tasksList}>
                <Text style={styles.title}>Deleted Tasks</Text>
                {deletedList.map((deleted, i) => (
                  <TouchableOpacity key={i} onPress={() => createAlert(i)}>
                    <DeletedTask task={deleted} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
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
