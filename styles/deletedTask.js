import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
    paddingLeft: 15,
    paddingTop: 10,
  },
  main: {
    backgroundColor: "#000000",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
});
