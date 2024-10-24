import { View } from "react-native";
import styles from "../styles/index";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

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
