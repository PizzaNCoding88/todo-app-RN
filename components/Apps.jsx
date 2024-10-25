import React from "react";
import styles from "../styles/components styles/apps";

import { View, Text } from "react-native";
import { Link } from "expo-router";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Apps = (props) => {
  const { name, icon } = props;
  return (
    <>
      <View>
        <View style={styles.todoApp}>
          <Link href="/todo">
            <FontAwesomeIcon
              icon={icon}
              size={25}
              color="white"
            ></FontAwesomeIcon>
          </Link>
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </>
  );
};

export default Apps;
