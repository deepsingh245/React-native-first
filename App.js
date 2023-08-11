import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    
    <View style={styles.fluid}>
      <View style={styles.container}>
        <Text style={styles.red}>I can now edit the App.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    backgroundColor:'grey',
    padding:20,
  },
  red: {
    color: "red",
    fontSize: 20,
  },
  fluid: {
    flex:1,
  },
});
