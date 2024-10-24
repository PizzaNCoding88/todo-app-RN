import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/deletedTask";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const DeletedTasks = () => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>
          <View>
            <Link href="/">
              <FontAwesomeIcon
                icon={faHouse}
                size={25}
                style={{ color: "white" }}
              />
            </Link>
          </View>

          <View>
            <Text style={styles.text}> Your Deleted Tasks</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeletedTasks;
