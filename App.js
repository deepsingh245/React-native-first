// import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Button, Alert } from "react-native";
import FontAwesome, { Icons, SolidIcons } from 'react-native-fontawesome';

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
      <ScrollView>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          <View style={{height:80,borderBottomWidth:2,borderBottomColor:'black',}}></View>
          
        </ScrollView>
      <View
        style={{
          height: 70,
          backgroundColor: "white",
          bottom: 0,
          display:'flex',
          flexDirection:"row",
          alignItems:'center',
          justifyContent:'space-around',
          
        }}>
          <View style={{ backgroundColor: "black", height: 50, width: 50,borderRadius:25,}}>
            <Text style={{color:'white',}}>Chats</Text>
          </View>
          <View style={{ backgroundColor: "black", height: 30, width: 30, marginRight: 10, borderRadius:2, }}></View>
          <View style={{ backgroundColor: "black", height: 30, width: 30, marginRight: 10 }}></View>
          <View style={{ backgroundColor: "black", height: 30, width: 30, marginRight: 10 }}></View>
          {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
          <FontAwesome icon={SolidIcons.smile} />
        </View>
    
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
    flex:1,
  },
});
