// import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Button, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export default function App() {
  
  return (
    <View style={styles.fluid}>
      <View style={styles.container}>
        <Text style={styles.white}>WhatsApp</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ backgroundColor: "black", height: 30, width: 30, marginRight: 10 }}></View>

          <View style={{ backgroundColor: "black", height: 30, width: 30, marginRight: 10 }}></View>
          <View style={{ backgroundColor: "black", height: 30, width: 30 }}></View>
        </View>
      </View>
      {/* <ScrollView>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',backgroundColor:'grey',}}></View>
          
        </ScrollView> */}
      <View
        style={{
          height: 70,
          backgroundColor: 'red',
          // marginTop:100,
          position: 'absolute',
          bottom: 0,
          
        }}
      ></View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#128C7E",
    padding: 10,
    paddingTop: 10,
    height: 90,
  },
  white: {
    color: "white",
    fontSize: 20,
  },
  fluid: {
    
  },
  footer: {
    height: 80,
    backgroundColor: "red",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
