import { StyleSheet, View, Text, Alert } from "react-native";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

import { Keyboard } from "react-native";
import { Icon } from "@rneui/themed";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.appsContainer}>
          <View style={styles.todoApp}>
            <Link href="/todo">
              <FontAwesomeIcon
                icon={faListCheck}
                size={25}
                color="white"
              ></FontAwesomeIcon>
            </Link>
          </View>
          <View style={styles.converter}></View>
          {/* <Link href="/todo">
            <Text style={styles.text}>Task List</Text>
          </Link> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appsContainer: {
    flex: 1,
    widht: "80%",
  },
  main: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoApp: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
