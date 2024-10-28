import React from "react";
import styles from "../styles/components styles/apps";

import { View, Text } from "react-native";
import { Link } from "expo-router";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Apps = (props) => {
  const { name, icon, path } = props;
  return (
    <>
      <View style={styles.appTab}>
        <Link href={`${path}`}>
          <View style={styles.todoApp}>
            <FontAwesomeIcon
              icon={icon}
              size={25}
              color="white"
            ></FontAwesomeIcon>
          </View>
        </Link>
        <Text style={styles.text}>{name}</Text>
      </View>
    </>
  );
};

export default Apps;
