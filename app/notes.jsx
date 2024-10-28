import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Notes = () => {
  return (
    <View>
      <Link href="/">
        <Text>Notes Page</Text>
      </Link>
    </View>
  );
};

export default Notes;
