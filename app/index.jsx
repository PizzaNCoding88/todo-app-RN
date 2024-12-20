import { View, Text } from "react-native";
import styles from "../styles/index";

import Apps from "../components/Apps";

import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";

export default function HomeScreen() {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text}>Multitools App</Text>
        <View style={styles.appsContainer}>
          <Apps name={"To-do List"} icon={faListCheck} path={"/todo"} />
          <Apps
            name={"Unit Converter"}
            icon={faCalculator}
            path={"/unitConverter"}
          />
          <Apps name={"Notes"} icon={faNoteSticky} path={"/notes"} />
        </View>
      </View>
    </>
  );
}
