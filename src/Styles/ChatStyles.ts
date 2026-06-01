import { StyleSheet } from "react-native";
import { lightColors } from "../theme/colors";

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColors.background.main,
  },
  header: {
    padding: 15,
    paddingTop: 50,
    backgroundColor: lightColors.primary,
    alignItems: "center",
  },
  headerTitle: {
    color: lightColors.text.dark,
    fontSize: 18,
    fontWeight: "bold",
  },
  listContent: {
    padding: 10,
    paddingBottom: 80,
  },
  messageWrapper: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#e0e0e0", // Very basic gray
    borderRadius: 5, // Basic blocky corners
    alignSelf: "flex-start",
    maxWidth: "80%",
  },
  senderWrapper: {
    backgroundColor: lightColors.primary,
    alignSelf: "flex-end",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  senderText: {
    color: "#fff",
  },
  timestamp: {
    fontSize: 10,
    color: "#666",
    marginTop: 5,
    alignSelf: "flex-end",
  },
  senderTimestamp: {
    color: "#ddd",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    paddingBottom: 30, // For bottom spacing
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc", // Basic input box
    padding: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: lightColors.primary,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
