import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Login Page</Text>
        <Text style={styles.title}>Login Page Logi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    paddingTop: 20,
    color: "white",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
});
