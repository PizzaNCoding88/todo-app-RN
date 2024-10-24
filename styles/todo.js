import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  addTaskBtn: {
    color: "black",
    fontWeight: "600",
  },
  button: {
    width: 30,
    height: 40,
    backgroundColor: "white",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    gap: 10,
  },
  taskInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    gap: 20,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
});
