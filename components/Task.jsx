import React from "react";
import { Text, StyleSheet } from "react-native";
import styles from "../styles/components styles/task";
import CheckBox from "@react-native-community/checkbox";

const Task = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { task } = props;
  return (
    <View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(toggleCheckBox) => setToggleCheckBox(!toggleCheckBox)}
      />
      <Text style={styles.task}>{task}</Text>;
    </View>
  );
};

export default Task;
