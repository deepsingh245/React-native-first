// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function App() {
  return (
    
    <View style={styles.fluid}>
      <View style={styles.container}>
      <Text style={styles.white}>WhatsApp</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}> 
        {/* <FontAwesomeIcon icon="fa-solid fa-camera" /> */}
        <View style={{backgroundColor:'black',height:30,width:30,marginRight:10}}>
        
          </View>
          <View style={{backgroundColor:'black',height:30,width:30,marginRight:10}}></View>
        <View style={{backgroundColor:'black',height:30,width:30,}}></View>
        </View>
        {/* <Text   tyle={styles.red}>I can now edit the App.</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'flex-end',
    backgroundColor:'#128C7E',
    padding:10,
    borderBottomColor:'black',
    paddingTop:10,
    height:90,
  },
  white: {
    color: "white",
    fontSize: 20,
    
  },
  fluid: {
    // flex:1,
    // marginTop:20,
  },
});
