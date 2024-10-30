import React from "react";
import styles from "../styles/components styles/apps";

import { View, Text } from "react-native";
import { Link } from "expo-router";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Apps = (props) => {
  const { name, icon, path } = props;
  return (
    <>
      <View style={styles.appButtonAndText}>
        <Link href={`${path}`} style={styles.app}>
          <View style={styles.appBtn}>
            <FontAwesomeIcon
              icon={icon}
              size={25}
              color="black"
            ></FontAwesomeIcon>
          </View>
        </Link>
        <Text style={styles.text}>{name}</Text>
      </View>
    </>
  );
};

export default Apps;
